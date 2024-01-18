import Ovino from "../model/Ovino";

export default interface SpinnerProps {
    title: string,
    options: Ovino[],
    selectedValue: any,
    setValue: (newValue: any) => void,
}