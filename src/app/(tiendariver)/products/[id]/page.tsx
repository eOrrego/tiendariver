'use client';

import { Suspense } from 'react';
import { useProductData } from '@/hooks/useProductData';
import { ProductDetail, ProductSkeleton } from '@/components';


const ProductDetailPage = ({ params }: { params: { id: string } }) => {
    const { product, loading, error } = useProductData(params.id);

    if (error) {
        return <p>Error al cargar el producto.</p>;
    }

    if (loading) {
        return <ProductSkeleton />;
    }

    return (
        <Suspense fallback={<ProductSkeleton />}>
            {product && <ProductDetail product={product} />}
        </Suspense>
    );
};

export default ProductDetailPage;
