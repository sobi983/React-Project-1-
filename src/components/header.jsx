import { memo } from "react";

const Header = () => {
    let str = 'Tired of boring lorem ipsum?'
  return (
    <>
       <h1 className="text-xl sm:text-2xl font-bold flex justify-center mt-10 tracking-wide">{str.toUpperCase()}</h1> 
    </>
  )
}

export default memo(Header)
