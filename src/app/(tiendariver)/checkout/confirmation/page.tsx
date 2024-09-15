// src/app/(tiendariver)/confirmation/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCheckoutStore } from '@/store/CheckoutStore';
import { useCartStore } from '@/store/CartStore';

const ConfirmationPage = () => {
    const router = useRouter();
    const { clearCheckoutData, cartProducts } = useCheckoutStore();
    const { clearCart } = useCartStore();

    useEffect(() => {
        // // Validar si el usuario viene desde el checkout
        // const cameFromCheckout = sessionStorage.getItem('cameFromCheckout');

        // if (!cameFromCheckout || !cartProducts.length) {
        //     // Redirige si no viene del checkout o si el carrito está vacío
        //     router.push('/');
        //     return;
        // }

        // Limpiar datos del checkout y carrito solo una vez
        clearCheckoutData();
        clearCart();

        // Remueve el flag después de la limpieza para prevenir acceso directo en el futuro
        // sessionStorage.removeItem('cameFromCheckout');
    }, [clearCheckoutData, clearCart, cartProducts.length, router]);

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
