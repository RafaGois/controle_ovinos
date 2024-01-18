import SpinnerProps from "../../../interfaces/SpinnerProps";

export default function Spinner(props: SpinnerProps) {

    function returnOptions() {
        return props?.options?.map(opcao => {
            return <option 
            key={opcao.tag} 
            value={opcao.tag}
            selected={props.selectedValue === opcao.tag}
            onClick={() => props.selectedValue(opcao.tag)}
            >{opcao.tag}</option>
        })
    }

    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.title}</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-[#3d3d4b] dark:border-[#3d3d4b] dark:text-white">
                <option onClick={() => props.selectedValue(null)}>Informe um valor.</option>
                {returnOptions()}
            </select>
        </>
    )
}