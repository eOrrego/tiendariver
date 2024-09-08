import { auth } from '@/config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// Función para registrar un nuevo usuario
export const registerUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

// Función para iniciar sesión con correo y contraseña
export const loginUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
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
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user);
            } else {
                reject(new Error('No user logged in'));
            }
        });
    });
};