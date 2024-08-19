import styled from "styled-components";

export const CardsBeneficios = styled.div`
  h2 {
    display: flex;
    justify-content: center;
    color: #ffff;
    font-size: 40px;
    padding-top: 20px;
  }

  .Titulo-cima, .Titulo-baixo {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .TitleWrapper {
    position: relative;
    width: 300px; /* Ajuste conforme necessário */
    height: 200px; /* Ajuste conforme necessário */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .TitleWrapper h3 {
    margin-bottom: 10px; /* Espaço entre o título e a imagem */
    color: #ffff;
    font-size: 20px; /* Ajuste conforme necessário */
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente para legibilidade */
    padding: 5px;
    border-radius: 5px;
  }

  .TitleWrapper img {
    width: 100%;
    height: auto; /* Ajusta a altura para manter a proporção */
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .TitleWrapper img:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 30px;
    }

    .TitleWrapper {
      width: 200px;
      height: auto; /* Ajusta a altura automaticamente */
    }

    .TitleWrapper h3 {
      font-size: 16px;
      margin-bottom: 5px; /* Ajusta o espaço entre o título e a imagem */
    }

    .TitleWrapper img {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 24px;
    }

    .TitleWrapper {
      width: 150px;
    }

    .TitleWrapper h3 {
      font-size: 14px;
      margin-bottom: 2px; /* Ajusta o espaço entre o título e a imagem */
    }

    .TitleWrapper img {
      width: 100%;
    }
  }
`;
