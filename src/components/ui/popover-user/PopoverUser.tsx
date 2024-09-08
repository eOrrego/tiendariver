'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaUser } from "react-icons/fa";
import { useAuthStore } from '@/store/authStore';
import { logoutUser } from '@/services/authService';

export const PopoverUser = () => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement | null>(null);

    // Obtener el estado de autenticación y los detalles del usuario
    const { isAuthenticated, role, logout } = useAuthStore();

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

    const togglePopover = () => setIsOpen((prev) => !prev);

    const handleSignOut = async () => {
        await logoutUser();
        logout();
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div className="text-black text-2xl cursor-pointer" onClick={togglePopover}>
                <FaUser />
            </div>

            {isOpen && (
                <div
                    ref={popoverRef}
                    className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-50"
                >
                    {isAuthenticated ? (
                        <>
                            {role === 'admin' && (
                                <Link href="/admin" passHref>
                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                        Panel de Admin
                                    </button>
                                </Link>
                            )}
                            <Link href="/profile" passHref>
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                    Perfil
                                </button>
                            </Link>
                            <hr className="my-2" />
                            <button
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={handleSignOut}
                            >
                                Cerrar sesión
                            </button>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
