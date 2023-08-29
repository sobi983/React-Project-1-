import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import Home from "./pages/home";
import Quiz, { Loader as QuizLoader } from './pages/quiz'
import LayoutPage from "./components/layoutPage";
import NotFoundPage from "./components/notFoundPage"
import ErrorPage from "./components/errorPage";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Quiz />} errorElement={<ErrorPage />} loader={QuizLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
