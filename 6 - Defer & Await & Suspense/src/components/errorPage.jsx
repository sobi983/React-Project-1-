import { useRouteError } from "react-router-dom"

export default function ErrorPage(){
    let error = useRouteError()
    console.log(error)
    return(
        <div className="bg-orange-50">
            <h1>Error Occured</h1>
        </div>
    )
}