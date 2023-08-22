import { useState } from "react"
import Child from "./child"


const Parent = () => {
    let [count, setCount] = useState(0)

    function handleChange(){
        return setCount((prev)=> prev+1)
    }
  return (
    <div>
        <h1 onClick={handleChange}>{count}</h1>
      <Child />
    </div>
  )
}

export default Parent
