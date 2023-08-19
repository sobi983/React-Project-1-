import { Outlet, NavLink } from "react-router-dom"
import styles from "./styleUnderlineNavbar"
export default function LayoutHost() {
    return (
        <>
            <nav className="text-neutral-900 text-lg font-bold flex gap-5 sm:gap-10 justify-center bg-orange-50">
                <NavLink to={'/host'} style={({ isActive }) => isActive ? styles : null} end={true}><h1 className="active:underline focus:underline-offset-4 cursor-pointer">Dashboard</h1></NavLink>
                <NavLink to={'income'} style={({ isActive }) => isActive ? styles : null}><h1 className="active:underline focus:underline-offset-4 cursor-pointer">Income</h1></NavLink>
                <NavLink to={'vans'} style={({ isActive }) => isActive ? styles : null}><h1 className="active:underline focus:underline-offset-4 cursor-pointer">Vans</h1></NavLink>
                <NavLink to={'reviews'} style={({ isActive }) => isActive ? styles : null}><h1 className="active:underline focus:underline-offset-4 cursor-pointer">Reviews</h1></NavLink>
            </nav>
            <Outlet/>
        </>
    )
}