import { useContext } from "react"
import ThemeContextProvider from "../context/themeContext"
import { ToggleButton, Typography } from "@mui/material"
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';

const Header = () => {
  let { theme, toggle } = useContext(ThemeContextProvider)

  return (
    <div className="flex justify-center mt-2">
      <Typography variant="h4">Accordian App</Typography>

      <div className="absolute right-4">
        <ToggleButton onClick={toggle}>
          {theme === "valentine" ? <DarkModeTwoToneIcon className=" text-blue-300" /> : <LightModeTwoToneIcon className="text-gray-400" />}
        </ToggleButton>

      </div>
    </div>
  )
}

export default Header
