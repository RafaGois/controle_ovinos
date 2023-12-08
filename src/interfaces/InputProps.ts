export default interface inputProps {
    title: string,
    type: "text" | "number" | "password",
    value: any,
    changeValue: (newValue: any) => void,
    render: boolean,
    required: boolean
}