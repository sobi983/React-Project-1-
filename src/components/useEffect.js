import { useEffect, useState } from "react"

//side effects
export default function UseEffect() {
    const [starWarsData, setStarWarsData] = useState({})
    // let [count, setcount] = useState(0)

    //Here when incrrementing the count the api will be called. Bceause it always checks the previous values in the dependencies list. At the very first load of the page the useEffect rans one time then it rans another time depending on the dependencies 
    // useEffect(()=>{
    //     fetch("https://swapi.dev/api/people/1")
    //         .then(res => res.json())
    //         .then(data => setStarWarsData(data))
    // }, [count])


    //Leaving the dependencies empty will control the useEffects hook to render the functionality only one time when the page is loaded.
    let [nextCharacter, setNewCharacter] = useState(1)
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${nextCharacter}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))

        console.log("Hello")
    }, [nextCharacter])

    return (
        <div>
            {/* <button onClick={()=>setcount(prevState => prevState +1)}>+</button>
            <h1>{count}</h1> */}

            <h1>{JSON.stringify(starWarsData)}</h1>
            <button className="  bg-slate-600 border-black" onClick={() => setNewCharacter(prevCharacter => prevCharacter + 1)}>Next</button>
        </div>
    )
}