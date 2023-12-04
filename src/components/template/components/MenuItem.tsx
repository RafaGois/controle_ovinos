import Link from "next/link";
import useAppData from "../../../data/hook/useAppData";


export default function MenuItem(props: MenuItemProps) {
    const { changeVisibility, selectedTab, changeSelectedTab } = useAppData();

    function returnClassMenuItem() {
        let usual = "flex pl-4 items-center h-12";
        if (props.type === "especial") {
            return `${usual} ${props.className}`;
        } else {
            return `${usual} text-gray-600 dark:text-gray-200 hover:border-l-4 hover:border-green-600 ${props.className} 
                ${selectedTab === props.url && 'border-l-4 border-green-600 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800 rounded-r-md'}`;
        }
    }

    function renderLink() {
        return (
            <div
                className={`${returnClassMenuItem()}`}
                onClick={() => {
                    changeVisibility(false);
                    changeSelectedTab(props.url);
                }}
            >
                {props.icon}
                <span className="text-base font-light ml-3">{props.text}</span>
            </div>
        );
    }

    return (
        <li
            onClick={props.onClick}
            className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer box-border ${props.type === 'normal' && 'w-11/12 rounded-r-md'}`}
        >
            {props.url ? <Link href={props.url}>{renderLink()}</Link> : renderLink()}
        </li>
    )
}