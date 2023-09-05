const List = ({ person }) => {

    let personList = person.map(items => (
        <div key={items.id} className="flex gap-2 p-1">
            <img src={items.image} alt="Error" className="w-24 h-24 rounded-full object-cover" />

            <div className="flex flex-col justify-center">
                <h1 className="text-t font-bold">{items.name}</h1>
                <h3 className="text-t">{items.age} years</h3>
            </div>
        </div>
    ))

    return (
        <>
            {personList}
        </>
    )
}

export default List
