import styled from "styled-components";

export const Carrossel = styled.div`

  .Carrossel {
    width: 800px; 
    margin: 30px auto 0 auto; 
    padding: 0 15px; 
  }

  .Carrossel img {
    width: 100%;
    height: auto;
    display: block; 
  }

  h2 {
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    padding-top: 70px;
  }

  @media (max-width: 730px) {
    .Carrossel {
      width: 100%; 
      max-width: 400px; 
      margin: 30px auto 0 auto; 
      padding: 0 10px; 
    }
  }
`;
