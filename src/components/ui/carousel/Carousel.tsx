'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
    { src: 'https://tiendariver.vteximg.com.br/arquivos/ids/170838/2000x500_estadio_desk.jpg', alt: 'Slide 1' },
    { src: 'https://tiendariver.vteximg.com.br/arquivos/ids/171735/Invierno_Desktop.png', alt: 'Slide 2' },
    { src: 'https://tiendariver.vteximg.com.br/arquivos/ids/171645/Adidas-Lanzamientos_Desktop.png', alt: 'Slide 3' },
    { src: 'https://tiendariver.vteximg.com.br/arquivos/ids/171653/BBVA-Tarjeta.png', alt: 'Slide 4' },
];

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative overflow-hidden z-10">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="min-w-full h-auto">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="responsive"
                            width={1920}
                            height={1080}
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-4 h-4 rounded-full mx-2 ${currentSlide === index ? 'bg-red-600' : 'bg-gray-300'}`}
                        onClick={() => handleSlideChange(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};
