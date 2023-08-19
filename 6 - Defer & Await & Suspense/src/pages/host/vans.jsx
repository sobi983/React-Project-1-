import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Van = () => {
  let [vansData, setVansData] = useState([])

  useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setVansData(data.vans))
      .catch(err => console.log(err))
  }, [])

  let vanComponent = vansData.map(items => {
    return (
      // I have addded a state because I am using the state for filterating in /vans?type=simple page and for going back to the page I am created a component and I am using the component in multiple files. And in that component It is necessary to send a filter from the URL.
      <Link key={items.id} to={items.id} state={{some: ""}}>
        <div className="flex justify-center sm:justify-center my-6 rounded-xl">
          <div className="flex bg-white py-4 pl-5 w-11/12 sm:pl-10 sm:w-6/12">
            <img src={items.imageUrl} alt="Error" className=" w-32 rounded" />

            <div className="flex flex-col ml-4 mt-1">
              <h1 className="text-neutral-900 font-semibold text-2xl">{items.name}</h1>
              <h3 className="text-neutral-600 text-md font-semibold">${items.price}/day</h3>
            </div>

          </div>
        </div>
      </Link>
    )
  })

  return (
    <div className="bg-orange-50">
      <h1 className="text-neutral-900 font-bold text-4xl pt-5 flex justify-center">Your listed vans</h1>
      {vanComponent}
      <br />
    </div>
  )
}

export default Van
