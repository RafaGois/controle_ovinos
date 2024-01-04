export default interface RadioProps {
    title: string,
    options: any [],
    selected: any,
    setSelected: (selected: any) => void,
    render: boolean,
}