import ModalProps from "../../../interfaces/ModalProps";


export default function Modal(props: ModalProps) {
    return (
        <div className="w-full h-full fixed inset-0 z-50 flex items-center justify-center top-0 p-6 bg-black rounded-sm bg-opacity-30">
            <div className={`bg-white dark:bg-[#2a2a30] overflow-hidden rounded-md text-left shadow-xl m-4 w-full ${props.size != "bigger" ? "sm:max-w-lg" : "h-full"}`}>
                {props.children}
            </div>
        </div>
    )
}