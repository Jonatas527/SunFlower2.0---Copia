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

  .Titulo-baixo, .Titulo-cima{
    margin-bottom: 80px;
  }
  

  .TitleWrapper {
    position: relative;
    width: 300px;
    height: 200px; 
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .TitleWrapper h3 {
    margin-bottom: 10px;
    color: #ffff;
    font-size: 20px; 
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 5px;
  }

  .TitleWrapper img {
    width: 100%;
    height: auto; 
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
      height: auto; 
    }

    .TitleWrapper h3 {
      font-size: 16px;
      margin-bottom: 5px; 
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
      font-size: 13.5px;
      margin-bottom: 2px; 
    }

    .TitleWrapper img {
      width: 100%;
    }
  }
`;
