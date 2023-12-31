import Image from "next/image";
import useAppData from "../../../data/hook/useAppData"
import useAuth from "../../../data/hook/useAuth";
import MenuItem from "./MenuItem";

import { FiLogOut } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export default function Menu() {
  const { logout, user } = useAuth();
  const { theme, navbarVisibility, changeVisibility } = useAppData();

  return (
    <aside
      className={`${navbarVisibility ? 'flex absolute h-screen' : 'hidden'
        } w-20 flex-col items-center bg-gray-200 text-gray-700 dark:bg-[#121314] lg:flex select-none z-50 shadow-md relative`}>
      <div className="w-full h-16 bg-gradient-to-b from-[#444547] from-10% to-[#121314]  to-90%">
        <Image src={theme === 'dark' ? "/logoPreto.png" : "/logoBranco.png"} alt="logo" width={100} height={50} />
      </div>
      <CgClose
        className="cursor-pointer lg:hidden absolute right-[-40px] top-[10px] bg-white rounded-full p-1 shadow-md"
        size={30} color="#000" onClick={() => changeVisibility(false)} />

      <ul className="flex flex-col flex-grow overflow-y-auto mt-4 gap-2">
        <MenuItem url="/Main" icon={<MdSpaceDashboard size={20} />} type="normal" />
        <MenuItem url="/Rebanho" icon={<BiSolidSpreadsheet size={20} />} type="normal" />
      </ul>
      <ul>
        <MenuItem
          url="/"
          icon={<FiLogOut size={20} />}
          onClick={() => logout()}
          className="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white w-20"
          type="especial"
        />
      </ul>
    </aside>
  )
}