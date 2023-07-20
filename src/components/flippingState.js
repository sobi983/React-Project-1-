import { useState } from "react"

export default function FlipState(){
    let [isGoingOut, setIsGoingOut] = useState(false)

    function changeStatus(){
        setIsGoingOut(prevIsGoingOut => prevIsGoingOut === true ? false : true)
    }
    //OR
    // function changeStatus(){
    //     setIsGoingOut(prevIsGoingOut => !prevIsGoingOut )
    // } 
    return(
        <div className="" onClick={changeStatus}>
            Flip me: {isGoingOut ? "Yes" : "No"}
        </div>
    )
}