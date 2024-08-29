'use client';

import { useEffect, useState } from 'react';
import {
    AddToCart,
    Breadcrumb,
    FavoriteProduct,
    PopoverInfo,
    ProductInfoCards,
    SelectSizes,
    ZoomImage,
} from '@/components';

interface Product {
    id: string;
    title: string;
    price: number;
    discountPrice: number;
    images: string[];
    category: string;
    subcategory: string;
    description: string;
}

const arrayPromotions = {
    promotions: [
        {
            logo: 'https://tiendariver.vteximg.com.br/arquivos/AmericanExpress-river.png',
            text: '3 cuotas sin interés de $53.333',
        },
        {
            logo: 'https://tiendariver.vteximg.com.br/arquivos/Visa-river.png',
            text: '3 cuotas sin interés de $53.333',
        },
        {
            logo: 'https://tiendariver.vteximg.com.br/arquivos/Mastercard-river.png',
            text: '3 cuotas sin interés de $53.333',
        },
    ],
};

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${params.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [params.id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    const breadcrumbPaths = [
        { label: 'Home', href: '/' },
        { label: product.category, href: '/products' },
        { label: product.subcategory, href: '/' },
    ];

    return (
        <div className="container mx-auto p-4">
            <Breadcrumb paths={breadcrumbPaths} />
            <div className="flex flex-col md:flex-row">
                <ZoomImage images={product.images} />
                <div className="md:px-8 m-auto">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold">{product.title}</h1>
                        <FavoriteProduct productId={product.id} initialFavorite={false} />
                    </div>
                    <div className="text-red-600 text-2xl font-bold mt-2">${product.price}</div>
                    <div className="text-gray-600 text-sm line-through mt-1">
                        Precio exclusivo socios ${product.discountPrice}
                    </div>
                    <PopoverInfo title="¡Mirá nuestra promociones bancarias y formas de pago!" info={arrayPromotions.promotions} />
                    <SelectSizes onSelectSize={() => { }} />
                    <AddToCart onAddToCart={() => { }} />
                    <ProductInfoCards />
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold pb-3 mb-4 border-b-[1px] border-red-500 ">Descripción</h2>
                <p className="whitespace-pre-line">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetailPage;
