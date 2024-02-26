import { CgSpinner, CgCheckO, CgCloseO } from "react-icons/cg";
export default function PopupSituation(props) {

    function icon() {
        if (props.type == "loading") {
            return <CgSpinner className="animate-spin" />
        } else if (props.type == "success") {
            return <CgCheckO />
        } else {
            return <CgCloseO />
        }
    }

    function bgColor() {
        if (props.type == "loading") {
            return "bg-yellow-400";
        } else if (props.type == "success") {
            return "bg-green-400";
        } else {
            return "bg-red-400";
        }
    }

    return (
        <div className={`${bgColor()} rounded-md p-2 border-2 flex items-center gap-2 absolute bottom-4 right-6`}>
            {icon()}
            <p className="text-base">{props.message}</p>
        </div>
    )
}