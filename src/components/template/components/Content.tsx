
export default function Content(props) {
    return (
        <div className={`flex flex-col mt-7 flex-1`}>
            {props.children}
        </div>
    )
}