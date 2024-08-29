'use client';

import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';

interface CartItem {
    id: string;
    title: string;
    size?: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartListProps {
    items: CartItem[];
    onIncrement: (id: string) => void;
    onDecrement: (id: string) => void;
    onRemove: (id: string) => void;
    onClearCart: () => void;
}

export const CartList: React.FC<CartListProps> = ({
    items,
    onIncrement,
    onDecrement,
    onRemove,
    onClearCart,
}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <Image src={item.image} alt={item.title} width={80} height={80} />
                        <div className="ml-4">
                            <div className="text-gray-700 font-semibold">{item.title}</div>
                            <div className="text-gray-500 text-sm">Tamaño: {item.size}</div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center border rounded">
                            <button
                                className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                                onClick={() => onDecrement(item.id)}
                            >
                                -
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button
                                className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                                onClick={() => onIncrement(item.id)}
                            >
                                +
                            </button>
                        </div>
                        <div className="ml-4 font-semibold text-gray-700">
                            ${item.price * item.quantity}
                        </div>
                        <button
                            className="ml-4 text-red-500 hover:text-red-700"
                            onClick={() => onRemove(item.id)}
                        >
                            <FaTrash />
                        </button>
                    </div>
                </div>
            ))}
            <div className="flex justify-between items-center mt-6">
                <div>
                    <input type="checkbox" className="mr-2" /> Quiero incluir una bolsa para regalo
                </div>
                <button
                    className="text-red-500 hover:text-red-700"
                    onClick={onClearCart}
                >
                    Vaciar Carrito
                </button>
            </div>
        </div>
    );
};
