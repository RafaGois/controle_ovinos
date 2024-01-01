import Image from "next/image";
import useAppData from "../../../data/hook/useAppData"
import useAuth from "../../../data/hook/useAuth";
import MenuItem from "./MenuItem";

import { FiLogOut } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";


export default function Menu() {
  const { logout, user } = useAuth();
  const { theme, navbarVisibility, changeVisibility } = useAppData();

  return (
    <div className={`${navbarVisibility ? 'flex absolute h-screen' : 'hidden'}
     w-24 flex-col items-center lg:flex select-none z-50 relative px-2 py-4 bg-gray-300 dark:bg-[#222226]
     `}>
      <aside
        className="bg-[#327534] shadow-md h-full w-full rounded-xl flex flex-col justify-center items-center"
      >
        <Image src={"/logoBranco.png"} alt="logo" width={100} height={50} className="p-2 mt-2"/>
        <CgClose
          className="cursor-pointer lg:hidden absolute right-[-40px] top-[10px] bg-white rounded-full p-1 shadow-md"
          size={30} color="#000" onClick={() => changeVisibility(false)} />

        <ul className="flex flex-col justify-center items-center flex-grow overflow-y-auto mt-4 gap-2">
          <MenuItem url="/Home" icon={<GoHomeFill size={20} />} type="normal" />
          <MenuItem url="/Main" icon={<MdSpaceDashboard size={20} />} type="normal" />
          <MenuItem url="/Rebanho" icon={<BiSolidSpreadsheet size={20} />} type="normal" />
        </ul>
        <ul>
          <MenuItem
            url="/"
            icon={<FiLogOut size={20} />}
            onClick={() => logout()}
            className="text-white hover:bg-red-400 w-20 hover:rounded-b-lg"
            type="especial"
          />
        </ul>
      </aside>
    </div>
  )
}