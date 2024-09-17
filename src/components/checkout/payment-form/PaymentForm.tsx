// src/components/checkout/PaymentForm.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCheckoutStore } from '@/store/CheckoutStore';
import { useAuthStore } from '@/store/authStore';
import { createOrder } from '@/services/orderService'; // Importa el nuevo servicio

interface PaymentFormProps {
    onBack: () => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ onBack }) => {
    const { paymentData, setPaymentData, personalData, deliveryData, cartProducts } = useCheckoutStore();
    const { user } = useAuthStore(); // Obtener el usuario logueado desde el store
    const [formData, setFormData] = useState(paymentData);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = async () => {
        if (!user) {
            alert('Debes estar logueado para realizar el pago.');
            return;
        }

        try {
            // Crea la orden usando el servicio y pasa los datos necesarios incluyendo el ID del usuario
            await createOrder({
                personalData,
                deliveryData,
                paymentData: formData,
                cartProducts,
                userId: user.uid, // Añadir el ID del usuario logueado
            });

            // Setea el flag para permitir acceso a la confirmación
            sessionStorage.setItem('cameFromCheckout', 'true');

            alert('Pago realizado con éxito y orden guardada.');

            // Redirige a la página de confirmación
            router.push('/checkout/confirmation');
        } catch (error) {
            console.error('Error al guardar la orden:', error);
            alert('Error al procesar el pago.');
        }
    };

    const handleSubmit = () => {
        setPaymentData(formData);
        handlePayment();
    };

    return (
        <div className="bg-white p-4 shadow rounded-md mb-4">
            <h2 className="text-lg font-bold mb-4">3 - Pago</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Número de Tarjeta"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="cardHolder"
                        placeholder="Nombre y Apellido como figura en la tarjeta"
                        value={formData.cardHolder}
                        onChange={handleChange}
                        className="input input-bordered"
                        required
                    />
                    <input
                        type="text"
                        name="expiryDate"
                        placeholder="Fecha de Vencimiento (MM/AA)"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className="input input-bordered"
                        required
                    />
                </div>
                <input
                    type="text"
                    name="securityCode"
                    placeholder="Código de Seguridad"
                    value={formData.securityCode}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />
                <button type="button" className="btn btn-secondary w-full" onClick={onBack}>
                    Volver
                </button>
                <button type="button" className="btn btn-primary w-full" onClick={handleSubmit}>
                    Iniciar Pago
                </button>
            </form>
        </div>
    );
};
