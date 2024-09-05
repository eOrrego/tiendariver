'use client';

import { PopoverCart, PopoverUser } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from '@/store/CartStore';


export function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const cart = useCartStore((state) => state.cart);

    useEffect(() => {
        setCartItemsCount(cart.reduce((total, item) => total + item.quantity, 0));
    }, [cart]);

    const logo = "https://tiendariver.vteximg.com.br/arquivos/newLogo_1200x300_rojoynegro.png";

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md relative">
            <div className="flex flex-1 justify-start"></div>
            <div className="flex flex-1 justify-center">
                <Link href="/">
                    <Image src={logo} alt="Tienda River" width={300} height={75} />
                </Link>
            </div>
            <div className="flex flex-1 justify-end items-center space-x-4 relative">
                {/* PopoverUser reemplaza el icono FaUser para manejar el popover */}
                <PopoverUser />
                <div className="relative">
                    <FaShoppingCart
                        className="text-black text-2xl cursor-pointer"
                        onClick={toggleCart}
                    />
                    {cartItemsCount > 0 && (
                        <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {cartItemsCount}
                        </span>
                    )}
                </div>
            </div>
            {isCartOpen && <PopoverCart onClose={toggleCart} />}
        </header>
    );
}