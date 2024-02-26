import CardItem from "../components/template/CardItem";
import Layout from "../components/template/Layout";

import { TbAdFilled } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineInsights  } from "react-icons/md";

import { RxArrowTopRight, RxArrowBottomRight } from "react-icons/rx";
import { BsArrowDownRightSquare } from "react-icons/bs";

export default function Reports(props) {
    return (
        <Layout titulo="Reports" subTitulo="Relatorios referentes ao mes atual">
            <div>
                <div className="flex gap-4 flex-wrap">
                    <CardItem ico={<MdOutlineInsights  size={22} />} title="Rebanho" value={100} past="Ultima semana: 100" />
                    <CardItem ico={<RxArrowTopRight size={22} />} title="Nascimentos" value={5} past="Ultima semana: 100" />
                    <CardItem ico={<RxArrowBottomRight size={22} />} title="Baixas" value={20} past="Ultima semana: 100" />
                    <CardItem ico={<TbAdFilled size={22} />} title="Titulo" value={100} past="Ultima semana: 100" />
                    <CardItem ico={<TbMoneybag size={22} />} title="Lucro Bruto" value={100} past="Ultima semana: 100" />
                </div>
            </div>
        </Layout>
    )
}