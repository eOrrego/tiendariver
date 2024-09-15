import { create } from 'zustand';
import { useCartStore } from './CartStore'; // Importa el store del carrito para acceder a sus datos

interface PersonalData {
    email: string;
    firstName: string;
    lastName: string;
    dni: string;
    phone: string;
}

interface DeliveryData {
    postalCode: string;
    deliveryMethod: string;
    address: string;
}

interface PaymentData {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    securityCode: string;
}

interface CartProduct {
    id: string;
    title: string;
    size: string;
    price: number;
    quantity: number;
    subtotal: number; // Calculamos subtotal por producto
}

interface CheckoutState {
    personalData: PersonalData;
    deliveryData: DeliveryData;
    paymentData: PaymentData;
    cartProducts: CartProduct[];
    setPersonalData: (data: PersonalData) => void;
    setDeliveryData: (data: DeliveryData) => void;
    setPaymentData: (data: PaymentData) => void;
    setCartProducts: (products: CartProduct[]) => void;
    clearCheckoutData: () => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
    personalData: {
        email: '',
        firstName: '',
        lastName: '',
        dni: '',
        phone: '',
    },
    deliveryData: {
        postalCode: '',
        deliveryMethod: '',
        address: '',
    },
    paymentData: {
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        securityCode: '',
    },
    cartProducts: [], // Añadimos la lista de productos del carrito
    setPersonalData: (data) => set({ personalData: data }),
    setDeliveryData: (data) => set({ deliveryData: data }),
    setPaymentData: (data) => set({ paymentData: data }),
    setCartProducts: (products) => set({ cartProducts: products }),
    clearCheckoutData: () =>
        set({
            personalData: {
                email: '',
                firstName: '',
                lastName: '',
                dni: '',
                phone: '',
            },
            deliveryData: {
                postalCode: '',
                deliveryMethod: '',
                address: '',
            },
            paymentData: {
                cardNumber: '',
                cardHolder: '',
                expiryDate: '',
                securityCode: '',
            },
            cartProducts: [],
        }),
}));
