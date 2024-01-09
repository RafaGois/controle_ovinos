import { useEffect, useState } from "react";
import ovinoModalProps from "../../../interfaces/OvinoModalProps";
import Button from "../Button";
import Input from "../inputs/Input";
import Modal from "./Modal";

import { formataDataAmericana } from "../../../utils/date/DateFormatter";
import Radio from "../inputs/Radio";
import axios from "axios";
import Operation from "../../../model/Operation";

export default function OvinoModal(props: ovinoModalProps) {

    const [tag, setTag] = useState(props.ovino.tag);
    const [dtBirth, setDtBirth] = useState(formataDataAmericana(props.ovino.dtBirth));
    const [weight, setWeight] = useState(props.ovino?.Pesos[0]?.weight);
    const [gender, setGender] = useState(props.ovino.gender);
    const [active, setActive] = useState(props.ovino.active);
    const [operation, setOperation] = useState<Operation>(null);

    const genders = [
        { id: 1, name: 'M', desc: "Macho" },
        { id: 2, name: 'F', desc: "Femea" }
    ]

    const activities = [
        { id: 1, name: 1, desc: "Sim" },
        { id: 2, name: 0, desc: "Nao" }
    ]

    async function handleSubmit() {

        let ovino = {
            tag,
            dtBirth,
            weight: weight ?? 0,
            gender,
            active: 1,
        }

        try {
            if (props.ovino.id) {
                await axios.patch("http://localhost:8080/ovinos", ovino);
            } else {
                await axios.post("http://localhost:8080/ovinos", ovino);
            }
            finalizaOperacao(new Operation(true, "Sucesso ao executar operacao"))
        } catch (err) {
            finalizaOperacao(new Operation(false, err.response.data[0]))
        }
    }

    //todo cira metodo finalizxa operacao

    function finalizaOperacao(operacao: Operation) {
        setOperation(operacao)

        if (operation?.success) {
            props.setSelectedOvino(null);
            props.refetch();
        }
        setTimeout(() => setOperation(null), 8000);
    }
    
    return (
        <Modal size="small">
            <div className="p-2 flex flex-col gap-1">
                <Input title="Brinco" value={tag} changeValue={setTag} type="number" required render />
                <Input title="Nascimento" value={dtBirth} changeValue={setDtBirth} type="date" required render />
                {/*todo colocar um spiner de mae, ira pegar as com base na data de nascimento*/}
                <Input title="Peso" value={weight} changeValue={setWeight} type="number" required render />
                <Radio title="Genero" options={genders} selected={gender} setSelected={setGender} render />
                <Radio title="Ativo" options={activities} selected={active} setSelected={setActive} render={props.ovino.id != null} />
            </div>
            <div className="bg-gray-100 dark:bg-[#3d3d4b] flex justify-end gap-2 px-2 py-4">
                <Button type="cancel" onClick={() => props.setSelectedOvino(null)} text="Cancelar" />
                <Button type="done" onClick={handleSubmit} text="Salvar" />
            </div>
            {!operation?.success && (
            <div className={`bg-red-500 text-center`}>
                <p>{operation?.message}</p>
            </div>
            )}
        </Modal>
    )
}