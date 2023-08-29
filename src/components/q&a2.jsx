import he from "he"
import { useState } from "react"

export default function Display2(props) {
    let { theme, question, correct_ans, incorrect_ans } = props
    let [selected, setSelected] = useState(objSet([...incorrect_ans, correct_ans]))
    
    // console.log(selected)

    function objSet(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = { option: arr[i], active: false }
        }
        return arr
    }

    function onHold(ans) {
        setSelected(prev => {
            return prev.map(items => {
                if (ans === items.option) {
                    return { ...items, active: !items.active }
                }
                else {
                    return items
                }

            })
        })
    }


    let btns = selected.map((items, id) => (
        <Btns key={id} active={items.active} option={items.option} onHold={()=>onHold(items.option)} />
    ))


    return (
        <div>
            <h1 className={`${theme[0] === 'night' ? "text-dp" : "text-bbb"} font-bold text-sm sm:text-xl pl-2`}>{he.decode(question)}</h1>
            <div className="flex gap-5">
                {btns}
            </div>
            
        </div>
    )
}

function Btns(props) {
    const { active, option, onHold } = props

    let styled = {
        backgroundColor: active ? "#93B1A6" : "#FBF0B2"
    }

    return (
        <div style={styled} className="text-black" onClick={() => onHold(option)}>
            {option}
        </div>
    )
}


// {theme[0] === "night" ?
//     <button className="relative inline-flex items-center justify-center p-0.5 mr-2 mb-10 overflow-hidden text-xs sm:text-sm font-medium rounded-lg group bg-gradient-to-br from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% group-hover:from-indigo-500  group-hover:via-purple-500 group-hover:to-pink-500 text-white focus:ring-4" onClick={()=>onHold(items)} >

//         <span className="relative px-2 py-1 transition-all ease-in duration-75  bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
//             {he.decode(items)}
//         </span>
//     </button> :

//     <button className="relative inline-flex items-center justify-center p-0.5 mr-2 mb-10 overflow-hidden text-xs sm:text-sm font-medium rounded-lg group bg-gradient-to-br from-b from-10% via-bb via-30% to-bbb to-90% group-hover:from-b  group-hover:via-bb group-hover:to-bbb text-b hover:text-white focus:ring-4">

//         <span className="relative px-2 py-1 transition-all ease-in duration-75  bg-white rounded-md group-hover:bg-opacity-0 ">
//             {he.decode(items)}
//         </span>
//     </button>
// }