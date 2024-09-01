'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    product: {
        id: string;
        title: string;
        category: string;
        price: number;
        discountPrice: number;
        images: string[];
        isNew: boolean;
    };
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="p-4">
            <Link href={`/products/${product.id}`}>
                <div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Image
                        src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
                        alt={product.title}
                        width={500}
                        height={400}
                        className="object-cover rounded"
                    />
                    {product.isNew && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                            NUEVO INGRESO
                        </div>
                    )}
                </div>
                <div className="mt-4">
                    <div className="text-gray-600 text-sm">{product.category}</div>
                    <div className="text-lg font-semibold">{product.title}</div>
                    <div className="text-red-600 text-lg font-bold">
                        ${product.price.toLocaleString('es-AR')}
                    </div>
                    {product.discountPrice && (
                        <div className="text-gray-600 line-through text-sm">
                            Precio exclusivo socios ${product.discountPrice.toLocaleString('es-AR')}
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
};
