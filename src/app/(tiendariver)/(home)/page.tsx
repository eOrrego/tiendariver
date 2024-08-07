import { InfoCards, PublicBanner } from "@/components";

export default function Home() {

  const images = [
    {
      src: 'https://tiendariver.vteximg.com.br/arquivos/Tercera_Boton.png',
      alt: 'Tercera Boton',
      href: '/tercera-boton',
    },
    {
      src: 'https://tiendariver.vteximg.com.br/arquivos/Boton-Termos.png',
      alt: 'Boton Termos',
      href: '/boton-termos',
    },
  ];

  return (
    <section>
      <InfoCards />
      <h2>Tienda River</h2>
      <p>Tienda de ropa de River Plate</p>
      <PublicBanner images={images} />
    </section>
  );
}