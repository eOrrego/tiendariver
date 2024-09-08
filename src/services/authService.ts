import { auth, db } from '@/config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Función para registrar un nuevo usuario
export const registerUser = async (email: string, password: string, userData: any) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Guardar datos adicionales en Firestore
        await setDoc(doc(db, 'users', user.uid), {
            email,
            ...userData,
        });

        return { ...user, ...userData };
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

// Función para iniciar sesión con correo y contraseña y obtener detalles adicionales del usuario
export const loginUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Obtener los datos del usuario desde Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));

        if (userDoc.exists()) {
            const userData = userDoc.data();
            return { ...user, ...userData }; // Combina los datos del usuario de Firebase con los de Firestore
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
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                resolve(user);
            } else {
                reject(new Error('No hay usuario autenticado'));
            }
            unsubscribe();
        });
    });
};