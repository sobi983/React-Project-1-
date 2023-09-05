import { useState } from 'react'
import List from './components/list'
import data from './data'
import Theme from './components/theme'


function App() {
  let [person, setPerson] = useState(data)

  return (
    <div className=' min-h-screen flex justify-center items-center'>
      <Theme />
      <div className="w-3/12 bg-white rounded shadow-2xl p-4 ">
        <h1 className='text-3xl ml-2'>{person.length} birthdays today</h1>
        <List person={person} />
        <div className="flex justify-center">
          <button onClick={() => setPerson([])} className='bg-gradient-to-r from-pink-500 to-pink-700 rounded text-white py-2 px-3 mt-2'>Clear All</button>
        </div>
      </div>

    </div>
  )
}

export default App
