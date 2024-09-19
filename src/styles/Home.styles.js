import styled from "styled-components";

export const Conteudo = styled.div`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif; 
  }



  .home {
    margin-bottom: 3rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    color: #DFDEFF;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    padding: 0 20px;
  }

  .home h1 {
    margin: 0 auto;
    max-width: 800px;
    font-size:  50px; /* Tamanho da fonte no desktop */
  }

  .home p {
    margin: 0 auto;
    font-size: 25px; /* Tamanho da fonte no desktop */
    max-width: 700px;
    margin-top: 4.5rem;
  }

  @media screen and (max-width: 730px) {

    .home h1 {
      margin: 0 auto;
      font-size: 2.2rem 
    }

    .home p {
      margin: 0 auto;
      font-size: 1.7rem; 
      max-width: 100%;
    }
  }
`

export const Video = styled.div`
  .short-video {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }

  @media (max-width: 730px) {
    .short-video {
      width: 100%;
      height: auto;
      flex-direction: column;
      align-items: center;
    }
    .short-video iframe {
      width: 100%;
      height: auto;
      max-width: 300px; 
    }
  }
`
  
