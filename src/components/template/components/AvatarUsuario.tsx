import Link from "next/link";
import useAuth from "../../../data/hook/useAuth";
import { useState } from "react";
import Image from "next/image";
import { PiUserCircleDuotone } from "react-icons/pi";


export default function AvatarUsuario(props) {
    const { user } = useAuth();
    const [errorImage, setErrorImage] = useState(false);

    const imageLoader = () => {
        try {
            return `https://urldaapi/images/${user?.id}`;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Link href="/Perfil">
            {!errorImage ?
                <Image
                    src={'/fotoTeste.jpg'}
                    loader={imageLoader}
                    onError={() => setErrorImage(true)}
                    alt="Avatar do Usuario"
                    height={50}
                    width={50}
                    className={`h-9 w-9 rounded-full cursor-pointer object-cover border-2 border-gray-600 dark:border-gray-200 ${props.className}`}
                />
                :
                <PiUserCircleDuotone size={40} color="#fff" className='ml-2' />
            }
        </Link>
    )
}