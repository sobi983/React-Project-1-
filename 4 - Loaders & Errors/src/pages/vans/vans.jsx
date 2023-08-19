// import { useEffect, useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
// import { nanoid } from 'nanoid'
import '../../server'
import color from "../../components/color";
import {fetchData} from "../../components/fetchData";

function ContentNavBar(props) {

    // eslint-disable-next-line react/prop-types
    let searchParams = props.filter && props.filter.toString() || ""
    searchParams = searchParams.toLowerCase()

    return (
        <div className="text-center">
            <h1 className="font-bold text-5xl">Explore our van options</h1>
            <div className="flex justify-center gap-4 mt-5  text-neutral-600" >
                {/* We can do the l=filteration on the button like this below but the question is that if we are using Link for this purpose then why useSearchParams? We will useSearchParms for this purpose because using link could cause a bug in the future and it's not an appropiate way for navigation filteration, so we will use setParams from useSearchParams */}
                {/* <button type="button" className="bg-orange-100 rounded-md py-2 px-3 sm:px-4"><Link to='/vans?type=simple'>Simple</Link></button> */}
                {/* eslint-disable-next-line react/prop-types */}
                <button type="button" className={`bg-orange-100 rounded-md py-2 px-3 sm:px-4 focus:bg-red-400 focus:text-white ${searchParams === "simple" ? "bg-red-400 text-white" : ""}`} onClick={() => props.setSearchParams({ type: "Simple" })}>Simple</button>
                {/* eslint-disable-next-line react/prop-types */}
                <button type="button" className={`bg-orange-100 rounded-md py-2 px-3 sm:px-4 focus:bg-black focus:text-white ${searchParams === "luxury" ? " bg-gray-950 text-white" : ""}`} onClick={() => props.setSearchParams({ type: "Luxury" })}>Luxury</button>
                {/* eslint-disable-next-line react/prop-types */}
                <button type="button" className={`bg-orange-100 rounded-md py-2 px-3 sm:px-4 focus:bg-teal-800 focus:text-white ${searchParams === "rugged" ? " bg-teal-800 text-white" : ""}`} onClick={() => props.setSearchParams({ type: "Rugged" })}>Rugged</button>
                {/* eslint-disable-next-line react/prop-types */}
                <button className="underline underline-offset-2 pt-2" onClick={() => props.setSearchParams({})}>Clear filters</button>
            </div>
        </div>
    )
}

export function loader() {
    return fetchData("/api/vans")
}

function DisplayVans(props) {
    //Here we have used laoder hook for loading the data before renering this page.
    // let [vans, setVans] = useState([])
    let vans = useLoaderData()

    // useEffect(() => {
    //     fetch("/api/vans")
    //     .then(res=>res.json())
    //     .then(data=>setVans(data.vans))
            
    
    // }, [])

    // eslint-disable-next-line react/prop-types
    let filteredData = props.filter ? vans.filter((items) => props.filter.toLowerCase() === items.type) : vans

    const vanElements = filteredData.map(van => (
        <div key={van.id} className="w-80">
            {/* Changing the absolute path to relative one  */}
            {/* <Link to={`/vans/${van.id}`}> */}

            {/* we are using directly van.id because it is already a string coming from the API  */}
            {/* eslint-disable-next-line react/prop-types */}
            <Link to={van.id} state={{ somee: props.searchParams.toString(), type: props.filter }}>
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
        <div className="flex flex-wrap justify-center gap-x-32 gap-y-12 mt-10 pb-10">
            {vanElements}
        </div>
    )
}


export default function Vans() {
    let [searchParams, setSearchParams] = useSearchParams()
    let filterVans = searchParams.get("type")
    return (
        <div className="bg-orange-50">
            <ContentNavBar setSearchParams={setSearchParams} filter={filterVans} />
            <DisplayVans filter={filterVans} setSearchParams={setSearchParams} searchParams={searchParams} />
        </div>
    )
}