import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import ChildCallback from "./childCallback"

const ParentCallback = () => {
    let [count, setCount] = useState(0)
    let [inputValue, setInputValue] = useState("")
    let h = useRef()

    useEffect(() => {
        return h.current.focus()
    }, [])

    // function handleChange() {
    //     return setCount((prev) => prev + 1)
    // }

    let handleChange = useCallback(() =>{
        setCount((prev) => prev + 1)
    }, [count])

    // function calculation(){
    //     console.log("ll")
    //     let t = 0
    //     for(let i=0; i<10000; i++){
    //         t++
    //     }
    //     return t
    // }

    // let save = useMemo(()=>{
    //     return calculation()
    // }, [])


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleChange}>Increment</button>
            <input ref={h} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            {/* <h1>{save}</h1> */}
            <ChildCallback count={count} handleChange={handleChange} />
        </div>
    )
}



export default ParentCallback


//Before what we were doing in memo that the child will only render when there is a change in a specific prop becuase we were using the memo. If we don't use the memo then the child will re-render even if there is a change in the input field that has nothing to do with the child component. Now, we can see that if we pass on the handleChange() into the child a sa prop and we don't increment the value, we change start writing the input field then the child component will still re-render.
//Although the inout field has nothing to do with the child component nor the handleChange() function is being called. Then why the child component is re-rendering.
//This is because React compares old and new props by shallow equality: that is, it considers whether each new prop is reference-equal to the old prop. If you create a new object or array each time the parent is re-rendered, even if the individual elements are each the same, React will still consider it to be changed. Similarly, if you create a new function when rendering the parent component, React will consider it to have changed even if the function has the same definition.

//When you use memo, your component re-renders whenever any prop is not shallowly equal to what it was previously. This means that React compares every prop in your component with its previous value using the Object.is comparison. Note that Object.is(3, 3) is true, but Object.is({}, {}) is false.

//In simple words the memo compares and check the primitive data types(bool, int...) not the non-primitive datatypes.

//Now, how we can handle this. We can make it using the useCallback hook. This hook memorizes the function, object. So, while the child is going to re-render it will compare the memorized value with the previous value and will find no differnce hence, the re-render of the child will not happen.

//How useCallback is working that it have memorized the function and we have given an dependancy of array that if the change occures in count then only the child component will re-render. Now, you can observe that while we are chnaging input the child component is not re-rendering.


