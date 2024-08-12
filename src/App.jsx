import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import Publi from './pages/Publico'; // Importação default
import Grupo from './pages/Grupo'
import Beneficios from './pages/Beneficios';

import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
    path: '/bene',
    element: <Beneficios/>,
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


