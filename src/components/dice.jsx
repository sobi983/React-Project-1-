export default function Dice(props) {

    let styles = {
        backgroundColor: props.onHold === true ? "#59E391" : "#FFFFFF",
    }
    return (
        <div style={styles} onClick={props.hold} className="font-karla border rounded shadow-sm hover:shadow-inner p-2 text-2xl text-center sm:shadow-lg sm:p-4 sm:text-5xl">
            {props.arr}
        </div>
    )
}