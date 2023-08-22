import { useState } from "react"
import Porp from "./prop"

const PropChangeRender = () => {
    let [number, setNumber] = useState(1)

    function handleChange(){
        return setNumber(prev=>prev+1)
    }

    return (
        <div>
            <Porp number={number} toggle= {handleChange}/>
            {number}
        </div>
    )
}

export default PropChangeRender

//In this file we are change the prop in child file but still the parent re-renders due to the change in prop.
