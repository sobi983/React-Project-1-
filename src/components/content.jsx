import { useContext } from "react"
import ThemeContextProvider from "../context/themeContext"

const Content = (props) => {
    // eslint-disable-next-line react/prop-types
    let { title, img, desc, price } = props.items
    let { theme } = useContext(ThemeContextProvider)

    function capitalLetter(name) {
        let p = name.split(' ')
        let o = p.map(items => {
            return items.charAt(0).toUpperCase() + items.slice(1) + " "
        })
        return o
    }


    return (
        <div className="bg-white rounded-lg">
            <div className="w-96 h-60">
                <img src={img} alt={title} className=" object-cover w-full h-full rounded-t-lg" />
            </div>

            <div className="flex justify-between mt-4 p-5">
                <h1 className=" text-black font-semibold sm:text-2xl text-xl">{capitalLetter(title)}</h1>
                <h1 className={`font-semibold ${theme === 'forest' ? 'bg-orange-400' : 'bg-purple-400'}  sm:px-3 sm:text-lg px-2 text-white`}>${price}</h1>
            </div>
            <p className="w-96 text-black p-5">{desc}</p>

        </div>
    )
}

export default Content
