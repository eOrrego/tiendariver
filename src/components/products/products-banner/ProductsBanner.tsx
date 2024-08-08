import Image from 'next/image';

export const ProductsBanner = () => {
    return (
        <div className="w-full relative h-32">
            <Image
                src="https://tiendariver.vteximg.com.br/arquivos/ids/169225/Banner_Categoria.jpg"
                alt="Products Banner"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
};
