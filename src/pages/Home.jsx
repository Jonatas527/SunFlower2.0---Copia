import { Conteudo } from '../styles/Home.styles';
import { Video } from '../styles/Home.styles';
import logoImg from "../assets/logoSunflower.png";
import fundo from '../assets/fundoHome.png';
import closeIcon from "../assets/icones/menuMobile/close.png";  
import menuOpenIcon from "../assets/icones/menuMobile/menuOpen.png"; 
import { Link } from 'react-router-dom';

export function Home() {
  const menuShow = () => {
    const menuMobile = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      icon.src = menuOpenIcon;  
    } else {
      menuMobile.classList.add('open');
      icon.src = closeIcon ;  
    }
  };

  return (
    <Conteudo>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <img src={logoImg} alt="Logo da SunFlower" />
          </div>
          <div className="nav-list">
            <ul>
              <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#publico" className="nav-link">Público-alvo</a></li>
              <li className="nav-item"><a href="#Beneficios" className="nav-link">Benefícios</a></li>
              <li className="nav-item"><a href="#Carrossel" className="nav-link">Peças</a></li> 
              <li className="nav-item"><Link to="/grup" className="nav-link">Grupo</Link></li>
            </ul>
          </div>
          
          <div className="mobile-menu-icon">
            <button onClick={menuShow}><img className="icon" src={menuOpenIcon} alt="Menu Icon" /></button>
          </div>
        </nav>
        <div className="mobile-menu">
          <ul>
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#publico" className="nav-link">Público-alvo</a></li>
            <li className="nav-item"><a href="#Carrossel" className="nav-link">Peças</a></li>
            <li className="nav-item"><a href="#Beneficios" className="nav-link">Benefícios</a></li>
            <li className="nav-item"><Link to="/grup" className="nav-link">Grupo</Link></li>
          </ul>
          
        </div>
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
