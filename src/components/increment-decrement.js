import { useState } from "react"


export default function IncreDecre() {

    let [Number, setNumber] = useState(0)

    function incre() {
        setNumber(prevNumber => prevNumber + 1)
    }

    function decre() {
        setNumber(prevNumber => prevNumber - 1)
        //or
        // setNumber(Number + 1) this approach is not recommended as the variable is observed as immutable so it's better to use callback function like above and change the state of the variable.
    }
    return (
        <div className="flex justify-center mt-10">
            <button className="w-5 bg-slate-700 rounded-full" onClick={decre}>-</button>
            <div className="">
                <h1 className="w-12 bg-slate-400 rounded-full m-5 flex justify-center">{Number}</h1>
            </div>
            <button className="w-5 bg-slate-700 rounded-full" onClick={incre}>+</button>
        </div>
    )
}   