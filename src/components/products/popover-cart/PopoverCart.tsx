'use client';

import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/CartStore';

interface PopoverCartProps {
    onClose: () => void;
}

export function PopoverCart({ onClose }: Readonly<PopoverCartProps>) {
    const { cart, removeFromCart, clearCart } = useCartStore();

    return (
        <div className="absolute right-0 top-16 mt-2 w-96 bg-white shadow-lg rounded-lg z-50">
            <div className="p-4">
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">Carrito</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        Cerrar
                    </button>
                </div>
                <div className="divide-y divide-gray-200">
                    {cart.map((product, index) => (
                        // Usamos index para evitar conflictos con el mismo id pero diferente talla
                        <div key={`${product.id}-${product.size}-${index}`} className="py-4 flex justify-between items-center">
                            <div className="flex items-center">
                                <Image src={product.image} alt={product.title} width={50} height={50} />
                                <div className="ml-4">
                                    <p className="font-semibold">{product.title}</p>
                                    <p className="text-gray-500">Talla: {product.size}</p> {/* Mostrar talla */}
                                    <p className="text-gray-500">Cantidad: {product.quantity}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="font-semibold">${(product.price * product.quantity).toLocaleString()}</p>
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
                        {cart.reduce((total, product) => total + product.price * product.quantity, 0).toLocaleString()}
                    </p>
                    <Link href="/cart" className="w-full bg-black text-white py-2 mt-2 rounded block text-center">
                        Ir al Carrito
                    </Link>
                    <button className="w-full bg-red-600 text-white py-2 mt-2 rounded" onClick={clearCart}>
                        Vaciar Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
