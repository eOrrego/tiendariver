import Image from 'next/image';

interface PublicBannerProps {
    images: { src: string; alt: string; href: string }[];
}

export const PublicBanner: React.FC<PublicBannerProps> = ({ images }) => {
    return (
        <div className="flex justify-center px-48 gap-8 m-5">
            <div className="relative w-full h-96 transition-transform duration-300 ease-in-out transform hover:scale-90 cursor-pointer">
                <Image
                    src={images[0].src}
                    alt="Nueva Camiseta"
                    layout="fill"
                    objectFit="cover"
                />
            </div>


            <div className="relative w-full h-96 transition-transform duration-300 ease-in-out transform hover:scale-90 cursor-pointer">
                <Image
                    src={images[1].src}
                    alt="Mate y Fútbol"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
};
