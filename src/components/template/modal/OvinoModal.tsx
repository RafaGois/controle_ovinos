import { useState } from "react";
import ovinoModalProps from "../../../interfaces/OvinoModalProps";
import Button from "../Button";
import Input from "../inputs/Input";
import Modal from "./Modal";

import { formataDataAmericana } from "../../../utils/date/DateFormatter";
import Radio from "../inputs/Radio";
import axios from "axios";
import Operation from "../../../model/Operation";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../inputs/Spinner";

export default function OvinoModal(props: ovinoModalProps) {

    const [tag, setTag] = useState(props.ovino.tag);
    const [dtBirth, setDtBirth] = useState(formataDataAmericana(props.ovino.dtBirth));
    const [weight, setWeight] = useState(props.ovino?.Pesos[0]?.weight);
    const [gender, setGender] = useState(props.ovino.gender);
    const [mother, setMother] = useState(props.ovino.mother);
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

    const { data: elegibleMothers } = useQuery({
        queryKey: ["elegible_mothers_popup_ovinos"],
        queryFn: getElegibleMothers,
    });

    async function getElegibleMothers() {
        const resp = await fetch(
            "http://localhost:8080/ovinos/elegible-mothers"
        );
        return await resp.json();
    }

    async function handleSubmit() {

        let ovino = {
            tag,
            dtBirth,
            weight: weight ?? 0,
            gender,
            mother,
            active,
        }

        try {
            if (props.ovino.id) {
                await axios.patch("http://localhost:8080/ovinos", ovino);
            } else {
                await axios.post("http://localhost:8080/ovinos", ovino);
            }
            setOperation(new Operation(true, "Sucesso ao executar operacao"))
            finalizaOperacao(true)
        } catch (err) {
            setOperation(new Operation(false, err.response.data[0]))
            finalizaOperacao(false)
        } 
    }

    function finalizaOperacao(success: boolean) {  
        if (success) {
            props.setSelectedOvino(null);
            props.refetch();
        }
        setTimeout(() => setOperation(null), 8000);
    }

    return (
        <Modal size="small">
            <div className="p-4 flex flex-col gap-1">
                <Input title="Brinco" value={tag} changeValue={setTag} type="number" required render />
                <Input title="Nascimento" value={dtBirth} changeValue={setDtBirth} type="date" required render />
                <Spinner title="Mae" selectedValue={mother} setValue={setMother} options={elegibleMothers} />
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