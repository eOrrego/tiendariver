import Image from "next/image";
import { FaUser, FaShoppingCart } from "react-icons/fa";


export function Header() {

    const logo = "https://tiendariver.vteximg.com.br/arquivos/newLogo_1200x300_rojoynegro.png"

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex flex-1 justify-start"></div>
            <div className="flex flex-1 justify-center">
                <Image src={logo} alt="Tienda River" width={300} height={75} />
            </div>
            <div className="flex flex-1 justify-end items-center space-x-4">
                <FaUser className="text-black text-2xl" />
                <FaShoppingCart className="text-black text-2xl" />
            </div>
        </header>
    );
}