'use client';

import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCheckoutStore } from '@/store/CheckoutStore';
import { useCartStore } from '@/store/CartStore';

const ConfirmationPage = () => {
    const router = useRouter();
    const { clearCheckoutData, cartProducts } = useCheckoutStore();
    const { clearCart } = useCartStore();
    const [isValidAccess, setIsValidAccess] = useState(false);
    const [countdown, setCountdown] = useState(5); // Tiempo de cuenta regresiva en segundos

    // Memoriza las funciones para evitar redefiniciones
    const handleClearData = useCallback(() => {
        clearCheckoutData();
        clearCart();
    }, [clearCheckoutData, clearCart]);

    useEffect(() => {
        const cameFromCheckout = sessionStorage.getItem('cameFromCheckout');

        // Validar si el usuario viene desde el checkout y si hay productos en el carrito
        if (!cameFromCheckout || !cartProducts.length) {
            router.push('/');
        } else {
            // Permitir el acceso a la página de confirmación
            setIsValidAccess(true);

            // Limpiar datos solo si vino del checkout y hay productos en el carrito
            handleClearData();

            // Remueve el flag después de limpiar los datos
            sessionStorage.removeItem('cameFromCheckout');
        }
    }, [cartProducts.length, handleClearData, router]);

    // Efecto para manejar la cuenta regresiva y redirección solo si el acceso es válido
    useEffect(() => {
        if (isValidAccess) {
            const countdownInterval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev === 1) {
                        clearInterval(countdownInterval);
                        router.push('/'); // Redirigir al home después de la cuenta regresiva
                    }
                    return prev - 1;
                });
            }, 1000);

            // Limpia el intervalo cuando el componente se desmonta
            return () => clearInterval(countdownInterval);
        }
    }, [isValidAccess, router]);

    // Evitar mostrar contenido si el acceso no es válido
    if (!isValidAccess) {
        return null;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">¡Gracias por tu compra!</h1>
            <p className="text-center text-gray-600 mb-4">
                Tu pedido ha sido procesado correctamente. Recibirás un correo con los detalles de tu compra.
            </p>
            <p className="text-center text-gray-500">
                Serás redirigido a la página principal en {countdown} segundos...
            </p>
        </div>
    );
};

export default ConfirmationPage;
