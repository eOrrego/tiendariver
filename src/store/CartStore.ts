'use client';

import { create } from 'zustand';

// Definición de la interfaz del producto en el carrito
interface CartProduct {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
    size: string; // Talla del producto
}


// Definición de la interfaz del estado del carrito y las acciones
interface CartState {
    cart: CartProduct[];
    addToCart: (product: CartProduct, quantity: number) => void;
    incrementQuantity: (id: string, size: string) => void;
    decrementQuantity: (id: string, size: string) => void;
    removeFromCart: (id: string, size: string) => void;
    clearCart: () => void;
}


// Creación del store del carrito
export const useCartStore = create<CartState>((set, get) => ({
    cart: [],

    // Función para agregar productos al carrito con su talla
    addToCart: (product, quantity) => {
        const existingProduct = get().cart.find(
            (item) => item.id === product.id && item.size === product.size
        );

        if (existingProduct) {
            // Verifica si ya existe el mismo producto con el mismo id y talle
            set({
                cart: get().cart.map((item) =>
                    item.id === product.id && item.size === product.size
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                ),
            });
        } else {
            // Añade el nuevo producto al carrito
            set({
                cart: [...get().cart, { ...product, quantity }],
            });
        }
    },

    // Función para incrementar la cantidad de un producto por talla
    incrementQuantity: (id, size) => {
        set({
            cart: get().cart.map((item) =>
                item.id === id && item.size === size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        });
    },

    // Función para decrementar la cantidad de un producto por talla
    decrementQuantity: (id, size) => {
        set({
            cart: get().cart.map((item) =>
                item.id === id && item.size === size && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ),
        });
    },

    // Función para eliminar un producto del carrito según talla
    removeFromCart: (id, size) => {
        set({
            cart: get().cart.filter((item) => item.id !== id || item.size !== size),
        });
    },

    // Función para vaciar todo el carrito
    clearCart: () => {
        set({ cart: [] });
    },
}));
