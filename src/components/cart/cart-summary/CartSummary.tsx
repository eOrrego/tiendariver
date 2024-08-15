'use client';

import Link from 'next/link';
import React from 'react';

interface CartSummaryProps {
    subtotal: number;
    shipping: number;
    total: number;
    onApplyCoupon: () => void;
    onSelectShipping: (option: 'home' | 'store') => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
    subtotal,
    shipping,
    total,
    onApplyCoupon,
    onSelectShipping,
}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <p className="text-gray-700 font-semibold">Resumen de compra</p>
                <p className="text-sm text-red-500 mt-2">
                    Si tenés un cupón de descuento podés aplicarlo haciendo{' '}
                    <span
                        className="text-red-600 cursor-pointer"
                        onClick={onApplyCoupon}
                    >
                        click aquí
                    </span>
                </p>
            </div>
            <div className="mb-4">
                <button
                    className="w-full bg-red-600 text-white py-2 rounded"
                    onClick={() => onSelectShipping('home')}
                >
                    RECIBIR (en domicilio)
                </button>
                <button
                    className="w-full bg-gray-200 text-gray-700 py-2 rounded mt-2"
                    onClick={() => onSelectShipping('store')}
                >
                    RETIRAR (por un punto)
                </button>
            </div>
            <div className="mb-4">
                <p className="text-gray-500">Subtotal: ${subtotal}</p>
                <p className="text-gray-500">Costo de envío: ${shipping}</p>
                <hr className="my-4" />
                <p className="text-xl font-semibold">Total: ${total}</p>
            </div>
            <Link href="/checkout" passHref>
                <button className="w-full bg-red-600 text-white py-2 rounded">
                    Comprar
                </button>
            </Link>
            <Link href="/products" className="block text-center mt-4 text-red-600">
                Seguir comprando
            </Link>
        </div>
    );
};
