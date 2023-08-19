import Home from './pages/vans/home'
import About from './pages/vans/about'
import Vans from './pages/vans/vans'
import Dashboard from './pages/host/dashboard'
import Van from './pages/host/vans'
import Reviews from './pages/host/reviews'
import Income from './pages/host/income'

import VansDetails from './pages/vans/vansDetails'
import VanHostDetails from './pages/host/vansHostDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutHome from './components/layoutHome'
import LayoutHost from './components/layoutHostNavbar'
import LayoutHostVan from './components/layoutHostVans'
import VansHostPhotos from './pages/host/vansHostPhotos'
import VansHostPrice from './pages/host/vansHostPrice'
import PageNotFound from './pages/pageNotFound'

function App() {

  return (
    <div className="container overflow-hidden font-Inter">
      <BrowserRouter>
        <Routes>
          {/* Relative Paths for Nesting to keep few components on each page */}
          <Route path="/" element={<LayoutHome />}>

            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VansDetails />} />

            <Route path='host' element={<LayoutHost />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
              <Route path='vans' element={<Van />} />
              <Route path='vans/:id' element={<LayoutHostVan />}>
                <Route index element={<VanHostDetails />} />
                <Route path='photos' element={<VansHostPhotos />} />
                <Route path='pricing' element={<VansHostPrice />} />
              </Route>
            </Route>
            <Route path='*' element={<PageNotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
