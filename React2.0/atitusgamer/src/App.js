import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import './assets/css/estilos.css'

function App() {

  const [login, setLogin] = useState(false)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login setLogin={setLogin} />,
    },
    {
      path: "/menu",
      element: login === true ? <Menu /> : <Login setLogin={setLogin} />,
    },

  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
