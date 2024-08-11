import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import Publi from './pages/Publico'; // Importação default
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
]);

// Componente principal do App
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}


