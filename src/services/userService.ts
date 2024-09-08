import { db } from '@/config/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Define la estructura del usuario que guardaremos en Firestore
export interface UserData {
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
    role: string;
}

// Función para guardar los datos del usuario en Firestore
export const saveUserToFirestore = async (userId: string, userData: UserData) => {
    try {
        // Guarda los datos del usuario en la colección 'users', con el ID del usuario de Firebase
        await setDoc(doc(db, 'users', userId), userData);
    } catch (error) {
        throw new Error('Error al guardar los datos del usuario en Firestore: ' + (error as Error).message);
    }
};

// Función para obtener los datos del usuario desde Firestore
export const fetchUserData = async (userId: string) => {
    try {
        const userRef = doc(db, 'users', userId);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            throw new Error('User not found');
        }

        return userSnap.data();
    } catch (error) {
        throw new Error('Error al obtener los datos del usuario: ' + (error as Error).message);
    }
};