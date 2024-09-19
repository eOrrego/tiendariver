

export interface Product {
    id?: string;
    title: string;
    price: number;
    discountPrice: number;
    images: string[];
    category: string;
    subcategory: string;
    description: string;
    sizes: {
        XS: number; // Stock para la talla XS
        S: number;  // Stock para la talla S
        M: number;  // Stock para la talla M
        L: number;  // Stock para la talla L
        XL: number; // Stock para la talla XL
        XXL: number; // Stock para la talla 2XL
    };
    isNew: boolean;
}