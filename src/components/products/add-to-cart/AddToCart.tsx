'use client';

import React, { useState } from 'react';

interface AddToCartProps {
    onAddToCart: (quantity: number) => void;
}

export const AddToCart: React.FC<AddToCartProps> = ({ onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (amount: number) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

    return (
        <div>
            <div className="flex items-center my-4 py-6">
                <div className='border'>
                    <button onClick={() => handleQuantityChange(-1)} className="px-4 py-2">-</button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="px-4 py-2">+</button>
                </div>
                <button onClick={() => onAddToCart(quantity)} className=" bg-black text-white ml-8 px-6 py-2 hover:bg-red-500 transition-colors duration-300 ease-in-out">
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

