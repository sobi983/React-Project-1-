import { useState } from "react"

// eslint-disable-next-line react/prop-types
const TourContent = ({ name, info, remove, image, price }) => {
    let [read, setRead] = useState(false)

    function readMore() {
        return setRead(prev => !prev)
    }

    return (
        <div className="border border-gray-500 rounded relative shadow-md">
            <img src={image} alt="error" className="w-full h-96 object-cover" />
            <h1 className=" absolute top-0 text-white font-semibold right-0 bg-green-500 p-1 px-2">${price}</h1>

            <div className="flex flex-col items-center ">
                <h1 className="font-semibold mt-7 text-xl text-center">{name}</h1>
                <p className="p-4 text-gray-400 h-60 text-sm">{read ? <>{info}</> : <>{info.substring(0, 200)}</>} <button className=" text-green-400 font-semibold" onClick={readMore}>{read ? 'Show less' : "...Read more"}</button></p>
                <button className="border border-green-600 rounded px-8 text-green-600 mb-8 mt-3 hover:bg-green-300 duration-700" onClick={remove}>Not Interested</button>
            </div>
        </div>
    )
}

export default TourContent