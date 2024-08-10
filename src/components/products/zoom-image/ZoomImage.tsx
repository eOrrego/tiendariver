'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';

interface ZoomImageProps {
    images: string[];
}

export const ZoomImage: React.FC<ZoomImageProps> = ({ images }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleZoomToggle = () => {
        setIsZoomed(!isZoomed);
    };

    const handleImageSelect = (image: string) => {
        setSelectedImage(image);
    };

    return (
        <>
            <div className="flex md:w-1/2">
                <div className="flex flex-col items-center space-y-2 mr-4">
                    {images.map((image, index) => (
                        <div key={`thumbnail-${index}-${image}`} className="relative w-20 h-20 cursor-pointer">
                            <Image
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                width={80}
                                height={80}
                                onClick={() => handleImageSelect(image)}
                            />
                        </div>
                    ))}
                </div>
                <div className="relative w-full h-96">
                    <Image
                        src={selectedImage}
                        alt="Main Product"
                        fill
                        className="object-cover"
                    />
                    <button
                        className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md"
                        onClick={handleZoomToggle}
                    >
                        {isZoomed ? <FaTimes size={20} /> : <FaSearchPlus size={20} />}
                    </button>
                </div>
            </div>

            {isZoomed && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-300 ease-in-out">
                    <div className="relative w-3/4 h-3/4 transform transition-transform duration-300 ease-in-out scale-100">
                        <Image
                            src={selectedImage}
                            alt="Zoomed Product"
                            fill
                            className="object-contain"
                        />
                        <button
                            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
                            onClick={handleZoomToggle}
                        >
                            <FaTimes size={24} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

