import Image from 'next/image';

export default function About() {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full relative h-80">
                <Image
                    src="https://tiendariver.vteximg.com.br/arquivos/ids/155862/sobre-nosotros_3.png"
                    alt="Banner Sobre Nosotros"
                    width={1280}
                    height={277}
                    className='m-auto'
                />
            </div>
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-4xl font-bold text-center my-6">¡Sí, soy River!</h1>
                <ul className="list-none space-y-4 text-lg text-gray-700">
                    <li>
                        El Club más grande de la Argentina es reconocido mundialmente por una filosofía y un estilo de juego que quedaron inmortalizados en la sangre riverplatense desde que se comenzaron a escribir las primeras páginas doradas de su gloriosa historia.
                    </li>
                    <li>
                        Equipos como La Máquina demuestran el paladar exigente que tiene el hincha riverplatense.
                    </li>
                    <li>
                        Pero la grandeza de River no sólo está ligada a lo futbolístico sino que también contagia con su filosofía al ámbito social y educacional.
                    </li>
                    <li>
                        Nuestra grandeza recorre lo ancho y lo largo del país y del mundo entero. Por cantidad de socios, por sus filiales, por su filosofía, por su famoso semillero, por sus ídolos, por el estilo, por su hinchada, por su Estadio, por sus lujos y gambetas, por el buen juego y por muchas cosas más, somos el Más Grande, Lejos...
                    </li>
                    <li>
                        A través de nuestra Tienda Oficial buscamos democratizar el acceso a los productos oficiales a todos nuestros hinchas, estén en donde estén.
                    </li>
                    <li>
                        ¡Esperamos que disfrutes nuestra tienda!
                    </li>
                </ul>
            </div>
        </div>
    );
};