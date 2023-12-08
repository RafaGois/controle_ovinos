import { useState } from "react"
import Input from "../components/template/inputs/Input";

export default function Home() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState<"login" | "cadastro">("login");
  return (
    <div className="flex items-center justify-center h-screen bg-[url('../../public/fundo.png')] bg-no-repeat bg-cover bg-center">
      <div className=""></div>
      <div className=''>
        <Input title="Nome" type="text" value={name} changeValue={setName} render={type === "cadastro"} required={false} />
        <Input title="Usuario" type="text" value={username} changeValue={setUsername} render required={true} />
        <Input title="Senha" type="password" value={password} changeValue={setPassword} render required={true} />
        {type === "login" ? (
          <p>Nao possui uma conta? Crie uma clicando <span className="text-blue-600 cursor-pointer" onClick={() => setType("cadastro")}>aqui</span></p>
        ) : (
          <p>Ja possui conta? Faca o <span className="text-blue-600 cursor-pointer" onClick={() => setType("login")}>login</span></p>
        )}
      </div>
    </div>
  )
}
