export default interface ButtonProps {
    text: string,
    type: "normal" | "cancel" | "done"
    onClick: () => void,
}