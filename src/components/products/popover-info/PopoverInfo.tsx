'use client';

import React, { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import Image from 'next/image';

interface PopoverInfoProps {
    title: string;
    info: Array<{ logo: string; text: string }>;
}

export const PopoverInfo: React.FC<PopoverInfoProps> = ({ title, info }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative my-5 pb-2 border-b"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center cursor-pointer text-gray-700">
                <FaCreditCard className="mr-2 text-black" />
                {title}
            </div>
            {isHovered && (
                <div className="absolute left-0 mt-2 w-96 bg-white shadow-lg border rounded-lg p-4 transform transition-all duration-300 ease-in-out z-10">
                    <div className="arrow-up absolute top-[-10px] left-5 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                    <ul>
                        {info.map((item, index) => (
                            <li key={`${index}-${item.text}`} className="flex items-center mb-3">
                                <Image
                                    src={item.logo}
                                    alt="payment-logo"
                                    width={50}
                                    height={20}
                                    className="mr-4"
                                />
                                <span className="text-green-600 font-semibold">
                                    {item.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
