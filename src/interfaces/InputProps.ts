export default interface inputProps {
    title: string,
    type: "text" | "number" | "password" | "date",
    value: any,
    changeValue: (newValue: any) => void,
    render: boolean,
    required: boolean,
}