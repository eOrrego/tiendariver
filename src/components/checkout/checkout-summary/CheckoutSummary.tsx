'use client';

import React from 'react';
import { useCartStore } from '@/store/CartStore';

export const CheckoutSummary = () => {
    const { cart } = useCartStore();
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 0; // Ajuste para costos de envío dinámicos si es necesario.
    const total = subtotal + shipping;

    return (
        <div className="bg-white p-4 shadow rounded-md mb-4 sticky top-0">
            <h2 className="text-lg font-bold mb-4">Resumen de compra</h2>
            <div className="space-y-4">
                {cart.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex justify-between">
                        <span>{item.title} x{item.quantity}</span>
                        <span>${item.price * item.quantity}</span>
                    </div>
                ))}
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Gastos de envío</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};
