import styled from 'styled-components';

export const GuiaM = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .title {
    text-align: center;
    font-size: 2.5em; /* Tamanho da fonte do título */
    margin-bottom: 30px; /* Espaçamento abaixo do título */
    color: #fff; /* Cor do título */
  }

  .card-group {
    display: flex; /* Usando flexbox para alinhar os cards lado a lado */
    justify-content: center; /* Centraliza os cards horizontalmente */
    gap: 20px; /* Espaçamento entre os cards */
    flex-wrap: wrap; /* Permite que os cards se movam para a linha seguinte se não houver espaço */
  }

  .card {
    border: 1px solid #ccc;
    border-radius: 15px; /* Bordas arredondadas */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra mais forte */
    padding: 20px;
    background-color: #ecf0f1; /* Cor de fundo clara */
    transition: transform 0.3s, box-shadow 0.3s, max-height 0.3s ease-in-out;
    overflow: hidden;
    max-height: 200px; /* Altura inicial dos cards */
    cursor: pointer;
    width: 300px; /* Largura fixa para os cards */
  }

  .card.expanded {
    max-height: 1000px; /* Altura quando o card está expandido */
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Aumenta a sombra no hover */
  }

  .card-title {
    font-size: 1.5em; /* Tamanho do título */
    margin-bottom: 15px; /* Espaço abaixo do título */
    color: #2980b9; /* Cor do título */
    text-align: center; /* Centraliza o título do card */
  }

  .card-text, .card-list {
    font-size: 1em; /* Tamanho do texto */
    color: #34495e; /* Cor do texto */
    transition: opacity 0.3s;
    opacity: 0;
    height: 0;
  }

  .card.expanded .card-text, .card.expanded .card-list {
    opacity: 1;
    height: auto;
  }

  .card-list {
    list-style-type: none;
    padding: 0;
  }

  .card-list li {
    margin-bottom: 10px;
  }

  a {
    color: #007BFF;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .card {
      width: 90%; /* Largura total em telas menores */
      max-height: none; /* Remove a limitação de altura */
    }

    .title {
      font-size: 2em; /* Ajuste do tamanho do título para telas menores */
    }
  }
`;
