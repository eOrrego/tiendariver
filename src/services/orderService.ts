// src/services/orderService.ts
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

interface OrderData {
    personalData: {
        firstName: string;
        lastName: string;
        email: string;
        dni: string;
        phone: string;
    };
    deliveryData: {
        postalCode: string;
        deliveryMethod: string;
        address: string;
    };
    paymentData: {
        cardNumber: string;
        cardHolder: string;
        expiryDate: string;
        securityCode: string;
    };
    cartProducts: {
        id: string;
        title: string;
        price: number;
        quantity: number;
        size: string;
    }[];
    userId: string; // Añadir ID del usuario para relacionar la orden con el usuario logueado
}

// Función para crear una orden en Firestore
export const createOrder = async (orderData: OrderData) => {
    try {
        const orderRef = await addDoc(collection(db, 'orders'), {
            ...orderData,
            createdAt: new Date(),
        });

        return orderRef.id; // Devuelve el ID de la orden creada
    } catch (error) {
        throw new Error('Error al guardar la orden: ' + (error as Error).message);
    }
};
