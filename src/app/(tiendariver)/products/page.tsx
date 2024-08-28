'use client';

import { useEffect, useState } from 'react';

import { ProductCard, ProductsBanner } from '@/components';

interface Product {
    id: number;
    category: string;
    title: string;
    price: number;
    discountPrice: number;
    image1: string;
    image2: string;
    isNew: boolean;
}

const ProductsPage = () => {


    const [productsApi, setProductsApi] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProductsApi(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section>
            <div className='px-16'>
                <ProductsBanner />
            </div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {productsApi.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;
