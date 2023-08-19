import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <main className="bg-orange-50 min-h-screen flex justify-center items-center">
            <div className=" flex flex-col items-center pb-32">
                <h1 className="font-bold text-4xl p-7 sm:p-0  sm:w-10/12">Sory, the page you were looking for was not found.</h1>
                <button className="bg-black text-white rounded px-16 py-5  sm:mt-10 font-bold"><Link to='..'>Return to home</Link></button>
            </div>
        </main>
    )
}

export default PageNotFound
