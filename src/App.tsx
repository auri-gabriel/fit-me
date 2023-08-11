import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/Root';
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import '@fontsource/poppins';
import Login from './pages/Login';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: '/login', element: <Login />,
      },
      {
        path: '/signup', element: <></>,
      }
    ]
  },
]);

function App() {
  return <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
}

export default App
