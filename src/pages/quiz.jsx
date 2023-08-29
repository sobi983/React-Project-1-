import { Suspense } from "react"
import { Await, defer, useLoaderData, useOutletContext } from "react-router-dom"
import LoadingPage from '../components/loadingPage'
import axios from "axios"
import Display from "../components/q&a"

export async function Loader() {
  let res = axios.get('https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple')
  return defer({ quizDeferdata: res })
}

const Quiz = () => {
  let apidata = useLoaderData()
  let theme = useOutletContext()



  return (
    <main className="">
      <Suspense fallback={<LoadingPage />}>
        <Await resolve={apidata.quizDeferdata}>
        {(resolvedReviews) => <Display data={resolvedReviews} theme={theme} />}
        </Await>
      </Suspense>
    </main>
  )
}

export default Quiz
