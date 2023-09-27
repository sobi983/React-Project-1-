import { useContext, useState } from "react"
import data from '../data'
import { Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThemeContextProvider from "../context/themeContext";




const Accordians = () => {
  let [dataa, setData] = useState(data)
  let {theme} = useContext(ThemeContextProvider)

  let displayData = dataa.map(items => (
    <div key={items.id}>
      <Accordion >

        <AccordionSummary expandIcon={<ExpandMoreIcon />} className=" shadow-m">
          <Typography variant="h6">
            <h1 className="font-bold sm:text-xl text-sm"> {items.title}</h1>
          </Typography>
        </AccordionSummary>

        <AccordionDetails className='font-semibold sm:text-md text-xs'>
          {items.info}
        </AccordionDetails>

      </Accordion>
    </div>
  ))

  return (
    <div className="flex justify-center items-center min-h-screen">

      <div className="bg-white w-8/12 flex justify-center sm:py-32 py-10 sm:mb-0 mb-16 sm:gap-16 gap-6 px-8 rounded-xl sm:flex-nowrap flex-wrap">
        <Typography variant="h4" className={theme === 'valentine' ? "text-lightBlue" : ' text-customYellow'}>
          <h1 className="font-semibold font-sans sm:text-3xl text-lg sm:text-left text-center">Questions and Answers about the login</h1>
        </Typography>
        <div>
          {displayData}
        </div>
      </div>

    </div>
  )
}

export default Accordians
