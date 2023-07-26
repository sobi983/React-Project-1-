import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ConfettiExplosion from 'react-confetti-explosion';
import Confetti from 'react-confetti'
import Dice from "./components/dice";

function App() {
  let [diceNumber, setDiceNumber] = useState(fillDice)
  let [selectedNumber, setSelectedNumber] = useState(null)
  let [decline, setDecline] = useState(false)
  let [isExploding, setIsExploding] = useState(false);
  // let [winnerCount, setWinnerCount] = useState(1)
  const width = window.innerWidth
  const height = window.innerHeight

  useEffect(() => {
    let winner = diceNumber.every((check) => check.isHold === true)
    if (winner === true) {
      setIsExploding(true)
    }
  }, [diceNumber])

  function fillDice() {
    let newArr = []
    for (let i = 1; i <= 10; i++) {
      newArr.push(generateDice())
    }
    return newArr;
  }

  function generateDice() {
    let obj = {
      id: nanoid(),
      isHold: false,
      number: Math.floor(Math.random() * 6),
    }
    return obj
  }

  function onHold(id) {
    setDiceNumber(prev => {
      return prev.map(items => {
        if (id === items.id) {
          if (selectedNumber === null) {
            setDecline(false)
            setSelectedNumber(items.number)
            // setWinnerCount(prev => prev + 1)
            return { ...items, isHold: !items.isHold }
          }
          else if (selectedNumber === items.number && items.isHold === false) {
            setDecline(false)
            // setWinnerCount(prev => prev + 1)
            return { ...items, isHold: !items.isHold }
          }
          else if (selectedNumber === items.number && items.isHold === true) {
            // setWinnerCount(prev => prev - 1)
            setDecline(false)
            setSelectedNumber(null)
            setIsExploding(false)
            return { ...items, isHold: !items.isHold }
          }
          else if (selectedNumber !== items.number) {
            setDecline(true)
            return items
          }
        }
        else {
          return items
        }
      })
    })
  }

  let diceShow = diceNumber.map(items => {
    return <Dice
      onHold={items.isHold}
      arr={items.number}
      key={items.id}
      hold={() => onHold(items.id)} />
  })

  function roll() {
    setDiceNumber(function (prev) {
      return prev.map(function (items) {
        return items.isHold === true ? { ...items } : generateDice()
      })
    })
  }

  function startAgain(){
    setDiceNumber(fillDice())
    setSelectedNumber(null)
    setIsExploding(false)
  }

  return (
    <div className="container mx-auto bg-slate-900/95 p-8 sm:p-12 h-screen">
      <div className="bg-white flex flex-col items-center rounded my-8 sm:m-0">
        <h1 className="text-gray-800 font-handjet font-extrabold  text-8xl sm:text-9xl mt-8">Tenzies</h1>
        <h3 className="text-slate-600 font-tektur text-center text-xl sm:text-2xl sm:w-6/12 ">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>

        {decline === true &&
          <div className="border bg-red-500 p-5 mt-4">
            <strong>Nope! </strong>
            I won't allow that, Noobray
          </div>
        }
        <div className="grid grid-cols-5 grid-rows-2 mt-24 gap-6 sm:gap-12">
          {diceShow}
        </div>


        {isExploding === false ? <button className="mt-16 mb-10 rounded-r-lg border rounded text-4xl text-white bg-purple-900 p-4 px-12 shadow-xl hover:bg-purple-950" onClick={roll}>Roll 
        </button> : <button className="mt-16 mb-10 rounded-r-lg border rounded text-4xl text-white bg-purple-900 p-4 px-9 shadow-xl hover:bg-purple-950" onClick={startAgain}>Start Again 
        </button>}
        {isExploding === true && <Confetti width={width} height={height} />}
      </div>
    </div>
  );
}

export default App;
