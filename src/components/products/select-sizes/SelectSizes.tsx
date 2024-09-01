'use client';

import React, { useState } from 'react';

interface SelectSizesProps {
    sizes: {
        XS: number;
        S: number;
        M: number;
        L: number;
        XL: number;
        XXL: number;
    };
    onSelectSize: (size: string) => void;
}


export const SelectSizes: React.FC<SelectSizesProps> = ({ sizes, onSelectSize }) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const handleSelectSize = (size: string) => {
        setSelectedSize(size);
        onSelectSize(size);
    };

    // Especifica el orden correcto de los talles
    const orderedSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Talles disponibles</h3>
            <div className="flex space-x-4">
                {orderedSizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => handleSelectSize(size)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full border 
              ${selectedSize === size ? 'border-red-500 text-red-500' : 'border-gray-300 text-gray-500'} 
              ${sizes[size as keyof typeof sizes] === 0 ? 'text-gray-300 border-gray-300 cursor-not-allowed' : 'hover:border-black hover:text-black'} 
              transition-colors duration-300 ease-in-out`}
                        disabled={sizes[size as keyof typeof sizes] === 0}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};
