import styled from "styled-components";

export const Integrantes = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .title {
    padding-bottom: 20px;
    font-size: 40px;
    color: #DFDEFF;
    margin: 0 auto;
    max-width: 800px;
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  .integrantes {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 15px; /* Ajuste do espaçamento entre os integrantes */
  }

  .integrante {
    flex: 1 1 250px; /* Ajusta a largura base da div */
    max-width: 250px; /* Ajusta a largura máxima da div */
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 15px; /* Ajusta o padding da div */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin: 10px; /* Ajusta a margem para evitar que os itens fiquem muito grudados */
  }

  .integrante img {
    width: 100%;
    max-width: 180px; /* Ajusta o tamanho máximo da imagem */
    height: auto;
    margin-bottom: 15px;
    transition: transform 0.3s ease, filter 0.3s ease; /* Transição suave */
  }

  .social-links img:hover {
    transform: scale(1.1); /* Aumenta o tamanho dos ícones ao passar o mouse */
    filter: brightness(1.2); /* Aumenta o brilho dos ícones ao passar o mouse */
  }

  .integrante h3 {
    margin-bottom: 10px;
    font-size: 1.3em; /* Ajusta o tamanho da fonte do nome */
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .social-links a {
    font-size: 1em; /* Ajusta o tamanho da fonte dos ícones sociais */
    color: #555;
    transition: color 0.3s;
  }

  .social-links a:hover {
    color: #000;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 28px;
    }

    .integrante {
      flex: 1 1 200px; /* Ajusta a largura base da div para telas menores */
      max-width: 200px; /* Ajusta a largura máxima da div para telas menores */
      padding: 10px; /* Ajusta o padding da div */
    }

    .integrante img {
      max-width: 140px; /* Ajusta o tamanho máximo da imagem em telas menores */
    }

    .integrante h3 {
      font-size: 1.2em; /* Ajusta o tamanho da fonte do nome */
    }

    .social-links img {
      width: 18px; /* Ajusta o tamanho dos ícones sociais */
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 24px;
    }

    .integrante {
      flex: 1 1 100%;
      max-width: 45%;
      padding: 8px; /* Ajusta o padding da div */
      margin: 10px auto; /* Ajusta a margem para dispositivos móveis */
    }

    .integrante img {
      max-width: 97px; /* Ajusta o tamanho máximo da imagem em telas pequenas */
    }

    .integrante h3 {
      font-size: 1.5rem; /* Ajusta o tamanho da fonte do nome */
    }

    .social-links img {
      width: 26px; /* Ajusta o tamanho dos ícones sociais */
      height: 26px;
    }
  }
`;

export const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 1em 1.8em;
  outline: none;
  border: 1px solid #303030;
  background: #212121;
  color: #00aaff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  overflow: hidden;
  transition: 0.2s;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    box-shadow: 0 0 10px #00aaff, 0 0 25px #001eff, 0 0 50px #00aaff;
    transition-delay: 0.6s;
  }

  span {
    position: absolute;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00aaff);
  }

  &:hover span:nth-child(1) {
    left: 100%;
    transition: 0.7s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #001eff);
  }

  &:hover span:nth-child(3) {
    right: 100%;
    transition: 0.7s;
    transition-delay: 0.35s;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #00aaff);
  }

  &:hover span:nth-child(2) {
    top: 100%;
    transition: 0.7s;
    transition-delay: 0.17s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #001eff);
  }

  &:hover span:nth-child(4) {
    bottom: 100%;
    transition: 0.7s;
    transition-delay: 0.52s;
  }

  &:active {
    background: linear-gradient(to top right, #00aaff, #001eff);
    color: #bfbfbf;
    box-shadow: 0 0 8px #00aaff, 0 0 8px #001eff, 0 0 8px #00aaff;
    transition: 0.1s;
  }

  &:active span:nth-child(1),
  &:active span:nth-child(2),
  &:active span:nth-child(3),
  &:active span:nth-child(4) {
    transition: none;
    transition-delay: none;
  }

  @media (max-width: 768px) {
    padding: 0.8em 1.5em;
    font-size: 14px;
    bottom: 15px;
    right: 15px;
  }

  @media (max-width: 480px) {
    padding: 0.6em 1.2em;
    font-size: 12px;
    bottom: 10px;
    right: 10px;
  }
`;
