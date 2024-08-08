import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="bg-white py-8 shadow-inner">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-4">

                {/* Primera columna - Logo */}
                <div className="flex items-center justify-center md:justify-start">
                    <Image src="https://tiendariver.vteximg.com.br/arquivos/newLogo_1200x300_rojoynegro.png" alt="Tienda River Logo" width={150} height={38} />
                </div>

                {/* Segunda columna - Sobre Tienda River */}
                <div>
                    <h4 className="font-bold mb-4">Sobre Tienda River</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/sobre-nosotros">
                                <span className="text-gray-800 hover:underline cursor-pointer">Nosotros</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Contacto</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Cambios y Devoluciones</span>
                            </Link>
                        </li>
                        <li>
                            <button className="bg-black text-white py-2 px-4 mt-4">
                                Botón de Arrepentimiento
                            </button>
                            <p className="text-sm mt-2">* Solicitud de cancelación de compra</p>
                        </li>
                    </ul>
                </div>

                {/* Tercera columna - Asistencia */}
                <div>
                    <h4 className="font-bold mb-4">Asistencia</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Promociones</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Preguntas Frecuentes</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Política de Privacidad</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Política de Cambios y Devoluciones</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Términos y Condiciones</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Beneficios Socios y Somos River</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Cuarta columna - Tienda Online */}
                <div>
                    <h4 className="font-bold mb-4">Tienda Online</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Fútbol</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Entrenamiento</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Tiempo Libre</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Productos Oficiales</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-gray-800 hover:underline cursor-pointer">Oportunidades</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Quinta columna - Síguenos en */}
                <div>
                    <h4 className="font-bold mb-4">Síguenos en:</h4>
                    <div className="flex space-x-4">
                        <Link href="#">
                            <span className="text-gray-800 hover:text-black cursor-pointer"><FaFacebookF size={24} /></span>
                        </Link>
                        <Link href="#">
                            <span className="text-gray-800 hover:text-black cursor-pointer"><FaInstagram size={24} /></span>
                        </Link>
                        <Link href="#">
                            <span className="text-gray-800 hover:text-black cursor-pointer"><FaTwitter size={24} /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
