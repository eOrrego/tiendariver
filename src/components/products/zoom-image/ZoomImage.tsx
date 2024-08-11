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
            <div className="flex md:w-11/12 ">
                <div className="flex flex-col items-center space-y-4 mr-4">
                    {images.map((image, index) => (
                        <div key={`thumbnail-${index}-${image}`} className="cursor-pointer">
                            <Image
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                width={150}
                                height={150}
                                onClick={() => handleImageSelect(image)}
                                className="hover:p-1 hover:border hover:border-red-500"
                            />
                        </div>
                    ))}
                </div>
                <div className="relative mx-6">
                    <Image
                        src={selectedImage}
                        alt="Main Product"
                        width={615}
                        height={615}
                    />
                    <button
                        className="absolute top-2 left-2 bg-white p-2 rounded-full hover:text-red-500 shadow-md"
                        onClick={handleZoomToggle}
                    >
                        {isZoomed ? <FaTimes size={20} /> : <FaSearchPlus size={20} />}
                    </button>
                </div>
            </div>

            {isZoomed && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="scale-110">
                        <Image
                            src={selectedImage}
                            alt="Zoomed Product"
                            width={615}
                            height={615}
                            className='m-auto'
                        />
                        <button
                            className="absolute top-2 right-2 bg-white p-2 rounded-full hover:text-red-500 shadow-md"
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

