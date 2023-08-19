import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import Home from './pages/vans/home'
import About from './pages/vans/about'
import Vans, { loader as VansLoader } from './pages/vans/vans'
import VansDetails from './pages/vans/vansDetails'

import Dashboard from './pages/host/dashboard'
import Van from './pages/host/vans'
import Reviews from './pages/host/reviews'
import Income from './pages/host/income'
import VanHostDetails from './pages/host/vansHostDetails'
import VansHostPhotos from './pages/host/vansHostPhotos'
import VansHostPrice from './pages/host/vansHostPrice'

import LayoutHome from './components/layoutHome'
import LayoutHost from './components/layoutHostNavbar'
import LayoutHostVan from './components/layoutHostVans'
import PageNotFound from './pages/pageNotFound'
import ErrorPage from "./components/errorPage"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutHome />}>

        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans'
          element={<Vans />}
          loader={VansLoader}
          errorElement={<ErrorPage />} />
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
        <Route path='*' element={<PageNotFound />} />
      </Route>

    )
  )

  return (
    <div className="container overflow-hidden font-Inter">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
