import { db } from '@/config/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

// Define la estructura del usuario que guardaremos en Firestore
interface UserData {
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
    role: 'user' | 'admin'; // Puedes ajustar los roles según sea necesario
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