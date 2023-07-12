import worldIcon from '../img/world-Icon.svg';


export default function Navbar() {
    return (
        <div className="bg-navbar-color flex justify-center items-center w-7/12 h-14">
            <img src={worldIcon} alt="Error" />
            <p className="text-white ml-2">My travel journal</p>
        </div>
    )
}