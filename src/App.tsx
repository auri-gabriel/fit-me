import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: '/', element: <div> Herro everynyan, how are you fine thank you!</div>
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
