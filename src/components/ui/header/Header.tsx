import Image from "next/image";
import { FaUser, FaShoppingCart } from "react-icons/fa";

export const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex-1"></div>
            <div className="flex justify-center flex-1">
                <Image src="https://tiendariver.vteximg.com.br/arquivos/newLogo_1200x300_rojoynegro.png?v=637838351505300000" alt="Tienda River" width={50} height={50} />
            </div>
            <div className="flex justify-end items-center flex-1 space-x-4">
                <FaUser className="text-gray-600" />
                <FaShoppingCart className="text-gray-600" />
            </div>
        </header>
    );
};