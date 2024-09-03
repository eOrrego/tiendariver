'use client';

import { PopoverCart } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useCartStore } from '@/store/CartStore';


export function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItemsCount, setCartItemsCount] = useState(0); // Estado local para manejar la cantidad de ítems en el carrito

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    // Obtener el estado del carrito desde el store
    const cart = useCartStore((state) => state.cart);

    // Actualizar la cantidad de ítems en el carrito después de que el componente se haya montado
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
                <FaUser className="text-black text-2xl" />
                <div className="relative">
                    <FaShoppingCart
                        className="text-black text-2xl cursor-pointer"
                        onClick={toggleCart}
                    />
                    {/* Mostrar el globo solo si hay productos en el carrito */}
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