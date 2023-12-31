import ButtonProps from "../../interfaces/ButtonProps";


export default function Button (props: ButtonProps) {

    function retornaCor () {
        if(props.type === "normal") {
            return "bg-gray-300"
        } else if (props.type === "cancel") {
            return "bg-red-500"
        } else if (props.type === "done") {
            return "bg-green-700"
        }
    }

    return <button className={`${retornaCor()} px-2 py-1 rounded-sm`} onClick={() => props.onClick()}>{props.text}</button>
}