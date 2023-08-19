import { Link } from "react-router-dom"
import IMAGES from "../assets/assets";

export default function BackToPage() {
    return (
        <Link to=".." relative="path">
            <div className="pl-5 sm:pl-9">
                <img src={IMAGES.arrow} alt="Error" className="inline-block" />
                <span className="underline underline-offset-2 ml-1">Back to all vans</span>
            </div>
        </Link>
    )
}