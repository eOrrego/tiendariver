import { getCurrentUser } from "@/services/authService";
import { fetchUserData } from "@/services/userService";
import { NextResponse } from "next/server";


export async function verifyAdminRole(req: Request) {
    // Obtener el usuario autenticado desde Firebase Auth
    const user = await getCurrentUser();

    if (!user) {
        return NextResponse.json({ error: 'Usuario no autenticado' }, { status: 401 });
    }

    // Obtener los datos del usuario desde Firestore
    const userData = await fetchUserData(user.uid);

    // Verificar si el usuario tiene el rol de administrador
    if (userData.role !== 'admin') {
        return NextResponse.json({ error: 'Acceso denegado. Solo administradores permitidos' }, { status: 403 });
    }

    return null;  // Devuelve `null` si la verificación es exitosa (es admin)
}