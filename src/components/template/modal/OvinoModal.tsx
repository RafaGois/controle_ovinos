import { useState } from "react";
import ovinoModalProps from "../../../interfaces/OvinoModalProps";
import Button from "../Button";
import Input from "../inputs/Input";
import Modal from "./Modal";

import {formataData} from "../../../utils/date/DateFormatter";

export default function OvinoModal(props: ovinoModalProps) {

    const [dtBirth, setDtBirth] = useState(formataData(props.ovino.dtBirth));
    const [weight, setWeight] = useState(props.ovino.weight);
    
    return (
        <Modal size="small">
            <Input title="Nascimento" value={dtBirth} changeValue={setDtBirth} type="date" required render  />
            <Input title="Peso" value={weight} changeValue={setDtBirth} type="date" required render  />
            <div className="bg-gray-200 dark:bg-gray-600 flex justify-end gap-2 p-2">             
                <Button type="cancel" onClick={() => props.setSelectedOvino(null)} text="Cancelar"/>
                <Button type="done" onClick={() => props.setSelectedOvino(null)} text="Salvar"/>
            </div>
        </Modal>
    )
}