import Ovino from "../model/Ovino";

export default interface ovinoModalProps {
    ovino: Ovino,
    setSelectedOvino: (ovino: Ovino) => void,
    refetch: any,
}