import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/Root';
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import '@fontsource/poppins';

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
        path: '/', element: <div> Herro everynyan, how are you fine thank you!</div>
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
