import styled from "styled-components";

export const PageMelhorDesempenho = styled.div`
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15%;
    flex-direction: row; 
  }

  .Div-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
    margin-right: 50px; 
  }

  .Div-text h2 {
    color: #ffffff;
    padding-bottom: 20px;
    font-size: 40px;
    text-align: center; 
    width: 100%; 
  }

  .Div-text p {
    text-align: justify;
    color: #ffffff;
    background-color: rgba(9, 39, 74, 0.29);
    border-radius: 20px;
    width: auto;
    font-size: 20px;
    padding: 10px;
    margin-top: 20px;
  }

  .img {
    margin-right: 50px; 
  }

  img {
    max-width: 80%; 
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    main {
      flex-direction: column; 
      align-items: center;
    }

    .Div-text {
      width: 100%;
      margin-right: 0;
      padding: 0 20px;
    }

    .Div-text h2 {
      font-size: 30px;
    }

    .Div-text p {
      font-size: 18px;
    }

    .img {
      margin-top: 20px; 
      margin-left: 20px; 
    }

    img {
      max-width: 80%; 
    }
  }

  @media (max-width: 480px) {
    .Div-text h2 {
      font-size: 24px;
    }

    .Div-text p {
      font-size: 16px;
    }

    .img {
      margin-top: 20px; 
      margin-left: 60px; 
    }

    img {
      max-width: 90%; 
    }
  }
`;

export const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 1em 1.8em;
  outline: none;
  border: 1px solid #303030;
  background: #212121;
  color: #00aaff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  overflow: hidden;
  transition: 0.2s;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    box-shadow: 0 0 10px #00aaff, 0 0 25px #001eff, 0 0 50px #00aaff;
    transition-delay: 0.6s;
  }

  span {
    position: absolute;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00aaff);
  }

  &:hover span:nth-child(1) {
    left: 100%;
    transition: 0.7s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #001eff);
  }

  &:hover span:nth-child(3) {
    right: 100%;
    transition: 0.7s;
    transition-delay: 0.35s;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #00aaff);
  }

  &:hover span:nth-child(2) {
    top: 100%;
    transition: 0.7s;
    transition-delay: 0.17s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #001eff);
  }

  &:hover span:nth-child(4) {
    bottom: 100%;
    transition: 0.7s;
    transition-delay: 0.52s;
  }

  &:active {
    background: linear-gradient(to top right, #00aaff, #001eff);
    color: #bfbfbf;
    box-shadow: 0 0 8px #00aaff, 0 0 8px #001eff, 0 0 8px #00aaff;
    transition: 0.1s;
  }

  &:active span:nth-child(1),
  &:active span:nth-child(2),
  &:active span:nth-child(3),
  &:active span:nth-child(4) {
    transition: none;
    transition-delay: none;
  }

  @media (max-width: 768px) {
    padding: 0.8em 1.5em;
    font-size: 14px;
    bottom: 15px;
    right: 15px;
  }

  @media (max-width: 480px) {
    padding: 0.6em 1.2em;
    font-size: 12px;
    bottom: 10px;
    right: 10px;
  }
`;
