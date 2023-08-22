import { useState } from "react"

const StateRender = () => {
    let [parent, setParent] = useState(0)

    function handleChange(){
        setParent((prev)=>prev+1)
    }

    console.log("Hello")

    return (
        <div>
            <h1>{parent}</h1>
            <button onClick={handleChange}>Increment</button>
        </div>
    )
}

export default StateRender
