import { BiRightArrowAlt } from 'react-icons/bi';

const SliderDisplay = ({ sd }) => {
    let { title, dates, duties, company } = sd

    let displayDuties = duties.map((items, index) => {
        return <p key={index}><BiRightArrowAlt className='inline'/>{items}</p>
    })
    return (
        <>
            <h1 className="text-4xl">{title}</h1>
            <div>
                <a className=" bg-slate-300 text-slate-600 font-semibold p-2">{company}</a>
            </div>
            <h3 className="tracking-widest">{dates}</h3>

            <div className="flex flex-col gap-10">
                {displayDuties}
            </div>
        </>
    )
}

export default SliderDisplay
