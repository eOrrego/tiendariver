'use client';

import { CartList, CartSummary } from '@/components';
import React from 'react';
import { useCartStore } from '@/store/CartStore';

const CartPage = () => {
    const { cart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = useCartStore();

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const shipping = 0; // Mock shipping cost
    const total = subtotal + shipping;

    return (
        <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-2/3">
                <CartList
                    items={cart}
                    onIncrement={incrementQuantity}
                    onDecrement={decrementQuantity}
                    onRemove={removeFromCart}
                    onClearCart={clearCart}
                />
            </div>
            <div className="w-full md:w-1/3 mt-6 md:mt-0">
                <CartSummary
                    subtotal={subtotal}
                    shipping={shipping}
                    total={total}
                    onApplyCoupon={() => { }}
                    onSelectShipping={() => { }}
                />
            </div>
        </div>
    );
};

export default CartPage;
