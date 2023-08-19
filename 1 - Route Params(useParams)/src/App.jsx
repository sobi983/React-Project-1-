import Home from './pages/home'
import About from './pages/about'
import Vans from './pages/vans'
import VansDetails from './pages/vansDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="container overflow-hidden font-Inter">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />}></Route>
          <Route path='/vans/:id' element={<VansDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
