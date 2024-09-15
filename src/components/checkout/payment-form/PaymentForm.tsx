'use client';

import React, { useState, useEffect } from 'react';
import { useCheckoutStore } from '@/store/CheckoutStore';
import { useCartStore } from '@/store/CartStore'; // Importar datos del carrito
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

interface PaymentFormProps {
    onBack: () => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ onBack }) => {
    const { paymentData, setPaymentData, personalData, deliveryData, clearCheckoutData, setCartProducts } = useCheckoutStore();
    const { cart } = useCartStore(); // Obtener los productos del carrito
    const [formData, setFormData] = useState(paymentData);

    useEffect(() => {
        // Actualizar productos del carrito en el CheckoutStore
        const formattedCart = cart.map((item) => ({
            ...item,
            subtotal: item.price * item.quantity, // Calcula subtotal por producto
        }));
        setCartProducts(formattedCart);
    }, [cart, setCartProducts]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = async () => {
        try {
            // Calcula el total de la orden
            const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

            // Guardar datos de la orden en Firestore
            await addDoc(collection(db, 'orders'), {
                personalData,
                deliveryData,
                paymentData: formData,
                cartProducts: cart.map(item => ({
                    id: item.id,
                    title: item.title,
                    size: item.size,
                    price: item.price,
                    quantity: item.quantity,
                    subtotal: item.price * item.quantity,
                })),
                total,
                createdAt: new Date(),
            });
            alert('Pago realizado con éxito y orden guardada.');
            clearCheckoutData(); // Limpia el estado del checkout después de guardar la orden
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
