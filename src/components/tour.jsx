import { useContext, useEffect, useState } from 'react'
import TourDataContext from '../context/AppContext'
import Loader from './loader'
import TourContent from './tourContent'

const Tour = () => {
  let { data, setData, loading, refresh} = useContext(TourDataContext)

  // eslint-disable-next-line no-unused-vars
  function remove(id) {
    let r = data.filter(items => {
      if (id !== items.id) {
        return items
      }
    })
    setData(r)
  }

  let displayData = data.map(items => (
    <TourContent key={items.id} info={items.info} name={items.name} remove={() => remove(items.id)} image={items.image} price={items.price} />
  ))

  return (
    <div>
      {loading === false ?
        <div className='flex justify-center mt-12 mb-10 '>
          <div className='w-10/12  grid lg:grid-cols-3 md:grid-cols-2 gap-6 items-center '>
            {displayData}
          </div>
        </div>
        : <Loader />}
      <div className='flex justify-center'>
        {data.length === 0 ? <button className=' bg-green-600 p-2 text-white font-bold rounded' onClick={refresh}>Refresh</button> : null}
      </div>
    </div>
  )
}

export default Tour