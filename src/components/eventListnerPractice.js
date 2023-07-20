import { useState } from "react"

// import trollImage from '../img/trollFace.svg'
export default function EventListnerBtn() {
    let [items, setItems] = useState(['Thing 1', 'Thing 2'])

    function addItems(){
        setItems(prevItems => [...prevItems ,(`Thing ${prevItems.length +1 }`)])
    }

    let arrItems = items.map((items)=>{
        return <p>{items}</p>
    })
    return (
        <div className="flex flex-col items-center mt-10">

            <button className="bg-slate-500 border-blue-800" onClick={addItems} >Submit</button>
            <div>
                {arrItems}
            </div>
        </div>
    )
}





// const handleClick = ()=>{
//     console.log('Hello world')
// }

// return(
//     <div className="flex flex-col items-center mt-10">
//         <img src={trollImage} alt="Error" className='w-10' onMouseOver={handleClick}/>
//         <button className="" onClick={handleClick}>Click Me!</button>
//     </div>
// )