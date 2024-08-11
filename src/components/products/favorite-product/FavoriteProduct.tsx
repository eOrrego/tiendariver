'use client';

import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface FavoriteProductProps {
    productId: string;
    initialFavorite?: boolean;
}

export const FavoriteProduct: React.FC<FavoriteProductProps> = ({ productId, initialFavorite = false }) => {
    const [isFavorite, setIsFavorite] = useState(initialFavorite);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);

        // Aquí puedes añadir la lógica para guardar o eliminar el producto de la lista de favoritos
        // usando un API call, por ejemplo, una vez que se integre con Prisma y Postgresql.
        console.log(`Producto ${productId} ${isFavorite ? 'eliminado' : 'añadido'} a favoritos`);
    };

    return (
        <button
            onClick={toggleFavorite}
            className="focus:outline-none transition-colors duration-300 ease-in-out"
        >
            {isFavorite ? (
                <FaHeart className="text-red-500 text-2xl" />
            ) : (
                <FaRegHeart className="text-gray-500 text-2xl hover:text-red-500" />
            )}
        </button>
    );
};
