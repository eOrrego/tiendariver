import { create } from 'zustand';

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
    setPersonalData: (data: PersonalData) => void;
    setDeliveryData: (data: DeliveryData) => void;
    setPaymentData: (data: PaymentData) => void;
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
    setPersonalData: (data) => set({ personalData: data }),
    setDeliveryData: (data) => set({ deliveryData: data }),
    setPaymentData: (data) => set({ paymentData: data }),
    clearCheckoutData: () => set({
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
    }),
}));
