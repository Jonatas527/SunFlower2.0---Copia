import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


import  Landing from './pages/LandingPage';
import  Publi  from './pages/Publico'; // Importação default
import Grupo from './pages/Grupo';
import Peças from './pages/Pecas';
import Beneficios from './pages/Beneficios'





import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


const router = createBrowserRouter([

  {
    path: '/',
    element: < Landing />,
  },
  {
    path: '/publi',
    element: <Publi />,
  },
  {
    path: '/grup',
    element: <Grupo />,
  },
  {
    path: '/peça',
    element: <Peças />,
  },
  {
    path: '/bene',
    element: <Beneficios />,
  },

  

]);


export function App() {
  return (

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>

  );
}


