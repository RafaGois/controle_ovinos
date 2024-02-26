import Link from "next/link";
import useAppData from "../../../data/hook/useAppData";


export default function MenuItem(props: MenuItemProps) {
    const { changeVisibility, selectedTab, changeSelectedTab } = useAppData();

    function returnClassMenuItem() {
        let usual = "flex items-center justify-center h-12 w-12";
        if (props.type === "especial") {
            return `${usual} ${props.className}`;
        } else {
            return `${usual} text-white rounded-lg ${props.className} 
                ${selectedTab === props.url && 'bg-[#4e9650] hover:rounded-lg'}`;
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
            className={` cursor-pointer box-border ${props.type === "normal" && "rounded-lg hover:bg-[#4e9650]"}`}
        >
            {props.url ? <Link href={props.url}>{renderLink()}</Link> : renderLink()}
        </li>
    )
}