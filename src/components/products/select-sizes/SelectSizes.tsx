'use client';

import React, { useState } from 'react';

interface SelectSizesProps {
    onSelectSize: (size: string) => void;
}

const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

export const SelectSizes: React.FC<SelectSizesProps> = ({ onSelectSize }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSelectSize = (size: any) => {
        setSelectedSize(size);
        onSelectSize(size);
    };

    return (
        <div>
            <div className="text-lg font-semibold mb-2">Talles disponibles</div>
            <div className="flex space-x-2">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => handleSelectSize(size)}
                        className={`p-2 border rounded-full ${selectedSize === size ? 'border-red-600 text-red-600' : 'border-gray-300 text-gray-600'}`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};
