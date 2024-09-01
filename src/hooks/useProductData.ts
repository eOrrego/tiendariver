import { useEffect, useState } from 'react';
import { Product } from '@/types/product.interface';

export const useProductData = (productId: string) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchProduct = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/products/${productId}`, { signal });
                if (!response.ok) {
                    throw new Error(`Failed to fetch product: ${response.statusText}`);
                }
                const data: Product = await response.json();
                setProduct(data);
            } catch (error) {
                if (error instanceof DOMException && error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(error instanceof Error ? error.message : 'Error fetching product details.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();

        return () => {
            controller.abort();
        };
    }, [productId]);

    return { product, loading, error };
};