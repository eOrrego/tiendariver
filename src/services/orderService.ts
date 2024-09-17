// src/services/orderService.ts
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import { OrderData } from '@/types/Order';

// Función para crear una orden en Firestore
export const createOrder = async (orderData: OrderData) => {
    try {
        const orderRef = await addDoc(collection(db, 'orders'), {
            ...orderData,
            createdAt: new Date(), // Agrega la fecha de creación
        });

        return orderRef.id; // Devuelve el ID de la orden creada
    } catch (error) {
        throw new Error('Error al guardar la orden: ' + (error as Error).message);
    }
};

// Función para obtener todas las órdenes de un usuario por su userId
export const fetchUserOrders = async (userEmail: string): Promise<OrderData[]> => {
    try {
        const ordersRef = collection(db, 'orders');
        const q = query(ordersRef, where('userEmail', '==', userEmail));
        const querySnapshot = await getDocs(q);

        // Mapea los documentos obtenidos a un arreglo de órdenes
        const orders: OrderData[] = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                createdAt: data.createdAt.toDate(), // Convierte el timestamp a Date
                personalData: data.personalData,
                deliveryData: data.deliveryData,
                paymentData: data.paymentData,
                cartProducts: data.cartProducts,
                userId: data.userId,
                userEmail: data.userEmail,
            } as OrderData;
        });

        return orders;
    } catch (error) {
        throw new Error('Error al obtener las órdenes del usuario: ' + (error as Error).message);
    }
};