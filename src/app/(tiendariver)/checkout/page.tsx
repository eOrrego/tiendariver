'use client';

import React, { useState, useEffect } from 'react';
import { useCheckoutStore } from '@/store/CheckoutStore';
import { useCartStore } from '@/store/CartStore'; // Asegúrate de que esta importación es correcta
import { PersonalDataForm, DeliveryForm, PaymentForm, CheckoutSummary } from '@/components'; // Verifica que los componentes estén bien exportados

const CheckoutPage = () => {
    const [step, setStep] = useState(1);
    const { setCartProducts } = useCheckoutStore(); // Ahora existe en el CheckoutStore
    const { cart } = useCartStore(); // Importamos el store del carrito para obtener los productos

    useEffect(() => {
        // Sincronizamos los productos del carrito con el CheckoutStore
        const formattedCart = cart.map((item) => ({
            ...item,
            subtotal: item.price * item.quantity,
        }));
        setCartProducts(formattedCart); // Actualiza los productos del carrito en el store del checkout
    }, [cart, setCartProducts]);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="flex flex-col lg:flex-row justify-between p-6">
            <div className="lg:w-2/3">
                {step === 1 && <PersonalDataForm onNext={nextStep} />}
                {step === 2 && <DeliveryForm onNext={nextStep} onBack={prevStep} />}
                {step === 3 && <PaymentForm onBack={prevStep} />}
            </div>
            <div className="lg:w-1/3 lg:ml-6">
                <CheckoutSummary />
            </div>
        </div>
    );
};

export default CheckoutPage;
