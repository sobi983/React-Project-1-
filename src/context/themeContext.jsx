import { createContext, useEffect, useState } from "react";

export const ThemeContextProvider = createContext(null)
export default ThemeContextProvider  //this will be used in useContext

// eslint-disable-next-line react/prop-types
export function ThemeContext({ children }) {
    let [theme, setTheme] = useState(localStorage.getItem('theme'))

    useEffect(() => {
        setTheme(() => {
            if (localStorage.getItem('theme') === null) {
                localStorage.setItem('theme', 'valentine')
                document.querySelector("html").setAttribute("data-theme", `valentine`)
                return 'valentine'
            }
            else {
                let thme = localStorage.getItem('theme')
                document.querySelector("html").setAttribute("data-theme", `${thme}`)
                return thme
            }
        })
    }, [])


    //Toggle function for changing the theme
    let toggle = () => {
        setTheme(prev => {
            if (prev === 'valentine') {
                localStorage.setItem('theme', 'synthwave')
                document.querySelector("html").setAttribute("data-theme", `synthwave`)
                return 'synthwave'
            }
            else {
                localStorage.setItem('theme', 'valentine')
                document.querySelector("html").setAttribute("data-theme", `valentine`)
                return 'valentine'
            }
        })
    }

    let value = {
        theme,
        setTheme,
        toggle
    }


    return (
        <ThemeContextProvider.Provider value={value}>
            {children}
        </ThemeContextProvider.Provider>
    )
}