'use client';

import { useEffect, useState, Suspense } from 'react';
import { ProductsBanner, ProductCardSkeleton, ProductCard } from '@/components';
import { Product } from '@/types/product.interface';

const ProductsPage = () => {
    const [productsApi, setProductsApi] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProductsApi(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
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
                    {/* Muestra skeletons mientras los datos están cargando */}
                    {loading
                        ? Array.from({ length: 6 }).map((_, index) => <ProductCardSkeleton key={index} />)
                        : productsApi.map((product) => (
                            <Suspense fallback={<ProductCardSkeleton />} key={product.id}>
                                <ProductCard product={product} />
                            </Suspense>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;
