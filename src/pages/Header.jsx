import { Header } from "../styles/Header.styles";
import logoImg from "../assets/logoSunflower.png";
import closeIcon from "../assets/icones/menuMobile/close.png";
import menuOpenIcon from "../assets/icones/menuMobile/menuOpen.png";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function PHeader() {
  const [isVisible, setIsVisible] = useState(true);

  const menuShow = () => {
    const menuMobile = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      icon.src = menuOpenIcon;
    } else {
      menuMobile.classList.add('open');
      icon.src = closeIcon;
    }
  };

  // Monitorando o scroll para esconder/mostrar o header
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop) {
        setIsVisible(false); // Esconde o header ao descer
      } else {
        setIsVisible(true); // Mostra o header ao subir
      }
      lastScrollTop = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Header isVisible={isVisible}>
      <header>
        <nav className="nav-bar">
          <Link to={'/'}>
            <div className="logo">
              <img src={logoImg} alt="Logo da SunFlower" />
            </div>
          </Link>
          <div className="nav-list">
            <ul>
              <li className="nav-item">
                {window.location.pathname !== '/' ? (
                  <a href="/" className="nav-link">Público-alvo</a>
                ) : (
                  <a href="#publico" className="nav-link">Público-alvo</a>
                )}
              </li>
              <li className="nav-item">
                {window.location.pathname !== '/' ? (
                  <a href="/guia" className="nav-link">Guia</a>
                ) : (
                  <a href="#Guia" className="nav-link">Guias</a>
                )}
              </li>
              <li className="nav-item">
                {window.location.pathname !== '/' ? (
                  <a href="/" className="nav-link">Benefícios</a>
                ) : (
                  <a href="#Beneficios" className="nav-link">Benefícios</a>
                )}
              </li>
              <li className="nav-item">
                {window.location.pathname !== '/' ? (
                  <a href="/" className="nav-link">Peças</a>
                ) : (
                  <a href="#Carrossel" className="nav-link">Peças</a>
                )}
              </li>
              <li className="nav-item">
                {window.location.pathname !== '/' ? (
                  <a href="/grup" className="nav-link">Grupo</a>
                ) : (
                  <Link to="/grup" className="nav-link">Grupo</Link>
                )}
              </li>
            </ul>
          </div>
          <div className="mobile-menu-icon">
            <button onClick={menuShow}>
              <img className="icon" src={menuOpenIcon} alt="Menu Icon" />
            </button>
          </div>
        </nav>
        <div className="mobile-menu">
          <ul>
            <li className="nav-item">
              {window.location.pathname !== '/' ? (
                <a href="/" className="nav-link">Público-alvo</a>
              ) : (
                <a href="#publico" className="nav-link">Público-alvo</a>
              )}
            </li>
            <li className="nav-item">
              {window.location.pathname !== '/' ? (
                <a href="/guia" className="nav-link">Guia</a>
              ) : (
                <a href="#Guia" className="nav-link">Guias</a>
              )}
            </li>
            <li className="nav-item">
              {window.location.pathname !== '/' ? (
                <a href="/" className="nav-link">Benefícios</a>
              ) : (
                <a href="#Beneficios" className="nav-link">Benefícios</a>
              )}
            </li>
            <li className="nav-item">
              {window.location.pathname !== '/' ? (
                <a href="/" className="nav-link">Peças</a>
              ) : (
                <a href="#Carrossel" className="nav-link">Peças</a>
              )}
            </li>
            <li className="nav-item">
              {window.location.pathname !== '/' ? (
                <a href="/grup" className="nav-link">Grupo</a>
              ) : (
                <Link to="/grup" className="nav-link">Grupo</Link>
              )}
            </li>
          </ul>
        </div>
      </header>
    </Header>
  );
}
