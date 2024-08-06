'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface CarouselProps {
    images: { src: string; alt: string }[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [swiper, setSwiper] = useState<Swiper | null>(null);

    return (
        <div className="relative">
            <Swiper
                spaceBetween={50}
                pagination={{ clickable: true }}
                onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
                className="h-screen"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
