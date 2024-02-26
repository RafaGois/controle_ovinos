import { useState } from "react"
import Input from "../components/template/inputs/Input";
import useAuth from "../data/hook/useAuth";
import useAppData from "../data/hook/useAppData";

import { GoAlertFill } from "react-icons/go";
import { CgSpinner } from "react-icons/cg";
import { FaCircleCheck } from "react-icons/fa6";
import PopupSituation from "../components/template/PopupSituation";


export default function Home() {
  const { login, register } = useAuth();
  const { changeSelectedTab, selectedTab } = useAppData();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "cadastro">("login");

  const [situation, setSituation] = useState<{type: "loading" | "success" | "error", message: string}>(null)

  async function submeter() {
    if (mode === "login") {
      try {
        setSituation({type:"loading", message: "Carregando."});
        await login(username, password);
        setSituation({type:"success", message: "Sucesso ao executar operacao."});
        changeSelectedTab("/Main");
      } catch (err) {
        setSituation({type:"error", message: err.message ?? 'Erro ao efetuar login.'});
      } finally {
        setTimeout(() => setSituation(null), 5000);
      }
    } else {
      try {
        setSituation({type:"loading", message: "Carregando."});
        await register(name, username, password);
        setSituation({type: "success", message:"Sucesso ao criar usuario."});
      } catch (err) {
        setSituation({type:"error", message: err.message ?? 'Erro ao efetuar login.'});
        setSituation(err.message ?? 'Erro ao criar usuario.');
      } finally {
        setTimeout(() => setSituation(null), 5000);
      }
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[url('../../public/fundo.png')] bg-no-repeat bg-cover bg-center">
      <div className='w-72'>
        {situation && (
          <PopupSituation type={situation.type} message={situation.message}/>
        )}
        <Input title="Nome" type="text" value={name} changeValue={setName} render={mode === "cadastro"} required={false} />
        <Input title="Usuario" type="text" value={username} changeValue={setUsername} render required={true} />
        <Input title="Senha" type="password" value={password} changeValue={setPassword} render required={true} />
        <button className="w-full bg-yellow-500 rounded-md mt-4 mb-2 h-8" onClick={submeter}>{mode === "login" ? "Entrar" : "Cadastrar"}</button>
        {mode === "login" ? (
          <p className="text-center">Nao possui uma conta? Crie uma clicando <span className="text-blue-600 cursor-pointer" onClick={() => setMode("cadastro")}>aqui</span></p>
        ) : (
          <p className="text-center">Ja possui conta? Faca o <span className="text-blue-600 cursor-pointer" onClick={() => setMode("login")}>login</span></p>
        )}
      </div>
    </div>
  )
}
