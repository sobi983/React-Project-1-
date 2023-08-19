import { useOutletContext } from "react-router-dom"
const VansHostPrice = () => {
  let [vanData] = useOutletContext()

  
  return (
    <div className="flex justify-center mt-10 pb-10">
      <h1 className="font-bold sm:text-2xl">${vanData.price}<span className=" font-normal text-base">/day</span></h1>
    </div> 
  )
}
  
  export default VansHostPrice
  