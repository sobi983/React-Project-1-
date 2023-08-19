import IMAGES from "../assets/assets"
import { Link } from "react-router-dom"
import { Footer, NavBar } from "./home"

function Content() {
    return (
        <div className="m=0 bg-orange-50 text-neutral-900">
            <div className="w-screen h-60 bg-cover bg-center" style={{
                backgroundImage: `url(${IMAGES.aboutPageBg})`
            }}></div>

            <div className="flex flex-col items-center mt-10">
                <h1 className="font-bold  text-5xl w-10/12">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <h3 className="font-medium w-10/12 text-start mt-10">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉).<br/><br/> Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</h3>
            

                <div className=" bg-amber-200 w-10/12 rounded-md mt-10 mb-10">
                    <div className="p-10">
                        <h2 className="font-bold text-xl">Your destination is waiting</h2>
                        <h2 className="font-bold text-xl">Your van is ready.</h2>
                        <button type="button" className="bg-black text-white font-bold rounded-lg p-3 mt-5"><Link to={'/vans'}>Explore our vans</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <div>
            <NavBar />
            <Content />
            <Footer />
        </div>
    )
}