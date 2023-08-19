import { Link } from 'react-router-dom'
import IMAGES from '../assets/assets'

export function NavBar() {
    return (
        <header className="shrink-0 flex justify-between items-center bg-orange-50 h-28">
            <Link to="/">
                <img src={IMAGES.vans_logo} alt="Error" className=' w-36 ml-7' />
            </Link>
            <div className="flex text-neutral-600 text-xl font-semibold mr-7">
                <h3 className="mx-4"><Link to="/about">About</Link></h3>
                <h3 className=""><Link to="/vans">Vans</Link></h3>
            </div>
        </header>
    )
}

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

export function Footer() {
    return (
        <div className="bg-neutral-800">
            <h2 className="text-neutral-400 font-medium text-xl text-center sm:p-10 p-5">Ⓒ 2022 #VANLIFE</h2>
        </div>
    )
}

export default function Home() {
    return (
        <div>
            <NavBar />
            <MainContent />
            <Footer />
        </div>
    )
}