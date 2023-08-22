import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import NotFound from './NotFound';
import Sobre from './Sobre';
import Rotas from './Rotas';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Children } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "rotas",
        element: <Rotas/>
      },
      {
        path: "Sobre",
        element: <Sobre/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])

function App() {
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
