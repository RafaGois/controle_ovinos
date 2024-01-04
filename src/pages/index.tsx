import { useState } from "react"
import Input from "../components/template/inputs/Input";
import useAuth from "../data/hook/useAuth";
import useAppData from "../data/hook/useAppData";

import { GoAlertFill } from "react-icons/go";
import { CgSpinner } from "react-icons/cg";
import { FaCircleCheck } from "react-icons/fa6";


export default function Home() {
  const { login, register } = useAuth();
  const { changeSelectedTab, selectedTab } = useAppData();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "cadastro">("login");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  async function submeter() {
    if (mode === "login") {
      try {
        setLoading(true);
        await login(username, password);
        exibirSuccess("Logado.");
        setLoading(false);
        changeSelectedTab("/Main");
      } catch (err) {
        setLoading(false);
        exibirError(err.message ?? 'Erro ao efetuar login.');
      }
    } else {
      try {
        setLoading(true);
        await register(name, username, password);
        exibirSuccess("Sucesso ao criar usuario.");
        setLoading(false);
      } catch (err) {
        setLoading(false);
        exibirError(err.message ?? 'Erro ao criar usuario.');
      }
    }
  }

  function exibirError(msg: string, tempoEmSegundos = 5) {
    setLoading(false);
    console.log(msg);
    
    setError(msg);
    setTimeout(() => setError(null), tempoEmSegundos * 1000);
  }

  function exibirSuccess(msg: string, tempoEmSegundos = 5) {
    setLoading(false);
    setSuccess(msg);
    setTimeout(() => setSuccess(null), tempoEmSegundos * 1000);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[url('../../public/fundo.png')] bg-no-repeat bg-cover bg-center">
      <div className='w-72'>
        {success && (
          <div className="bg-green-500 rounded-md p-2 border-2 flex items-center gap-2">
            <FaCircleCheck size={22}/>
            <p>{success}</p>
          </div>
        )}
        {error && (
          <div className="bg-red-600 rounded-md p-2 border-2 flex items-center gap-2">
            <GoAlertFill size={22}/>
            <p>{error}</p>
          </div>
        )}
        {loading && (
          <div className="bg-yellow-400 rounded-md p-2 border-2 flex items-center gap-2">
            <CgSpinner size={25} className="animate-spin"/>
            <p>Carregando...</p>
          </div>
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
