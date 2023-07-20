import { useState, useTransition } from "react"

export default function BoxChallenge(props) {
 
    const [modes, setModes] = useState(props.mode)
    function toggle(){
        setModes(prevModes => {
            return !prevModes;
        })
    }

    let styles = {
        backgroundColor : modes === true ? "#222222" : "#cccccc"
    }

    return (
        <div style={styles} onClick={toggle} className='mt-10 border-2 border-black w-14 h-14 inline-block m-2 rounded-md' key={props.mode.id}></div>


        //the key warning will not be removed as it is supposed to be inserted in the top level component and currently App.js is the top one. This is done for a sake of practice
        )
}

//Derived State