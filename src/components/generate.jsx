import paragraphData from '../data'
import { useState } from 'react'

const Generate = () => {
    let [count, setCount] = useState(0)
    let [displayParagraph, setDisplayParagraph] = useState([])

    function submit(e) {
        e.preventDefault()
        setDisplayParagraph(paragraphData.slice(0, count))
    }

    function change(e) {
        setCount(e.target.value)
    }

    let display = displayParagraph.map((items, index) => (
        <p key={index}>
            {items}
        </p>
    ))


    return (
        <div className='mt-16 flex flex-col '>

            <div className='flex justify-center gap-4'>
                <h2 className='mt-2 tracking-wider text-lg'>Paragraphs: </h2>    

                <form className='flex gap-4' onSubmit={submit}>
                    <input className='rounded input input-bordered input-info w-full max-w-xs' type="number" name="name" id="name" min={0} max={8} onChange={change} />
                    <button className='bg-blue-500 p-1 text-white rounded' type="submit">Generate</button>
                </form>

            </div>

            <div className=" space-y-4 p-16">
                {display}
            </div>

        </div>
    )
}

export default Generate
