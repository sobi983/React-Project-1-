// export default function color(type) {
//     if (type === "simple") {
//         return <h1 className="bg-red-400 inline-block p-1 px-4 rounded">{type[0].toUpperCase() + type.slice(1)}</h1>
//     }
//     else if (type === "luxury") {
//         return <h1 className="bg-neutral-900 inline-block p-1 px-4 rounded">{type[0].toUpperCase() + type.slice(1)}</h1>
//     }
//     else if (type === "rugged") {
//         return <h1 className="bg-teal-800 inline-block p-1 px-4 rounded">{type[0].toUpperCase() + type.slice(1)}</h1>
//     }
// }

//using enums for conditional rendering
export default function color(type) {
    const currentView = {
        simple: <h1 className="bg-red-400 inline-block p-1 px-4 rounded">{type[0].toUpperCase() + type.slice(1)}</h1>,
        luxury: <h1 className="bg-neutral-900 inline-block p-1 px-4 rounded">{type[0].toUpperCase() + type.slice(1)}</h1>,
        rugged: <h1 className="bg-teal-800 inline-block p-1 px-4 rounded">{type[0].toUpperCase() + type.slice(1)}</h1>
    }[type]

    return <div>{currentView}</div>

}
