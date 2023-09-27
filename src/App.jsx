import { ThemeContext } from "./context/themeContext";
import Accordians from './components/accordians.jsx'
import Header from "./components/header";


function App() {
  return (
    <ThemeContext>
      <Header />
      <Accordians />
    </ThemeContext>
  )
}

export default App
