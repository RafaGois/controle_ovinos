import inputProps from "../../../interfaces/InputProps";

export default function Input(props: inputProps) {
    
    return props.render && (
        <div className={`flex flex-col`}>
            <span
                className={`block mb-2 text-sm font-medium`}
            >{props.title}</span>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-[#3d3d4b] dark:border-[#3d3d4b] dark:placeholder-gray-400 dark:text-white"
                type={props.type}
                value={props.value}
                onChange={(e) => props.changeValue(e.target.value)} 
                required={props.required}/>
        </div>
    )
}