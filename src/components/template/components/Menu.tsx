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
        } w-60 flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 lg:flex select-none z-50 shadow-md`}>
      <div className="h-20 w-full bg-white dark:bg-gradient-to-r dark:from-green-800 dark:to-emerald-500 flex items-center justify-evenly rounded-br-3xl shadow-sm">
        <Image src={theme === 'dark' ? "/logoPreto.png" : "/logoBranco.png"} alt="logo" width={100} height={50} />
        <CgClose size={30} color="#dadada" className="cursor-pointer lg:hidden" onClick={() => changeVisibility(false)} />
      </div>
      <ul className="flex flex-col flex-grow overflow-y-auto mt-4 gap-2">
        <MenuItem url="/Relatorios" text="Relatorios" icon={<MdSpaceDashboard size={20} />} type="normal" />
        <MenuItem url="/Rebanho" text="Rebanho" icon={<BiSolidSpreadsheet size={20} />} type="normal" />
      </ul>
      <ul>
        <MenuItem
          url="/Autenticacao"
          text="Sair"
          icon={<FiLogOut size={20} />}
          onClick={() => logout()}
          className="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white"
          type="especial"
        />
      </ul>
    </aside>
  )
}