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
  flex-direction: column; /* Manter flex-direction como coluna */
  justify-content: center;
  align-items: center;
  padding-top: 20px; /* Espaçamento acima dos vídeos */

 

  iframe {
    width: 900px ;
    max-width: 800x; /* Largura máxima para ocupar toda a largura disponível */
    
    border: none; /* Sem borda */
  }

  @media (min-width: 731px) {
    width: 90px ;
    max-width: 80x; /* Largura máxima para ocupar toda a largura disponível */
  }
`;
