import { useContext, useState } from 'react'
import fooddata from '../data'
import Content from './content'
import ThemeContextProvider from '../context/themeContext'

const Filter = () => {
    let [foodToDisplay, setFoodToDisplay] = useState(fooddata)
    let { theme } = useContext(ThemeContextProvider)

    let displayData = foodToDisplay.map(items => (
        <Content key={items.id} items={items} />
    ))

    function displayFilter(name) {
        if (name === 'all') {
            setFoodToDisplay(fooddata)
        }
        else {

            let y = fooddata.filter(items => {
                return items.category === name
            })
            setFoodToDisplay(y)
        }
    }

    let y = fooddata.map(items => {
        return items.category
    })
    y = [...new Set(y)]

    let buttonsDisplay = y.map((items, index) => (
        <div key={index}>
            <button className={`bg-orange-400 py-1 sm:px-6 px-4 rounded-xl  hover:bg-orange-300 ${theme === 'forest' ? 'text-white' : ' font-medium'}`} onClick={() => displayFilter(items)}>{items.charAt(0).toUpperCase() + items.slice(1)}</button>
        </div>
    ))


    return (
        <div className=''>
            <div className="flex justify-center sm:gap-5 gap-3 text-md mt-16">
                <button className={`bg-orange-400 py-1 px-6 rounded-xl hover:bg-orange-300 ${theme === 'forest' ? 'text-white' : ' font-medium'}`} onClick={() => displayFilter('all')}>All</button>
                {buttonsDisplay}
            </div>

            <div className="grid justify-items-center sm:grid-cols-3 sm:gap-16 sm:px-16 gap-12 pt-12 pb-12">
                {displayData}
            </div>
        </div>
    )
}

export default Filter
