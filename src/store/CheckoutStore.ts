// src/store/CheckoutStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartProduct } from './CartStore'; // Asegúrate de importar correctamente el tipo CartProduct

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

export const useCheckoutStore = create<CheckoutState>()(
    persist(
        (set) => ({
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
        }),
        {
            name: 'checkout-storage', // Nombre del key en localStorage
            getStorage: () => localStorage, // Define el almacenamiento en localStorage
        }
    )
);
