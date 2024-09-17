'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useCheckoutStore } from '@/store/CheckoutStore';
import { useCartStore } from '@/store/CartStore';

const ConfirmationPage = () => {
    const router = useRouter();
    const { clearCheckoutData, cartProducts } = useCheckoutStore();
    const { clearCart } = useCartStore();

    // Memoriza las funciones para evitar redefiniciones
    const handleClearData = useCallback(() => {
        clearCheckoutData();
        clearCart();
    }, [clearCheckoutData, clearCart]);

    useEffect(() => {
        const cameFromCheckout = sessionStorage.getItem('cameFromCheckout');

        if (!cameFromCheckout || !cartProducts.length) {
            router.push('/');
            return;
        }

        // Limpiar datos solo si vino del checkout y hay productos en el carrito
        handleClearData();

        sessionStorage.removeItem('cameFromCheckout');
    }, [cartProducts.length, handleClearData, router]);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">¡Gracias por tu compra!</h1>
            <p className="text-center text-gray-600">
                Tu pedido ha sido procesado correctamente. Recibirás un correo con los detalles de tu compra.
            </p>
        </div>
    );
};

export default ConfirmationPage;
