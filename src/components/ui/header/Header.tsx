'use client';

import { PopoverCart } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";


export function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const logo = "https://tiendariver.vteximg.com.br/arquivos/newLogo_1200x300_rojoynegro.png"

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex flex-1 justify-start"></div>
            <div className="flex flex-1 justify-center">
                <Link href="/">
                    <Image src={logo} alt="Tienda River" width={300} height={75} />
                </Link>
            </div>
            <div className="flex flex-1 justify-end items-center space-x-4">
                <FaUser className="text-black text-2xl" />
                <FaShoppingCart className="text-black text-2xl cursor-pointer" onClick={toggleCart} />
            </div>
            {isCartOpen && <PopoverCart onClose={toggleCart} />}
        </header>
    );
}