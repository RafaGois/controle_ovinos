import CardItemProps from "../../interfaces/CardItemProps";
import RadialBar from "../charts/RadialBar";

export default function CardItem(props: CardItemProps) {
    return (
        <div className="bg-[#1e4d20] rounded-xl relative basis-64 flex-grow shadow-lg">
            <div className="bg-[#327534] mb-2 rounded-xl px-4 pt-4 pb-2">
                <div className="flex">
                    <div className="p-2 bg-[#1e4d20] rounded-full">
                        {props.ico}
                    </div>
                    <div className="absolute top-[-10px] right-2">
                        <RadialBar />
                    </div>
                </div>
                <div>
                    <p className="font-thin text-base leading-8">{props.title}</p>
                    <h1 className="font-bold text-2xl leading-none">{props.value}</h1>
                    <small className="font-thin text-center">{props.past}</small>
                </div>
            </div>
        </div>
    )
}