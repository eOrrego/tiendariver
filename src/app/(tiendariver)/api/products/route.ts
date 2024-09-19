import { NextResponse } from 'next/server';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import { Product } from '@/types/product.interface';
import { verifyAdminRole } from '@/middleware/authMiddleware';

export async function GET() {
    try {
        const productsCollection = collection(db, 'products');
        const productSnapshot = await getDocs(productsCollection);

        const products = productSnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title,
                price: data.price,
                discountPrice: data.discountPrice,
                images: data.images,
                category: data.category,
                subcategory: data.subcategory,
                description: data.description,
                sizes: data.sizes,
                isNew: data.isNew,
                createdAt: data.createdAt?.toDate() || null, // Manejar el campo `createdAt`
            };
        });

        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Failed to fetch products', details: (error as Error).message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    // Verificar si el usuario es administrador
    const adminCheck = await verifyAdminRole(req);
    if (adminCheck) return adminCheck;  // Si no es admin, retorna la respuesta del middleware

    try {
        const body = await req.json();
        const product: Product = body;

        // Validación mejorada para los campos requeridos
        if (
            !product.title ||
            product.price === undefined || // Permitir 0 como valor válido
            product.discountPrice === undefined || // Permitir 0 como valor válido
            !Array.isArray(product.images) || // Verificar que las imágenes sean un array
            !product.category ||
            !product.subcategory ||
            !product.description ||
            !product.sizes || // Verificar si existe la propiedad sizes
            product.isNew === undefined // Permitir booleano falso (false)
        ) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Crear el producto en la base de datos
        const productsCollection = collection(db, 'products');
        const newProduct = await addDoc(productsCollection, {
            ...product,
            createdAt: new Date(), // Añadir campo de fecha de creación
        });

        // Devolver el ID del nuevo producto en formato JSON
        return NextResponse.json({ id: newProduct.id }, { status: 201 });
    } catch (error) {
        console.error('Error creating product:', error);
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}