'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Interfaces props for ProductCard
interface ProductCardProps {
    product: {
        id: number;
        title: string;
        category: string;
        price: number;
        discountPrice: number;
        image1: string;
        image2: string;
        isNew: boolean;
    };
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="p-4">
            {/* Link de prueba para redireccionar a la página de detalle del producto */}
            <Link href={`/products/asd`}>
                <div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Image
                        src={isHovered ? product.image2 : product.image1}
                        alt={product.title}
                        width={500}
                        height={400}
                    />
                    {product.isNew && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">NUEVO INGRESO</div>
                    )}
                </div>
                <div className="mt-4">
                    <div className="text-gray-600 text-sm">{product.category}</div>
                    <div className="text-lg font-semibold">{product.title}</div>
                    <div className="text-red-600 text-lg font-bold">${product.price}</div>
                    {product.discountPrice && (
                        <div className="text-gray-600 line-through text-sm">Precio exclusivo socios ${product.discountPrice}</div>
                    )}
                </div>
            </Link>
        </div>
    );
};
