import axios from "axios"
import { useEffect, useState } from "react"
import { createContext } from "react";

export const TourDataContext = createContext(null)

// eslint-disable-next-line react/prop-types
export function TourDataContextProvider({ children }) {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        setTimeout(() => {
            axios.get('https://course-api.com/react-tours-project').then(res => setData(res.data))
            setLoading(false)
        }, [2000]);
    }

    function refresh() {
        setLoading(true)
        return fetchData()
    }


    let value = {
        data,
        setData,
        loading,
        setLoading,
        refresh,
    }

    return (

        <TourDataContext.Provider value={value}>
            {children}
        </TourDataContext.Provider>
    )
}

export default TourDataContext