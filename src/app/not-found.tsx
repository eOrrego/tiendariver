import { Footer, Header, Navbar } from '@/components'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main>
            <Header />
            <Navbar />
            <section className="flex flex-col items-center justify-center h-96 ">
                <h2 className="text-4xl font-bold">Lo sentimos, no tenemos un resultado para tu búsqueda</h2>
                <p className="text-lg">Podés probar escribiendo de otra forma, usando otra palabra clave, navegar por nuestras categorías o volver a la página de inicio para ver nuestras ofertas.</p>
                <Link href="/">
                    <button className="bg-black text-white py-4 px-11 mt-4">
                        IR A INICIO
                    </button>
                </Link>
            </section>
            <Footer />
        </main>
    )
}