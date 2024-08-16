import styled from "styled-components";

export const Carrossel = styled.div`

  .Carrossel {
    width: 800px; /* Largura padrão para telas grandes */
    margin: 30px auto 0 auto; /* Centraliza horizontalmente e mantém margem superior */
    padding: 0 15px; /* Adiciona padding nas laterais */
  }

  .Carrossel img {
    width: 100%;
    height: auto;
    display: block; /* Garante que a imagem ocupe toda a largura do contêiner */
  }

  h2 {
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    padding-top: 25px;
  }

  @media (max-width: 730px) {
    .Carrossel {
      width: 100%; /* Ajusta a largura para ocupar 100% da largura da tela em dispositivos menores */
      max-width: 400px; /* Define um máximo para a largura */
      margin: 30px auto 0 auto; /* Centraliza horizontalmente e mantém a margem superior */
      padding: 0 10px; /* Ajusta o padding para telas menores */
    }
  }
`;
