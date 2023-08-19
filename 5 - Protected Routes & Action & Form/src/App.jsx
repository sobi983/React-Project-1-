import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import Home from './pages/vans/home'
import About from './pages/vans/about'
import Vans, { loader as VansLoader } from './pages/vans/vans'
import VansDetails, { loader as VansDeatailLoader } from './pages/vans/vansDetails'

import Dashboard from './pages/host/dashboard'
import Van from './pages/host/vans'
import Reviews from './pages/host/reviews'
import Income from './pages/host/income'
import VanHostDetails from './pages/host/vansHostDetails'
import VansHostPhotos from './pages/host/vansHostPhotos'
import VansHostPrice from './pages/host/vansHostPrice'

import LayoutHome from './components/layoutHome'
import LayoutHost from './components/layoutHostNavbar'
import LayoutHostVan, { loader as LayoutHostVanLoader } from './components/layoutHostVans'
import PageNotFound from './pages/pageNotFound'
import ErrorPage from "./components/errorPage"
import LoginPage, { action as loginAction } from './pages/loginPage'

import { authentication } from './components/authentication'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutHome />}>

        <Route index element={<Home />} />
        <Route path='login' element={<LoginPage />} action={loginAction} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} loader={VansLoader} errorElement={<ErrorPage />} />
        <Route path='vans/:id' element={<VansDetails />} loader={VansDeatailLoader} errorElement={<ErrorPage />} />

        <Route path='host' element={<LayoutHost />} >

          <Route index element={<Dashboard />} loader={async ({ request }) => {
            const addr = new URL(request.url)
            return await authentication(addr.pathname)
          }}
            errorElement={<ErrorPage />} />

          <Route path='income' element={<Income />} loader={async ({ request }) => {
            const addr = new URL(request.url)
            return await authentication(addr.pathname)
          }} />

          <Route path='reviews' element={<Reviews />} loader={async ({ request }) => {
            const addr = new URL(request.url)
            return await authentication(addr.pathname)
          }} />
          <Route path='vans' element={<Van />} loader={async ({ request }) => {
            const addr = new URL(request.url)
            return await authentication(addr.pathname)
          }} />

          <Route path='vans/:id' element={<LayoutHostVan />} loader={LayoutHostVanLoader}>
            <Route index element={<VanHostDetails />} loader={async ({ request }) => {
              const addr = new URL(request.url)
              return await authentication(addr.pathname)
            }} />
            <Route path='photos' element={<VansHostPhotos />} loader={async ({ request }) => {
              const addr = new URL(request.url)
              return await authentication(addr.pathname)
            }} />
            <Route path='pricing' element={<VansHostPrice />} loader={async ({ request }) => {
              const addr = new URL(request.url)
              return await authentication(addr.pathname)
            }} />
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
