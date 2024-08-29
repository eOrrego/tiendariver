// src/store/cartStore.ts
'use client';

import { create } from 'zustand';

// Definición de la interfaz del producto
interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

// Definición de la interfaz del estado del carrito y las acciones
interface CartState {
    cart: Product[];
    addToCart: (product: Product, quantity: number) => void;
    incrementQuantity: (id: string) => void;
    decrementQuantity: (id: string) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

// Creación del store del carrito
export const useCartStore = create<CartState>((set, get) => ({
    cart: [],

    // Función para agregar productos al carrito
    addToCart: (product, quantity) => {
        const existingProduct = get().cart.find((item) => item.id === product.id);
        if (existingProduct) {
            set({
                cart: get().cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                ),
            });
        } else {
            set({
                cart: [...get().cart, { ...product, quantity }],
            });
        }
    },

    // Función para incrementar la cantidad de un producto
    incrementQuantity: (id) => {
        set({
            cart: get().cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
        });
    },

    // Función para decrementar la cantidad de un producto
    decrementQuantity: (id) => {
        set({
            cart: get().cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ),
        });
    },

    // Función para eliminar un producto del carrito
    removeFromCart: (id) => {
        set({
            cart: get().cart.filter((item) => item.id !== id),
        });
    },

    // Función para vaciar todo el carrito
    clearCart: () => {
        set({ cart: [] });
    },
}));
