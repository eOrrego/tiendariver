import { Header, Navbar } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s - Tienda River',
        default: 'Tienda River',
    },
    description: 'Tienda de ropa para el hincha de River Plate',
};

export default function ShopLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                {children}
            </main >
        </>
    );
}