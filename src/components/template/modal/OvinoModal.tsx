import { useState } from "react";
import ovinoModalProps from "../../../interfaces/OvinoModalProps";
import Button from "../Button";
import Input from "../inputs/Input";
import Modal from "./Modal";

import { formataDataAmericana } from "../../../utils/date/DateFormatter";
import Radio from "../inputs/Radio";
import axios from "axios";

export default function OvinoModal(props: ovinoModalProps) {

    const [tag, setTag] = useState(props.ovino.tag);
    const [dtBirth, setDtBirth] = useState(formataDataAmericana(props.ovino.dtBirth));
    const [weight, setWeight] = useState(props.ovino?.Pesos[0]?.weight);
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

    async function handleSubmit () {

        let ovino = {
            tag,
            dtBirth,
            weight: weight ?? 0,
            gender,
            active: 1,
        }
        
        if (props.ovino.id) {
            let ret = await axios.patch("http://localhost:8080/ovinos", ovino);
            if(ret.status == 200) {
                props.setSelectedOvino(null);
                props.refetch();
            }
        } else {
            let ret = await axios.post("http://localhost:8080/ovinos", ovino);
            if(ret.status == 200) {
                props.setSelectedOvino(null);
                props.refetch();
            }
        }
    }
    
    return (
        <Modal size="small">
            <div className="p-2 flex flex-col gap-1">
                <Input title="Brinco" value={tag} changeValue={setTag} type="number" required render />
                <Input title="Nascimento" value={dtBirth} changeValue={setDtBirth} type="date" required render />
                {/*todo colocar um spiner de mae, ira pegar as com base na data de nascimento*/}
                <Input title="Peso" value={weight} changeValue={setWeight} type="number" required render />
                <Radio title="Genero" options={genders} selected={gender} setSelected={setGender} render/>
                <Radio title="Ativo" options={activities} selected={active} setSelected={setActive} render={props.ovino.id != null}/>
            </div>
            <div className="bg-gray-100 dark:bg-[#3d3d4b] flex justify-end gap-2 px-2 py-4">
                <Button type="cancel" onClick={() => props.setSelectedOvino(null)} text="Cancelar" />
                <Button type="done" onClick={handleSubmit} text="Salvar" />
            </div>
        </Modal>
    )
}