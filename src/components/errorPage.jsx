import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
    let error = useRouteError
    console.log(error.message)
    
    return (
      <section className="flex justify-center items-center">
        <h1 className="text-xl w-11/12 mt-40 sm:mt-10 sm:w-6/12">Error: {error.message}</h1>
      </section>
    )
}

export default ErrorPage
