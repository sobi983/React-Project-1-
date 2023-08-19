import { Link, useLocation } from "react-router-dom"
import IMAGES from "../assets/assets";

export default function BackToPage() {
    let location = useLocation()
    console.log(location)
    // console.log(location.pathname+"?"+location.state.state)
    let some = location.state != null && location.state.somee || ""  //this technique is used if there is no filter than it will go back to the root URL

    //this is used just for a little twikking
    let filter = location.state.type != null && location.state.type || "all"

    return (
        <Link to={`..?${some}`} relative="path">
            <div className="pl-5 sm:pl-9">
                <img src={IMAGES.arrow} alt="Error" className="inline-block" />
                <span className="underline underline-offset-2 ml-1">{`Back to ${filter} vans`}</span>
            </div>
        </Link>
    )
}