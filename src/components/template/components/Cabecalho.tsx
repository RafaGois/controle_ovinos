import CabecalhoProps from "../../../interfaces/CabecalhoProps";

import { HiMenu } from 'react-icons/hi';
import BotaoAlterarTema from "./BotaoAlterarTema";
import AvatarUsuario from "./AvatarUsuario";
import useAppData from "../../../data/hook/useAppData";

export default function Cabecalho(props: CabecalhoProps) {

    const { theme, changeTheme, navbarVisibility, changeVisibility } = useAppData();

    return (
        <div className="flex justify-evenly">
            <HiMenu size={50} color="#9c9c9c" className="mr-5 lg:hidden cursor-pointer" onClick={() => changeVisibility(true)} />
            <div>
                <h1 className={`font-black text-3xl text-gray-900 dark:text-gray-100`}>{props.titulo}</h1>
                <h2 className={`font-light text-sm text-gray-600 dark:text-gray-200`}>{props.subtitulo}</h2>
            </div>
            <div className="flex flex-grow justify-end items-center">
                <BotaoAlterarTema theme={theme} changeTheme={changeTheme} />
                <AvatarUsuario className="ml-3" />
            </div>
        </div>
    )
}