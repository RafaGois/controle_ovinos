import Link from "next/link";
import useAppData from "../../../data/hook/useAppData";


export default function MenuItem(props: MenuItemProps) {
    const { changeVisibility, selectedTab, changeSelectedTab } = useAppData();

    function returnClassMenuItem() {
        let usual = "flex items-center justify-center h-12 w-12";
        if (props.type === "especial") {
            return `${usual} ${props.className}`;
        } else {
            return `${usual} text-gray-400 dark:text-[#585c59] rounded-lg ${props.className} 
                ${selectedTab === props.url && 'bg-gray-100 hover:rounded-md dark:bg-[#1b1f1d] text-gray-500 dark:text-[#fff]'}`;
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
            </div>
        );
    }

    return (
        <li
            onClick={props.onClick}
            className={`hover:bg-gray-100 dark:hover:bg-[#1b1f1d] cursor-pointer box-border ${props.type === "normal" && "rounded-lg"}`}
        >
            {props.url ? <Link href={props.url}>{renderLink()}</Link> : renderLink()}
        </li>
    )
}