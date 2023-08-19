import { useOutletContext } from "react-router-dom"

export default function VanHostDetails() {
    let [vanDa] = useOutletContext()
    return (
        <section className="bg-orange-50 p-4 sm:ml-6 mt-2">
            <span className="font-bold mr-16">Name:</span>
            <span className="">{vanDa.name}</span>
            <br />
            <span className="font-bold mr-9">Category:</span>
            <span className="">{vanDa.type}</span>
            <br />

            <span className="font-bold mr-4">Description:</span>
            <span className="w-10">{vanDa.description}</span>
            <br />

            <span className="font-bold">Visibility:</span>
            <span className="ml-10">Public</span>
        </section>
    )
}