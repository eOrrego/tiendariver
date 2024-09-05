'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaUser } from "react-icons/fa";

export const PopoverUser = () => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement | null>(null);

    // Maneja el clic fuera del popover para cerrarlo
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Abre o cierra el popover
    const togglePopover = () => setIsOpen((prev) => !prev);

    return (
        <div className="relative">
            <div className="text-black text-2xl cursor-pointer" onClick={togglePopover}>
                {/* Icono de usuario */}
                <FaUser />
            </div>

            {isOpen && (
                <div
                    ref={popoverRef}
                    className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-50"
                >
                    <Link href="/login" passHref>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            Iniciar sesión
                        </button>
                    </Link>
                    <hr className="my-2" />
                    <Link href="/register" passHref>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            Registrarse
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};
