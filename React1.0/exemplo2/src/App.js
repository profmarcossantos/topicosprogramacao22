import './assets/css/estilo.css' // <link ref="stylesheet" href="..." />
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login'
import Menu from './pages/Menu'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App