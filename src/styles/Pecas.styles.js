// Pecas.styles.js

import styled from 'styled-components';

export const Carrossel = styled.section`
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
  text-align: center;

  #pecas {
    font-size: 2em;
    margin-bottom: 20px;
    color: #fff;
  }

  .Carrossel {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px 0;
  }

  .slick-slider {
    max-width: 600px;
    margin: 0 auto;
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
    font-size: 0;
    width: 30px;
    height: 30px;
    z-index: 1;
    background-color: transparent;

    &:before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .slick-prev:before {
    background-image: url('path/to/left-arrow-icon.svg'); /* Substitua pelo ícone da seta esquerda */
  }

  .slick-next:before {
    background-image: url('path/to/right-arrow-icon.svg'); /* Substitua pelo ícone da seta direita */
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    width: 90%;
    padding-top: 30px;

    #pecas {
      font-size: 1.5em;
    }

    .slick-slider {
      max-width: 90%;
    }

    .slick-prev, .slick-next {
      width: 25px;
      height: 25px;
    }
  }
`;
