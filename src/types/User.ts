// types/User.ts
export interface User {
    uid: string;
    email: string;
    firstName?: string;
    lastName?: string;
    role: 'user' | 'admin' | 'guest';
    birthDate?: string;
}
