import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './chakraUI-Structure/config'
import { Container } from '@chakra-ui/react'
import PostPage from './pages/PostPage'
import UserPage from './pages/UserPage'
import Layout from './components/Layout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/:username' element={<Layout />}>
        <Route index element={<UserPage />} />
        <Route path='/:username/post/:pid' element={<PostPage />} />
      </Route>
    )
  )

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Container maxW='620px'>
        <RouterProvider router={router} />
      </Container>
    </ChakraProvider>
  )
}

export default App
