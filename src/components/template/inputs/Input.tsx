import inputProps from "../../../interfaces/InputProps";

export default function Input(props: inputProps) {
    return props.render && (
        <div className={`flex flex-col`}>
            <span
                className={`block mb-2 text-sm font-medium`}
            >{props.title}</span>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type={props.type}
                value={props.value}
                onChange={(e) => props.changeValue(e.target.value)} 
                required={props.required}/>
        </div>
    )
}