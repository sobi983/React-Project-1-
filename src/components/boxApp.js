// import BoxChallenge from './boxChallengeDerivedState'
import BoxChallenge2 from './boxChallengeMaintaingStateProfessionalWay'
import boxData from '../boxChallengeData'
import { useState } from 'react'

export default function BoxApp() {

    let [data, setBoxData] = useState(boxData)

    // function toggle(id) {
    //     setBoxData(function(prevData){
    //         const newData = []
    //         for(let i=0; i < prevData.length; i++){
    //             const currentData = prevData[i]
    //             if(currentData.id === id){
    //                 const updatedData = {...currentData, on: !currentData.on}
    //                 newData.push(updatedData)
    //             }
    //             else(
    //                 newData.push(currentData)
    //             )
    //         }
    //         console.log(newData)
    //         return newData
    //     })
    // }

    function toggle(id){
        setBoxData(prevData=>{
            return prevData.map(items=>{
                return items.id === id ? {...items, on: !items.on} : items
            })
        })
    }

    let arrBox = data.map((items) => {
        // return <BoxChallenge mode={items.on}/>
        return <BoxChallenge2
            key={items.id}
            mode={items.on}
            toggle={()=>toggle(items.id)}
            // toggle={toggle}
            // id={items.id}
        />


    })
    return (
        <div className=''>
            {arrBox}
        </div>
    )
}