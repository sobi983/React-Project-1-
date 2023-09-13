import Header from "./components/header"
import Tour from "./components/tour"
import { TourDataContextProvider } from "./context/AppContext"


function App() {

  return (
    <TourDataContextProvider>
      <Header />
      <Tour />
    </TourDataContextProvider>
  )
}

export default App