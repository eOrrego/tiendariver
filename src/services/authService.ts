import { auth, db } from '@/config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { User } from '@/types/User'; // Asegúrate de definir este tipo como se indicó anteriormente

// Función para registrar un nuevo usuario
export const registerUser = async (email: string, password: string, userData: Omit<User, 'uid'>) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Guardar datos adicionales en Firestore
        const userDetails: User = {
            uid: user.uid,
            email: user.email!,
            firstName: userData.firstName,
            lastName: userData.lastName,
            role: userData.role || 'user',
            birthDate: userData.birthDate,
        };

        await setDoc(doc(db, 'users', user.uid), userDetails);

        return userDetails;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

// Función para iniciar sesión con correo y contraseña y obtener detalles adicionales del usuario
export const loginUser = async (email: string, password: string): Promise<User> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Obtener los datos del usuario desde Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));

        if (userDoc.exists()) {
            const userData = userDoc.data() as User;
            const { uid, email, ...restUserData } = userData;
            return {
                uid: user.uid,
                email: user.email!,
                ...restUserData,
            };
        } else {
            throw new Error('Usuario no encontrado en la base de datos.');
        }
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

// Función para cerrar sesión
export const logoutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

// Función para obtener el usuario actual
export const getCurrentUser = async (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const userDoc = await getDoc(doc(db, 'users', user.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data() as User;
                        const { uid, email, ...restUserData } = userData;
                        resolve({
                            uid: user.uid,
                            email: user.email!,
                            ...restUserData,
                        });
                    } else {
                        reject(new Error('Usuario no encontrado en la base de datos.'));
                    }
                } catch (error) {
                    reject(new Error('Error al obtener los datos del usuario.'));
                }
            } else {
                resolve(null);
            }
            unsubscribe();
        });
    });
};
