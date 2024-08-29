'use client';

import React, { useState } from 'react';

interface AddToCartProps {
    onAddToCart: (quantity: number) => void; // Ajuste para recibir la función desde el padre
}

export const AddToCart: React.FC<AddToCartProps> = ({ onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (amount: number) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

    const handleAddToCart = () => {
        onAddToCart(quantity); // Se llama a la función pasada como prop con la cantidad actual
    };

    return (
        <div>
            <div className="flex items-center my-4 py-6">
                <div className="border">
                    <button onClick={() => handleQuantityChange(-1)} className="px-4 py-2">
                        -
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="px-4 py-2">
                        +
                    </button>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="bg-black text-white ml-8 px-6 py-2 hover:bg-red-500 transition-colors duration-300 ease-in-out"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};
