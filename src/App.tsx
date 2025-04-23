import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootHomeLayout from './pages/Root';
import '@fontsource/poppins';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Item from './pages/Item';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootHomeLayout />,
    children: [
      {
        path: '/login', element: <Login />,
      },
      {
          path: '/signup', element: <Signup />,
      },
      {
        path: '/', element: <Home/>
      },
      {
        path: '/restaurant/:id', element: <Item/>
      }
    ]
  },
]);

function App() {
  return <>
    <RouterProvider router={router} />
  </>
}

export default App
