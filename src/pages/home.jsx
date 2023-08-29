import { Link, useOutletContext } from "react-router-dom"
import { stylee } from "../components/lightTheme"

const Home = () => {
  let [theme] = useOutletContext()

  return (
    <main className="flex flex-col items-center justify-center sm:mt-0 mt-36 ">


      {theme === "night" ? <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% w-72 animate-bounce">Quizzical</h1> : <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-b from-10% via-bb via-30% to-bbb to-90% w-72 animate-bounce">Quizzical</h1>}

      <p className="text-xl w-11/12 mt-4 sm:w-6/12 " style={stylee(theme)}>Quizzical is a web app that offers a diverse range of quizzes on various topics. Users can test their knowledge, learn new facts, and challenge themselves while enjoying an intuitive and user-friendly interface.</p>

      {theme === "night" ?
        <Link to='quiz'>
          <button className="btn btn-wide font-bold bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90%  mt-7" >Start Quiz</button>
        </Link>
        :
        <Link to='quiz'>
          <button className="btn btn-wide font-bold bg-gradient-to-r from-b from-10% via-bb via-30% to-bbb to-90% text-white mt-7" >Start Quiz</button>
        </Link>}


    </main>
  )
}

export default Home

