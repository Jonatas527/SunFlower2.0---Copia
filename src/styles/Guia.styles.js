import styled from 'styled-components';

export const GuiaM = styled.section`
  width: 80%;
  margin: 0 auto;
  padding-top: 10px;
  text-align: center;

  .title {
    font-size: 40px;
    margin-bottom: 20px;
    color: #fff;
  }

  .slick-slider {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px 0;
  }

  .slick-dots {
    bottom: -30px;

    li button:before {
      font-size: 12px;
      color: #bbb;
    }

    li.slick-active button:before {
      color: #333;
    }
  }

  .slick-prev,
  .slick-next {
    font-size: 0; /* Remove o texto */
    width: 30px;
    height: 30px;
    z-index: 1;
    background-color: transparent; /* Remove o fundo padrão */

    &:before {
      content: ''; /* Remove o conteúdo de texto */
      display: inline-block;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  /* Personalize as setas com ícones */
  .slick-prev:before {
    background-image: url('path/to/left-arrow-icon.svg'); /* Substitua pelo caminho do ícone da seta esquerda */
  }

  .slick-next:before {
    background-image: url('path/to/right-arrow-icon.svg'); /* Substitua pelo caminho do ícone da seta direita */
  }

  .card {
    background-color: #ecf0f1;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    height: 200px; /* Altura fixa para todos os cards */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Distribui o conteúdo para ocupar todo o espaço */
    align-items: center; /* Alinha os itens ao centro */
    
    .card-title {
      font-size: 1.5em;
      color:  #2980b9;
      margin-bottom: 10px;
    }

    .card-text, .card-list {
      font-size: 1em;
      color: #34495e;
      text-align: left;
      flex-grow: 1; /* Faz com que o texto ocupe espaço adicional se necessário */
      overflow: hidden; /* Evita que o texto transborde do card */
      text-overflow: ellipsis; /* Adiciona reticências no final do texto longo */
      display: -webkit-box; /* Suporte para o truncamento do texto */
      -webkit-line-clamp: 4; /* Limita o número de linhas do texto */
      -webkit-box-orient: vertical; /* Necessário para o -webkit-line-clamp */
    }

    .card-list {
      list-style: decimal inside;
      padding: 0;
    }
  }

  /* Estilos responsivos */
  @media (max-width: 768px) {
    .title {
      font-size: 1.5em;
    }

    .slick-slider {
      max-width: 100%; /* Ocupa toda a largura disponível */
      padding: 10px 0; /* Menos padding */
    }

    .card {
      height: auto; /* Deixa a altura dos cards automática */
      padding: 15px; /* Menos padding */
    }

    .card-title {
      font-size: 1.2em; /* Tamanho do título menor em dispositivos móveis */
    }

    .card-text, .card-list {
      font-size: 0.9em; /* Tamanho do texto menor em dispositivos móveis */
      -webkit-line-clamp: 3; /* Limita a 3 linhas em dispositivos móveis */
    }

    .slick-prev, .slick-next {
      width: 25px; /* Tamanho das setas menor */
      height: 25px; /* Tamanho das setas menor */
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 1.2em;
    }

    .card-title {
      font-size: 1em; /* Tamanho do título ainda menor */
    }

    .card-text, .card-list {
      font-size: 0.8em; /* Tamanho do texto ainda menor */
      -webkit-line-clamp: 2; /* Limita a 2 linhas em dispositivos móveis menores */
    }
  }
`;
