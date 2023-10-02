import { QueryClient, QueryClientProvider } from "react-query"
import Navbar from "./components/navbar"
import Slider from "./components/slider"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Slider />
    </QueryClientProvider>
  )
}

export default App
