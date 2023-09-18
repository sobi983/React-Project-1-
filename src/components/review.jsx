import { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FaQuoteRight } from 'react-icons/fa6';
import data from '../data'

const Review = () => {

    let [index, setIndex] = useState(0)
    let { name, job, image, text } = data[index]

    function forward() {
        setIndex(prev => {
            let r = prev + 1
            return checkedf(r)
        })
    }

    function backward() {
        setIndex(prev => {
            let r = prev - 1
            return checkedb(r)
        })
    }

    function checkedf(number) {
        return number > 3 ? 0 : number
    }

    function checkedb(number) {
        return number < 0 ? data.length - 1 : number
    }

    function rndm() {
        let min = 0
        let max = 4
        let r = Math.floor(Math.random() * (max - min) + min);
        setIndex(prev => {
            return r === prev ? checkedf(r + 1) : r
        })
    }

    function nameDisplay(name) {
        let names = name.split(" ")
        let capitalize = names.map(items => {
            return items.charAt(0).toUpperCase() + items.slice(1) + " "
        })
        return (
            <>
                {capitalize}
            </>
        )
    }

    return (
        <>
            <div className='relative'>
                <img src={image} alt="Error" className='w-36 h-36 rounded-full object-cover' />
                <FaQuoteRight className='h-10 w-10 bg-purple-500 text-white rounded-full p-2 absolute top-3' />
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='tracking-widest'>{nameDisplay(name)}</h1>
                <h1 className=' text-purple-500 font-semibold'>{job.toUpperCase()}</h1>
            </div>
            <p className=' text-center px-10'>{text}</p>

            <div className=' space-x-8'>
                <button onClick={backward}><IoIosArrowBack className='w-8 h-8'/></button>
                <button onClick={forward}><IoIosArrowForward className='w-8 h-8'/></button>
            </div>

            <button onClick={rndm} className='text-purple-500 bg-purple-300 rounded p-1 font-semibold px-3'>Random</button>

        </>
    )
}

export default Review
