import Link from 'next/link';
import Image from 'next/image';

interface PublicBannerProps {
    images: { src: string; alt: string; href: string }[];
}

export const PublicBanner: React.FC<PublicBannerProps> = ({ images }) => {
    return (
        <div className="flex w-full justify-between">
            {images.map((image) => (
                <Link key={image.src} href={image.href}>
                    <div className="relative group">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={200} // Ajusta el ancho según sea necesario
                            height={100} // Ajusta la altura según sea necesario
                            className="transition duration-300 group-hover:scale-110"
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
};
