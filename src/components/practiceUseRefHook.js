import { clear } from "@testing-library/user-event/dist/clear";
import { useRef, useState } from "react"

export default function RefHook() {

    let [seconds, setSeconds] = useState(0)
    // let [id, setID] = useState()
    let id = useRef()


    // The timer can also be acheived by this method but we cannot stop the timer as it is in re-rendering loop
    // function start() {
    //     setID(()=>{
    //         setInterval(() => {
    //            setSeconds(prev => prev + 1)
    //            console.log("Hello")

    //        }, 1000);
    //     })
    // }

    function startTime() {
        id.current = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000);
    }

    function stop() {
        return clearInterval(id.current)
    }



    return (
        <div className="text-white mt-36">
            <div onClick={startTime}>{seconds}</div>
            <div onClick={stop}>Stop</div>
        </div>
    )
}