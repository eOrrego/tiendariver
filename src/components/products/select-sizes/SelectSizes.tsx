'use client';

import React, { useState } from 'react';

interface SelectSizesProps {
    onSelectSize: (size: string) => void;
}

const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

export const SelectSizes: React.FC<SelectSizesProps> = ({ onSelectSize }) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const handleSelectSize = (size: string) => {
        setSelectedSize(size);
        if (onSelectSize) {
            onSelectSize(size);
        }
    };

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Talles disponibles</h3>
            <div className="flex space-x-4">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => handleSelectSize(size)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full border 
              ${selectedSize === size
                                ? 'border-red-500 text-red-500'
                                : 'border-gray-300 text-gray-500'
                            } 
              ${size === '2XL'
                                ? 'text-gray-300 border-gray-300 cursor-not-allowed'
                                : 'hover:border-black hover:text-black'
                            } transition-colors duration-300 ease-in-out`}
                        disabled={size === '2XL'}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};
