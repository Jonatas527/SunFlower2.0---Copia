import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Landing from './pages/LandingPage';
import Publi from './pages/Publico'; 
import Guia from './pages/Guia';// Importação default
import Grupo from './pages/Grupo';
import Peças from './pages/Pecas';
import Beneficios from './pages/Beneficios'
import { MelhorDesempenho } from './pages/MelhorDesempenho'
import MaiorEficiencia from './pages/MaiorEficiencia';
import ProduçaoEnergia from './pages/ProducaoEnergia'
import Tecnologia from './pages/TecAdaptativa'
import Otimizacao from './pages/OtimizacaoEspaco'
import Header from './pages/Header'







import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


const router = createBrowserRouter([


  {
    path: '/',
    element: < Landing />,
  },
  {
    path: '/header',
    element: <Header />,
  },
  {
    path: '/publi',
    element: <Publi />,
  },
  {
    path: '/guia',
    element: <Guia />,
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
  {
    path: '/md',
    element: <MelhorDesempenho />,
  },
  {
    path: '/me',
    element: <MaiorEficiencia />,
  },

  {
    path: '/pe',
    element: <ProduçaoEnergia />,
  },

  {
    path: '/te',
    element: <Tecnologia />,
  },

  {
    path: '/ot',
    element: <Otimizacao />,
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