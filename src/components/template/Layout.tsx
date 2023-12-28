import ForcarAutenticacao from "../auth/ForcarAutenticacao";
import Cabecalho from "./components/Cabecalho";
import Content from "./components/Content";
import Menu from "./components/Menu";
import useAppData from "../../data/hook/useAppData";
import LoadingScreen from "./loading/LoadingScreen";

import LayoutProps from "../../interfaces/LayoutProps";

export default function Layout(props: LayoutProps) {
    const { theme, loading } = useAppData();
    
    return (
        <ForcarAutenticacao>
            <div className={`${theme} flex h-screen w-screen relative`}>
                <Menu />
                <div className="flex flex-col p-7 w-full bg-gray-300 dark:bg-[#222226] overflow-auto">
                    <Cabecalho titulo={props.titulo} subtitulo={props.subTitulo} />
                    {!loading ? <Content>{props.children}</Content> : <LoadingScreen />}
                </div>
            </div>
        </ForcarAutenticacao>
    )
}