import { useState } from "react";
import ovinoModalProps from "../../../interfaces/OvinoModalProps";
import Button from "../Button";
import Input from "../inputs/Input";
import Modal from "./Modal";

import { formataData } from "../../../utils/date/DateFormatter";
import Radio from "../inputs/Radio";

export default function OvinoModal(props: ovinoModalProps) {

    const [tag, setTag] = useState(props.ovino.tag);
    const [dtBirth, setDtBirth] = useState(formataData(props.ovino.dtBirth));
    const [weight, setWeight] = useState(props.ovino.weight);
    const [gender, setGender] = useState(props.ovino.gender);
    const [active, setActive] = useState(props.ovino.active);

    const genders = [
        {id: 1, name: 'M', desc: "Macho"},
        {id: 2, name: 'F', desc: "Femea"}
    ]

    const activities = [
        {id: 1, name: 1, desc: "Sim"},
        {id: 2, name: 0, desc: "Nao"}
    ]

    return (
        <Modal size="small">
            <div className="p-2">
                <Input title="Brinco" value={tag} changeValue={setTag} type="number" required render />
                <Input title="Nascimento" value={dtBirth} changeValue={setDtBirth} type="date" required render />
                {/*todo colocar um spiner de mae, ira pegar as com base na data de nascimento*/}
                <Input title="Peso" value={weight} changeValue={setWeight} type="number" required render />
                {/*todo colocar um spiner de mae, ira pegar as com base na data de nascimento*/}
                <Radio title="Genero" options={genders} selected={gender} setSelected={setGender}/>
                <Radio title="Ativo" options={activities} selected={active + ""} setSelected={setActive}/>
            </div>
            <div className="bg-gray-100 dark:bg-[#333338] flex justify-end gap-2 p-2">
                <Button type="cancel" onClick={() => props.setSelectedOvino(null)} text="Cancelar" />
                <Button type="done" onClick={() => props.setSelectedOvino(null)} text="Salvar" />
            </div>
        </Modal>
    )
}