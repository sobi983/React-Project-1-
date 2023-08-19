import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer, NavBar } from "./home";
import { color } from "./vans";
import IMAGES from "../assets/assets";

function Content() {
    let [data, setData] = useState()
    let params = useParams()

    //while I was trying to use useRef() I understood that the useEffect hook renders after the return statement. So, when the page in redered at first the <div> return the undefined value of the useRef state after a while when the data is being fetched from the api the useRef() state is updated/. But the <div> is not re-rendered. So, it's better to use useState()
    // let data = useRef()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(dataa => setData(dataa.vans))
            .catch(err => console.log(err))
    }, [params])

    return (
        <div>
            <Link to={'/vans'}>
                <div className="pl-5 sm:pl-9">
                    <img src={IMAGES.arrow} alt="Error" className="inline-block" />
                    <span className="underline underline-offset-2 ml-1">Back to all vans</span>
                </div>

            </Link>

            {data ? <div className="flex justify-center mt-2">
                <img src={data.imageUrl} alt="Error" className="w-auto p-5 sm:w-96" />
            </div> : <h1>Loading...</h1>}

            {data ? <div className="flex flex-col items-start ml-5 sm:ml-32 mt-8">
                <span className="font-semibold text-orange-100">{color(data.type)}</span>
                <h1 className="font-bold text-neutral-900 text-3xl sm:text-4xl mt-4">Modest Explorer</h1>
                <span className="font-bold text-neutral-900 text-2xl sm:text-xl">$60<span className="font-medium text-neutral-900 text-sm sm:text-xs">/day</span></span>
                <p className="mt-5 font-medium text-lg w-96 sm:w-10/12 sm:text-base mb-8">{data.description}</p>
            </div> : <></>}

            <div className="text-center">
                <button type="button" className="text-white font-bold text-sm bg-orange-400 py-5 px-32 sm:text-xl mb-10 sm:mt-7 sm:font-extrabold ">Rent this van</button>
            </div>
        </div>
    )
}

export default function VansDetails() {
    return (
        <div className="bg-orange-50">
            <NavBar />
            <Content />
            <Footer />
        </div>
    )
}