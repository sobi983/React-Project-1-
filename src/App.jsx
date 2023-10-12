import { useMemo, useState } from 'react'
import Values from 'values.js';
import DisplayColor from './components/displayColor'

function App() {
  let [inputValue, setInputValue] = useState('')
  let [color, setColor] = useState(new Values('#f15025').all(10))
  let [error, setError] = useState(false)

  

  function formSubmit(e) {
    e.preventDefault()
    try {
      setColor(new Values(inputValue).all(10))
      setError(false)
    } catch (error) {
      setError(true)
      console.log("Error")
    }
  }

  function handleInput(e) {
    return setInputValue(e.target.value)
  }


    let dc = useMemo(() => (
      color.map((items, index) => (

        <DisplayColor key={index} props={items} />

      ))
    )
      , [color])


  return (
    <div>

      <div className="flex gap-12 ml-8 mt-16">
        <h1 className=" text-2xl mt-1 font-bold">Color Generator</h1>

        <form action="" className=" flex gap-2" onSubmit={formSubmit}>
          <input type="text" placeholder='#f12025' className={`text-black ${error ? 'border-2 border-red-600 ' : 'null'}`} value={inputValue} onChange={handleInput} />
          <button className="text-md bg-purple-500 text-white rounded p-1 px-2">Submit</button>
        </form>
      </div>

      <div className="flex flex-wrap mt-10 justify-center">
        {dc}
      </div>

    </div>
  )
}

export default App
