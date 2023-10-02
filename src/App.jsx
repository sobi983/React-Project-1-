import { ThemeContext } from "./context/themeContext";
import Header from "./components/header";
import Filter from "./components/filter";



function App() {

  return (
    <ThemeContext>
      <Header />
      <Filter />
    </ThemeContext>
  )
}

export default App
