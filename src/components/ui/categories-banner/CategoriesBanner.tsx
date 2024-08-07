// src/components/CategoriesBanner.js
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        href: "/categories/hombres",
        src: "https://tiendariver.vteximg.com.br/arquivos/hombre_DESK.png",
        alt: "Hombre",
        label: "Hombre",
    },
    {
        href: "/categories/mujeres",
        src: "https://tiendariver.vteximg.com.br/arquivos/mujer_DESK.png",
        alt: "Mujer",
        label: "Mujer",
    },
    {
        href: "/categories/ninos",
        src: "https://tiendariver.vteximg.com.br/arquivos/nino_DESK.png",
        alt: "Niños",
        label: "Niños",
    },
];

export const CategoriesBanner = () => {
    return (
        <div className="flex justify-center gap-4 my-5">
            {categories.map((category) => (
                <Link href={category.href} key={category.label}>
                    <div className="relative w-full transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <Image
                            src={category.src}
                            alt={category.alt}
                            width={422}
                            height={528}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-center">
                            {category.label}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
