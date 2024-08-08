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
            <div className="flex items-center mt-4">
                <button onClick={() => handleQuantityChange(-1)} className="px-4 py-2 border">-</button>
                <span className="px-4 py-2 border-t border-b">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="px-4 py-2 border">+</button>
            </div>
            <button onClick={() => onAddToCart(quantity)} className="mt-4 bg-black text-white px-4 py-2 rounded">
                Agregar al carrito
            </button>
        </div>
    );
};

