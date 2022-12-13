import './assets/css/estilo.css' // <link ref="stylesheet" href="..." />
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login'
import Menu from './pages/Menu'
import Erros from './pages/Erros';

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
    {
      path: "*",
      element: <Erros />,
    },



  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App