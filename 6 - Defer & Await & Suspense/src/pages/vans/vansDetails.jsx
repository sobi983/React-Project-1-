import { Await, defer, useLoaderData } from "react-router-dom";
import color from "../../components/color";
import BackToPage from "../../components/backToPage";
import Loading from "../../components/loading";
import { fetchVans } from "../../components/fetchData";
import { authentication } from "../../components/authentication";
import { Suspense } from "react";

export async function loader({ params, request }) {
    const addr = new URL(request.url)
    await authentication(addr.pathname)
    const vansPromise = fetchVans(params.id)
    return defer({ vans: vansPromise })
}

function Content() {
    let data = useLoaderData()

    function display(data) {
        return (
            <>
                <BackToPage />
                <div className="flex justify-center mt-2">
                    <img src={data.imageUrl} alt="Error" className="w-auto p-5 sm:w-96" />
                </div>

                <div className="flex flex-col items-start ml-5 sm:ml-32 mt-8">
                    <span className="font-semibold text-orange-100">{color(data.type)}</span>
                    <h1 className="font-bold text-neutral-900 text-3xl sm:text-4xl mt-4">Modest Explorer</h1>
                    <span className="font-bold text-neutral-900 text-2xl sm:text-xl">$60<span className="font-medium text-neutral-900 text-sm sm:text-xs">/day</span></span>
                    <p className="mt-5 font-medium text-lg w-96 sm:w-10/12 sm:text-base mb-8">{data.description}</p>
                </div>

                <div className="text-center">
                    <button type="button" className="text-white font-bold text-sm bg-orange-400 py-5 px-32 sm:text-xl mb-10 sm:mt-7 sm:font-extrabold ">Rent this van</button>
                </div>
            </>
        )
    }

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Await resolve={data.vans}>
                    {display}
                </Await>

            </Suspense>
        </div>
    )
}

export default function VansDetails() {
    return (
        <div className="bg-orange-50">
            <Content />
        </div>
    )
}