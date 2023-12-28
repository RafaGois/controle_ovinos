import BotaoAlternarTemaProps from "../../../interfaces/BotaoAlterarTemaProps";

import { PiMoonStarsFill } from "react-icons/pi";
import { MdSunny } from "react-icons/md";

export default function BotaoAlterarTema(props: BotaoAlternarTemaProps) {
    return props.theme === 'dark' ? (
        <div
            onClick={() => props.changeTheme()}
            className="hidden sm:flex items-center cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 p-1 rounded-full selection:not-sr-only border-2 border-x-stone-100 transition ease-in-out delay-150"
        >
            <div className="flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full">{<MdSunny />}</div>
            <div className="hidden lg:flex items-center ml-3 text-white">
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div
            onClick={() => props.changeTheme()}
            className="hidden sm:flex items-center justify-end cursor-pointer bg-gradient-to-r from-indigo-700 to-gray-400 w-14 lg:w-24 h-8 p-1 rounded-full selection:not-sr-only border-2 border-gray-600"
        >
            <div className="hidden lg:flex items-center mr-2 text-white">
                <span>Escuro</span>
            </div>
            <div className="flex items-center justify-center bg-gray-700 text-white w-6 h-6 rounded-full">{<PiMoonStarsFill />}</div>
        </div>
    )
}