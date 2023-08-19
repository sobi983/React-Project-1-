import { Link, NavLink } from 'react-router-dom'
import IMAGES from '../assets/assets'
import styles from './styleUnderlineNavbar'

export default function NavBar() {

    function fakeLogout(){
        localStorage.setItem("loggedIn", false)
    }

    return (
        <header className="shrink-0 flex justify-between items-center bg-orange-50 h-28">
            <Link to="/">
                <img src={IMAGES.vans_logo} alt="Error" className=' w-36 ml-7' />
            </Link>
            <div className="flex text-neutral-600 text-xl font-semibold mr-7">
                <h3 className=""><NavLink to="/host" style={({isActive})=> isActive ? styles : null}>Host</NavLink></h3>
                <h3 className="mx-2 sm:mx-4"><NavLink to="/about" style={({isActive})=> isActive ? styles : null}>About</NavLink></h3>
                <h3 className="mr-2 sm:mr-4"><NavLink to="/vans" style={({isActive})=> isActive ? styles : null}>Vans</NavLink></h3>
                <NavLink to="login" style={({isActive})=> isActive ? styles : null}><img src={IMAGES.circleUser}></img></NavLink>
                <button onClick={fakeLogout}>X</button>
            </div>
        </header>
    )
}