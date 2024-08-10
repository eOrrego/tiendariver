'use client';

import { AddToCart, ProductInfoCards, SelectSizes, ZoomImage } from '@/components';


const product = {
    title: 'Campera Deportiva Tejida River Plate',
    price: 159.999,
    discountPrice: 143999,
    images: [
        'https://tiendariver.vteximg.com.br/arquivos/ids/171699-500-500/IP9653-Campera_Deportiva_Tejida_River_Plate_Negro-F.png',
        'https://tiendariver.vteximg.com.br/arquivos/ids/171731-500-500/IP9653-Campera_Deportiva_Tejida_River_Plate_Negro-B.png',
        'https://tiendariver.vteximg.com.br/arquivos/ids/171732-500-500/IP9653-Campera_Deportiva_Tejida_River_Plate_Negro-D1.png',
    ],
    description: `
    -Animá al River Plate con estilo.
    -Esta campera deportiva de fútbol adidas se destaca con toques de color y un escudo del club bordado.
    -Su diseño cómodo y práctico trae un exterior suave que se encarga de brindar abrigo y un par de bolsillos con cierre que sirven para mantener todo seguro y a la mano mientras te concentrás en el partido.
    -Este producto está hecho con un mínimo de 70% de materiales reciclados.
    -Utilizando materiales reciclados reducimos el desperdicio, nuestra dependencia de los recursos finitos y la huella que generan los productos que fabricamos.
    -Ajuste clásico.
    -Cierre frontal y cuello alto.
    -Tejido plano 100 % nylon reciclado.
    -Forro interno de malla.
    -Bolsillos frontales con cierre.
    -Puños y dobladillo elásticos.
    -Escudo bordado del River Plate.
  `
};

const ProductDetailPage = () => {

    const handleSelectSize = (size: string) => {
        console.log('Selected size:', size);
    };

    const handleAddToCart = (quantity: number) => {
        console.log('Added to cart:', quantity);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <ZoomImage images={product.images} />
                <div className="md:w-1/2 md:pl-8">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <div className="text-red-600 text-2xl font-bold mt-2">${product.price}</div>
                    <div className="text-gray-600 text-sm line-through mt-1">Precio exclusivo socios ${product.discountPrice}</div>
                    <SelectSizes onSelectSize={handleSelectSize} />
                    <AddToCart onAddToCart={handleAddToCart} />
                    <ProductInfoCards />
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2">Descripción</h2>
                <p className="whitespace-pre-line">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetailPage;
