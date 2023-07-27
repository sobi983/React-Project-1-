import { useRef, useState } from "react"

export default function StopWatch(props) {

    function hours(secondss) {
        const hours = Math.floor(secondss / 3600) % 24
        return hours < 10 ? "0" + hours : hours
    }

    function minutes(secondss) {
        const minutes = Math.floor((secondss % 3600) / 60)
        return minutes < 10 ? "0" + minutes : minutes
    }

    function secondsWatch(secondss) {
        const remainingSeconds = secondss % 60;
        return remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    }

    return (
        <div className="flex justify-center mt-4">
            <div className="grid grid-cols-3 w-15 text-purple-600 font-handjet text-4xl ">
                <span>{hours(props.sec)}:</span>
                <span>{minutes(props.sec)}:</span>
                <span>{secondsWatch(props.sec)}</span>
            </div>
        </div>
    )
}