import {
    AddToCart,
    Breadcrumb,
    FavoriteProduct,
    PopoverInfo,
    ProductInfoCards,
    SelectSizes,
    ZoomImage,
} from '@/components';
import { useCartStore } from '@/store/CartStore';

interface ProductDetailProps {
    product: {
        id: string;
        title: string;
        price: number;
        discountPrice: number;
        images: string[];
        category: string;
        subcategory: string;
        description: string;
    };
}

// Promociones mock, puedes ajustar o eliminar si las obtienes de la API
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

export const ProductDetail = ({ product }: ProductDetailProps) => {
    const addToCart = useCartStore((state) => state.addToCart);

    const breadcrumbPaths = [
        { label: 'Home', href: '/' },
        { label: product.category, href: '/products' },
        { label: product.subcategory, href: '/' },
    ];

    const handleAddToCart = (quantity: number) => {
        addToCart(
            {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.images[0],
                quantity,
            },
            quantity
        );
    };

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
                    <AddToCart onAddToCart={handleAddToCart} />
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
