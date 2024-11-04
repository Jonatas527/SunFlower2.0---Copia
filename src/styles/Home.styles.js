import styled from "styled-components";

export const Conteudo = styled.div`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif; 
  }
  h2 {
    color: #fff;
  }

  .home {
    margin-bottom: 3rem;
    background: center / cover no-repeat;
    min-height: 100vh;
    color: #DFDEFF;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px; /* Padding reduzido para mobile */
  }

  .Div-Videos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%; /* Para que ocupe toda a largura */
  }

  .h2-titulos-video {
    padding: 4rem;
    font-size: 32px;
  }

  .home h1 {
    font-size: 2.5rem; /* Tamanho reduzido */
    max-width: 800px;
  }

  .home p {
    font-size: 1.5rem; /* Tamanho reduzido */
    max-width: 90%;
    margin-top: 2rem;
  }

  @media (min-width: 731px) {
    .home h1 {
      font-size: 50px; /* Tamanho original para desktop */
    }

    .home p {
      font-size: 25px; /* Tamanho original para desktop */
    }
  }
`;

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  .yt {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; /* Ajustar a largura do contêiner */
  }

  iframe {
    width: 100%; /* Ajustar a largura para 100% */
    max-width: 800px; /* Largura máxima */
    height: 500px; /* Altura automática para manter a proporção */
    border: none; /* Sem borda */
  }

  @media (max-width: 730px) {
    iframe {
      height: 50px
      max-width: 70%; /* Ajustar para 100% em telas pequenas */
    }
  }
`;