import { Header } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s - Tienda River',
        default: 'Tienda River',
    },
    description: 'Tienda de ropa de River Plate',
};

export default function ShopLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main className="m-auto" >
                {children}
            </main>
        </>
    );
}