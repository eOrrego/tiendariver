
export interface OrderData {
    createdAt: Date;
    id: string;
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
    userEmail: string; // Añadir email del usuario para mostrar en la orden
}