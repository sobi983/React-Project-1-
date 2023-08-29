import { useOutletContext } from "react-router-dom"


const NotFoundPage = () => {
  let [theme] = useOutletContext()
  let stylee = {
    color: theme === "night" ? "#ffffff" : "#292019ff",
    fontWeight: theme === "autumn" ? 500 : 500
  }
  
  return (
    <section className="flex justify-center items-center">
      <h1 style={stylee} className="text-xl w-11/12 mt-40 sm:mt-10 sm:w-6/12">Page Not Found: The requested page could not be found. Please check the URL or navigate back to a valid page.</h1>
    </section>
  )
}

export default NotFoundPage
