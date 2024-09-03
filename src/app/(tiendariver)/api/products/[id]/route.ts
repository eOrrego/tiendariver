import { NextResponse } from 'next/server';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const docRef = doc(db, 'products', params.id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        // Incluye el id en los datos de respuesta
        const productData = { id: docSnap.id, ...docSnap.data() };

        return NextResponse.json(productData);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
    }
}