import RadioProps from "../../../interfaces/RadioProps"

export default function Ratio(props: RadioProps) {

    function retornaOpcoes() {
        return props.options.map(item => {
            return (
                <li key={item.id + "-" + item.name} onClick={() => props.setSelected(item.name)} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input checked={props.selected == item.name} id={"horizontal-list-radio-license" + props.title} type="radio" value="" className="w-4 h-4" />
                        <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item.desc}</label>
                    </div>
                </li>
            )
        })
    }

    return props.render && (
        <>
            <h2>{props.title}</h2>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-[#3d3d4b] dark:border-[#3d3d4b] dark:text-white">
                {retornaOpcoes()}
            </ul>
        </>

    )
}