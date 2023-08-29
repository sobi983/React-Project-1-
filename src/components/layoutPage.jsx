import { useEffect, useState } from "react"
// eslint-disable-next-line no-unused-vars
import { Outlet, useOutletContext } from "react-router-dom"


export default function LayoutPage() {
    let [theme, setTheme] = useState("night")

    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", `${theme}`)
    }, [theme])

    function handleThemeToggle() {
        return setTheme(prev => prev === "night" ? "autumn" : "night")
    }
    return (
        <>
            <header>
                {theme === "night" ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f471b5ff" fillOpacity="0.9" d="M0,96L40,101.3C80,107,160,117,240,128C320,139,400,149,480,154.7C560,160,640,160,720,149.3C800,139,880,117,960,90.7C1040,64,1120,32,1200,64C1280,96,1360,192,1400,240L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#836b5dff" fillOpacity="0.9" d="M0,96L40,101.3C80,107,160,117,240,128C320,139,400,149,480,154.7C560,160,640,160,720,149.3C800,139,880,117,960,90.7C1040,64,1120,32,1200,64C1280,96,1360,192,1400,240L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>}
                <label className="swap swap-rotate absolute top-10 right-0 m-5" >
                    <input type="checkbox" onClick={handleThemeToggle} />
                    <svg className="swap-on fill-current w-10 h-10" viewBox="0 0 1024.00 1024.00" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)" stroke="#000000" strokeWidth="0.01024">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048" />
                        <g id="SVGRepo_iconCarrier">
                            <path d="M785.334 194.943c174.789 174.787 174.789 459.179 0 633.967-174.787 174.787-459.178 174.787-633.967 0-13.206-13.205-26.22-28.336-39.807-46.314a19.672 19.672 0 0 1-2.223-20.012 19.777 19.777 0 0 1 16.54-11.442c98.838-6.698 191.601-48.753 261.234-118.386C530.853 489.014 546.472 258.475 423.392 96.51a19.553 19.553 0 0 1-2.249-19.981 19.554 19.554 0 0 1 16.54-11.497c129.587-8.759 256.325 38.583 347.651 129.911z" fill="#f471b5ff" />
                            <path d="M785.334 194.943c-14.266-14.268-29.484-27.325-45.354-39.399 151.302 175.925 143.723 442.269-22.987 608.98-121.85 121.85-307.044 190.195-461.161 142.154 60.038 35.511 140.886 47.603 167.101 50.984 129.417 13.067 263.464-29.816 362.401-128.753 174.789-174.787 174.789-459.179 0-633.966z" fill="#301c26ff" />
                        </g>
                    </svg>

                    <svg className="swap-off fill-current w-10 h-10" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier"> <g clipPath="url(#a)" fill=" #d59b6cff"> <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" /> </g> <defs> <clipPath id="a"> <path fill="#ffffff" d="M0 0h24v24H0z" /> </clipPath> </defs> </g>
                    </svg>
                </label>
            </header>
            <Outlet context={[theme]} />
        </>
    )
}