import { useEffect, useRef, useState } from "react"
import MemoChild from "./child"

const MemoParent = () => {
    let [count, setCount] = useState(0)
    let [inputValue, setInputValue] = useState("")
    let h = useRef()

    useEffect(()=>{
        return h.current.focus()
    }, [])

    function handleChange() {
        return setCount((prev) => prev + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleChange}>Increment</button>
            <input ref={h} type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
            <MemoChild count={count}/>
        </div>
    )
}

export default MemoParent


//In this file ignore the useEffect and useRef hook, I have used both of them to highlight them on the page render on the input field. Now, the point is for using the memo is that when we use the memo from the react it will prevent re-rendering. In this file when the count changes then the child will re-render else if we do anything in the input field then it doesnot re-renders the child component because we are using memo() in our child component.

//But if we were not using the memo in our child then what would have happened that on each chnage in a input field the child component would have re-rendered. 
