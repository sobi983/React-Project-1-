import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"
import SliderDisplay from "./sliderDisplay"

const Slider = () => {
    const { isLoading, error, data } = useQuery('menuData', fetchAPI)
    let [indexData, setIndexData] = useState(0)


    async function fetchAPI() {
        let result = await axios.get('https://course-api.com/react-tabs-project')
        return result
    }

    if (isLoading) {
        return (
            <h1 className="text-4xl font-bold  flex justify-center mt-32">Loading...</h1>
        )
    }

    if (error) {
        return console.log("Error")
    }

    let companies = data.data.map((items, index) => {
        return (
            <button key={items.id} className={`block text-3xl ${index === indexData ? "underline underline-offset-2 decoration-orange-800 text-orange-950" : null}`} onClick={() => setIndexData(index)}>{items.company}</button>
        )
    })

    let displayContent = <SliderDisplay sd={data.data[indexData]} />

    return (
        <div className="flex gap-32 justify-center mt-40">
            <div className="ml-52 space-y-3">
                {companies}
            </div>
            <div className="flex flex-col gap-3" style={{width:'650px', }}>
                {displayContent}
            </div>
        </div>
    )
}

export default Slider
