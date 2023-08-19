import { Footer, NavBar } from "./home";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { nanoid } from 'nanoid'
import '../server'


function Content() {
    return (
        <div className="text-center">
            <h1 className="font-bold text-5xl">Explore our van options</h1>
            <div className="flex justify-center gap-4 mt-5  text-neutral-600" >
                <button type="button" className="bg-orange-100 rounded-md py-2 px-3 sm:px-4">Simple</button>
                <button type="button" className="bg-orange-100 rounded-md py-2 px-3 sm:px-4">Luxury</button>
                <button type="button" className="bg-orange-100 rounded-md py-2 px-3 sm:px-4">Rugged</button>
                <h3 className="underline underline-offset-2 pt-2">Clear filters</h3>
            </div>
        </div>
    )
}

export function color(type) {
    if (type === "simple") {
        return <h1 className="bg-red-400 inline-block p-1 px-4 rounded">{type[0].toUpperCase() + type.slice(1)}</h1>
    }
    else if (type === "luxury") {
        return <h1 className="bg-neutral-900 inline-block p-1 px-4 rounded">{type[0].toUpperCase() + type.slice(1)}</h1>
    }
    else if (type === "rugged") {
        return <h1 className="bg-teal-800 inline-block p-1 px-4 rounded">{type[0].toUpperCase() + type.slice(1)}</h1>
    }
}
function DisplayVans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])


    const vanElements = vans.map(van => (
        <div key={van.id} className="w-80">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt="Error" />

                <div className=" flex justify-between font-semibold text-lg mt-2">
                    <span className="">{van.name}</span>
                    <span className="">${van.price}</span>
                    <p className="text-xs mt-5 absolute font-light" style={{
                        marginLeft: "295px"
                    }}>/day</p>
                </div>

                <h1 className="text-orange-100 mt-1">{color(van.type)}</h1>
            </Link>
        </div>
    )
    )
    return (
        <div className="flex flex-wrap justify-center gap-x-32 gap-y-12 mt-10 mb-10">
            {vanElements}
        </div>
    )
}

export default function Vans() {
    return (
        <div className="bg-orange-50">
            <NavBar />
            <Content />
            <DisplayVans />
            <Footer />
        </div>
    )
}