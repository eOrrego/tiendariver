import { ProductCard, ProductsBanner } from '@/components';
import React from 'react';

const products = [
    {
        id: 1,
        category: 'Hombre Tiempo Libre',
        title: 'Campera Deportiva Tejida River Plate',
        price: 159.999,
        discountPrice: 143999,
        image1: 'https://tiendariver.vteximg.com.br/arquivos/ids/171699-500-500/IP9653-Campera_Deportiva_Tejida_River_Plate_Negro-F.png',
        image2: 'https://tiendariver.vteximg.com.br/arquivos/ids/171731-500-500/IP9653-Campera_Deportiva_Tejida_River_Plate_Negro-B.png',
        isNew: false,
    },
    {
        id: 2,
        category: 'Hombre Tiempo Libre',
        title: 'Remera River Plate',
        price: 55.999,
        discountPrice: 50399,
        image1: 'https://tiendariver.vteximg.com.br/arquivos/ids/171697-500-500/HY0427-Remera-River-Plate-F.png',
        image2: 'https://tiendariver.vteximg.com.br/arquivos/ids/171698-500-500/HY0427-Remera-River-Plate-B.png',
        isNew: true,
    },
    {
        id: 3,
        category: 'Hombre Tiempo Libre',
        title: 'Campera Deportiva Tejida River Plate',
        price: 159.999,
        discountPrice: 143999,
        image1: 'https://tiendariver.vteximg.com.br/arquivos/ids/171690-500-500/IP9649-Buzo-Capucha-CARP-F.png',
        image2: 'https://tiendariver.vteximg.com.br/arquivos/ids/171692-500-500/IP9649-Buzo-Capucha-CARP-D1.png',
        isNew: false,
    },
    {
        id: 4,
        category: 'Hombre Tiempo Libre',
        title: 'Remera River Plate',
        price: 55.999,
        discountPrice: 50399,
        image1: 'https://tiendariver.vteximg.com.br/arquivos/ids/171649-500-500/Campera_Reversible_Anthem_River_Plate_Negro_IT9628_F.png',
        image2: 'https://tiendariver.vteximg.com.br/arquivos/ids/171650-500-500/Campera_Reversible_Anthem_River_Plate_Negro_IT9628_F-R.png',
        isNew: true,
    },
    {
        id: 5,
        category: 'Hombre Tiempo Libre',
        title: 'Campera Deportiva Tejida River Plate',
        price: 159.999,
        discountPrice: 143999,
        image1: 'https://tiendariver.vteximg.com.br/arquivos/ids/170776-500-500/HY0438_Fr_Torso_eCom_1.jpg',
        image2: 'https://tiendariver.vteximg.com.br/arquivos/ids/170777-500-500/HY0438_B_Torso_eCom.jpg',
        isNew: false,
    },
    {
        id: 6,
        category: 'Hombre Tiempo Libre',
        title: 'Remera River Plate',
        price: 55.999,
        discountPrice: 50399,
        image1: 'https://tiendariver.vteximg.com.br/arquivos/ids/170644-500-500/IU6090_Frente.png',
        image2: 'https://tiendariver.vteximg.com.br/arquivos/ids/170645-500-500/IU6090_Dorso.png',
        isNew: true,
    },
    {
        id: 7,
        category: 'Hombre Tiempo Libre',
        title: 'Remera River Plate',
        price: 55.999,
        discountPrice: 50399,
        image1: 'https://tiendariver.vteximg.com.br/arquivos/ids/171032-500-500/IP6119_FR_Torso_eCom.png',
        image2: 'https://tiendariver.vteximg.com.br/arquivos/ids/171033-500-500/IP6119_B_Torso_eCom.png',
        isNew: true,
    },
    {
        id: 8,
        category: 'Hombre Tiempo Libre',
        title: 'Campera Deportiva Tejida River Plate',
        price: 159.999,
        discountPrice: 143999,
        image1: 'https://tiendariver.vteximg.com.br/arquivos/ids/170882-500-500/HY3193_FR_Torso_eCom.jpg',
        image2: 'https://tiendariver.vteximg.com.br/arquivos/ids/170883-500-500/HY3193_B_Torso_eCom.jpg',
        isNew: false,
    },
    {
        id: 9,
        category: 'Hombre Tiempo Libre',
        title: 'Remera River Plate',
        price: 55.999,
        discountPrice: 50399,
        image1: 'https://tiendariver.vteximg.com.br/arquivos/ids/170876-500-500/HY3210_FR_Torso_eCom.jpg',
        image2: 'https://tiendariver.vteximg.com.br/arquivos/ids/170877-500-500/HY3210_B_Torso_eCom.jpg',
        isNew: true,
    },
];

const ProductsPage = () => {
    return (
        <section>
            <div className='px-16'>
                <ProductsBanner />
            </div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;
