import { HeaderHome, Beneficio } from "../styles/Home.styles";
import logoImg from "../assets/logoSunflower.png";
import fundo from "../assets/fundoHome.jpg";

export function Home() {
  return (
    <HeaderHome>
      <Beneficio>
        
      </Beneficio>

      <header>
        <nav>
          <img src={logoImg} className="logo" alt="Logo da SunFlower" />
          <ul>
            <a href="#"> <li>Home</li></a>
            <a href="#"> <li>Público-alvo</li></a>
            <a href="#"><li>Benefícios</li></a>
            <a href="#"><li>Peças</li></a>
            <a href="#"><li>Grupo</li></a>
          </ul>
        </nav>
      </header>
      
      <div className="home" style={{ backgroundImage: `url(${fundo})` }}>
        <h1>Rastreador solar unidirecional de fluxo fotovoltaico</h1>
        <p>Rastreamento Solar Unilateral: Maximizando a Eficiência Energética para Sistemas Fotovoltaicos</p>
      </div>
      <ShortVideo />
    </HeaderHome>
    
  );
}

const ShortVideo = () => {
  return (
    <div className="short-video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BadB1z-V_qU?si=FBkYkarDLO4dFwwH"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
