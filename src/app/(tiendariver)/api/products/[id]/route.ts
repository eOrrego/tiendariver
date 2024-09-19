import { NextResponse } from 'next/server';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import { Product } from '@/types/product.interface';
import { verifyAdminRole } from '@/middleware/authMiddleware';


export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        // Verificar si el ID del producto está presente
        if (!params.id) {
            return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
        }

        const docRef = doc(db, 'products', params.id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        // Estructura explícita del producto
        const productData = {
            id: docSnap.id,
            title: docSnap.data().title,
            price: docSnap.data().price,
            discountPrice: docSnap.data().discountPrice,
            images: docSnap.data().images,
            category: docSnap.data().category,
            subcategory: docSnap.data().subcategory,
            description: docSnap.data().description,
            sizes: docSnap.data().sizes,
            isNew: docSnap.data().isNew,
            createdAt: docSnap.data().createdAt?.toDate() || null, // Convertir Timestamp a Date
            updatedAt: docSnap.data().updatedAt?.toDate() || null, // Convertir Timestamp a Date si existe
        };

        return NextResponse.json(productData);
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json({ error: 'Failed to fetch product', details: (error as Error).message }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    // Verificar si el usuario es administrador
    const adminCheck = await verifyAdminRole(req);
    if (adminCheck) return adminCheck;  // Si no es admin, retorna la respuesta del middleware

    try {
        const body = await req.json();
        const product: Product = body;

        // Verificar si el ID del producto es válido
        if (!params.id) {
            return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
        }

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

        // Actualizar el producto en la base de datos
        const docRef = doc(db, 'products', params.id);
        await updateDoc(docRef, {
            ...product,
            updatedAt: new Date() // Añadir un campo `updatedAt`
        });

        return NextResponse.json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error('Error updating product:', error);
        return NextResponse.json({ error: 'Failed to update product', details: (error as Error).message }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    // Verificar si el usuario es administrador
    const adminCheck = await verifyAdminRole(req);
    if (adminCheck) return adminCheck;  // Si no es admin, retorna la respuesta del middleware

    try {
        // Verificar si el ID del producto es válido
        if (!params.id) {
            return NextResponse.json({ error: 'ID del producto requerido.' }, { status: 400 });
        }

        // Verificar si el producto existe antes de eliminarlo
        const docRef = doc(db, 'products', params.id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return NextResponse.json({ error: 'Producto no encontrado.' }, { status: 404 });
        }

        // Eliminar el producto de la base de datos
        await deleteDoc(docRef);

        return NextResponse.json({ message: 'Producto eliminado exitosamente.', id: params.id });
    } catch (error) {
        console.error('Error eliminando producto:', error);
        return NextResponse.json({ error: 'Error al eliminar producto', details: (error as Error).message }, { status: 500 });
    }
}
