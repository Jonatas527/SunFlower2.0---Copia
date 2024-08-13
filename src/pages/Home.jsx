import fundo from '../assets/fundoHome.png';
import { Conteudo } from '../styles/Home.styles';
import { Video } from '../styles/Home.styles';
import logoImg from "../assets/logoSunflower.png";





export function Home() {
  return (
    <Conteudo>
      <header>
        <nav>
          <a href="#"><img src={logoImg} className="logo" alt="Logo da SunFlower" /></a>
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#publico"><li>Público-alvo</li></a>
            <a href="#"><li>Benefícios</li></a>
            <a href="#Carrossel"><li>Peças</li></a>
            <a href="#integrantes"><li>Grupo</li></a>
          </ul>
        </nav>
      </header>
      <div className="home" style={{ backgroundImage: `url(${fundo})` }}>
        <h1>Rastreador solar unidirecional de fluxo fotovoltaico</h1>
        <p>Rastreamento Solar Unilateral: Maximizando a Eficiência Energética para Sistemas Fotovoltaicos</p>
      </div>
      <ShortVideo />
    </Conteudo>
  );
}

const ShortVideo = () => {
  return (
    <Video>

      <div className="short-video">
        <iframe
          width="660"
          height="350"
          src="https://www.youtube.com/embed/BadB1z-V_qU?si=FBkYkarDLO4dFwwH"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

    </Video>


  );
};



