import { useOutletContext } from "react-router-dom"

const VansHostPhotos = () => {
  let [vanData] = useOutletContext()

  
  return (
    <div className="flex justify-center mt-10 pb-10">
      <img src={vanData.imageUrl} alt="Error" className="w-32"/>
    </div> 
  )
}

export default VansHostPhotos
