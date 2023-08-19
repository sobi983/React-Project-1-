import { Link } from 'react-router-dom'
import IMAGES from '../../assets/assets'

function MainContent() {
    return (
        <main className=" text-white text-center">
            <div style={{
                // width: "150px",
                // height:"150px",
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                backgroundImage: `url(${IMAGES.homePageImage})`,

            }} className='w-screen h-screen bg-cover bg-center'>

                <div className="flex flex-col items-center pt-24">
                    <h1 className='font-extrabold text-6xl'>You got the travel plans, we got the travel vans.</h1>
                    <h3 className=" text-2xl font-light mt-20 px-2 sm:px-0">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h3>
                    <Link to={'/vans'}>
                        <button type="button" className='bg-orange-400 w-96 p-5 font-bold text-xl mt-20 sm:mt-64 rounded-md'>Find your van</button>
                    </Link>
                </div>
            </div>
        </main>

    )
}

export default function Home() {
    return (
        <div>
            <MainContent />
        </div>
    )
}