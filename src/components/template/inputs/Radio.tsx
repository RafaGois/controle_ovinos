import RadioProps from "../../../interfaces/RadioProps"

export default function Ratio(props: RadioProps) {

    function retornaOpcoes() {
        return props.options.map(item => {
            return (
                <li onClick={() => props.setSelected(item.name)} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600" key={item.id}>
                    <div className="flex items-center ps-3">
                        <input checked={props.selected === item.name} id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item.desc}</label>
                    </div>
                </li>
            )
        })
    }

    return (
        <>
            <h2>{props.title}</h2>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-[#3d3d4b] dark:border-[#3d3d4b] dark:text-white">
                {retornaOpcoes()}
            </ul>
        </>

    )
}