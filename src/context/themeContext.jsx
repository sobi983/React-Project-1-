import { createContext, useEffect, useState } from "react";

export const ThemeContextProvider = createContext(null)
export default ThemeContextProvider  //this will be used in useContext

// eslint-disable-next-line react/prop-types
export function ThemeContext({ children }) {
    let [theme, setTheme] = useState(localStorage.getItem('theme'))

    useEffect(() => {
        setTheme(() => {
            if (localStorage.getItem('theme') === null) {
                localStorage.setItem('theme', 'forest')
                document.querySelector("html").setAttribute("data-theme", `forest`)
                return 'forest'
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
            if (prev === 'cupcake') {
                localStorage.setItem('theme', 'forest')
                document.querySelector("html").setAttribute("data-theme", `forest`)
                return 'forest'
            }
            else {
                localStorage.setItem('theme', 'cupcake')
                document.querySelector("html").setAttribute("data-theme", `cupcake`)
                return 'cupcake'
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