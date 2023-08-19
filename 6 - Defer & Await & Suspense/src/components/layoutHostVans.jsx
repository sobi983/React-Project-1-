import { NavLink, Outlet, useLoaderData } from "react-router-dom"
import BackToPage from "./backToPage"
import color from "./color"
// import Loading from './loading'
import { fetchHostVans } from "./fetchData"
import { authentication } from "./authentication"

//I haven't implemented the defer, await over here because I want to laod data with a delay
export async function loader({params, request}){
    const addr = new URL(request.url)
    await authentication(addr.pathname)
    return fetchHostVans(params.id)
}

export default function LayoutHostVans() {

    let vanData = useLoaderData()

    let styles = {
        color: "rgb(66 32 6)",
        textDecoration: "underline",
        fontWeight: "bold"
    }

    return (

        <section className="bg-orange-50 pt-5">
            <BackToPage />
                <div className="">
                    <div className="flex justify-center mt-10">
                        <div className="flex w-11/12 sm:w-6/12 bg-white rounded-3xl p-6">
                            <img src={vanData.imageUrl} alt="Error" className=" w-40 sm:w-60 rounded" />

                            <div className="flex flex-col justify-center ml-8">
                                <h1 className="text-orange-100 mb-3">{color(vanData.type)}</h1>
                                <h1 className="text-neutral-900 font-bold text-xl sm:text-3xl">{vanData.name}</h1>
                                <h1 className="font-bold text-xs sm:text-base">${vanData.price}<span className=" font-normal text-xs">/day</span></h1>
                            </div>

                        </div>
                    </div>
                    <nav className="flex space-x-8 justify-center sm:justify-normal sm:ml-10 mt-5">
                        <div><NavLink to='.' style={({ isActive }) => isActive ? styles : null} end>Details</NavLink></div>
                        <div><NavLink to='pricing' style={({ isActive }) => isActive ? styles : null}>Pricing</NavLink></div>
                        <div><NavLink to='photos' style={({ isActive }) => isActive ? styles : null}>Photos</NavLink></div>
                    </nav>
                    <Outlet context={[vanData]} />

                </div>
        </section>
    )
}