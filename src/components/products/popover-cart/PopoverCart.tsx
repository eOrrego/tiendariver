'use client';

import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/CartStore';
import { useRef } from 'react';

export function PopoverCart({ onClose }: { readonly onClose: () => void }) {
    const { cart, removeFromCart, clearCart } = useCartStore();
    const popoverRef = useRef<HTMLDivElement | null>(null);

    // Maneja el cierre del PopoverCart cuando el cursor sale del componente
    const handleMouseLeave = () => {
        onClose();
    };

    return (
        <div
            ref={popoverRef}
            className="absolute right-0 top-16 mt-2 w-96 bg-white shadow-lg rounded-lg z-50"
            onMouseLeave={handleMouseLeave} // Cierra el PopoverCart al perder el foco
        >
            <div className="p-4">
                <div className="divide-y divide-gray-200">
                    {cart.map((product) => (
                        <div
                            key={`${product.id}-${product.size}`}
                            className="py-4 flex justify-between items-center"
                        >
                            <div className="flex items-center">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={50}
                                    height={50}
                                />
                                <div className="ml-4">
                                    <p className="font-semibold">{product.title}</p>
                                    <p className="text-gray-500">
                                        Cantidad: {product.quantity}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="font-semibold">
                                    ${(product.price * product.quantity).toLocaleString()}
                                </p>
                                <button
                                    className="text-red-600 hover:text-red-800 mt-2"
                                    onClick={() => removeFromCart(product.id, product.size)}
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <p className="font-semibold text-right">
                        Subtotal: $
                        {cart
                            .reduce(
                                (total, product) => total + product.price * product.quantity,
                                0
                            )
                            .toLocaleString()}
                    </p>
                    <Link
                        href="/cart"
                        className="w-full bg-black text-white py-2 mt-2 rounded block text-center"
                    >
                        Ir al Carrito
                    </Link>
                    <button
                        className="w-full bg-red-600 text-white py-2 mt-2 rounded"
                        onClick={clearCart}
                    >
                        Vaciar Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
