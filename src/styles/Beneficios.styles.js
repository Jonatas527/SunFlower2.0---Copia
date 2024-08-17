import styled from "styled-components";

export const CardsBeneficios = styled.div`

  h2 {
    display: flex;
    justify-content: center;
    color: #ffff;
    font-size: 40px;
    padding-top: 20px;
  }

  img{
    width: 100%;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  img:hover{
    transform: translateY(-10px);
  }

  .Titulo-cima{
    display: flex;
    justify-content: center;
    color: #ffff;
    gap: 80px;
    margin-top: 30px;
    
  }

  .Parte-de-Cima, .Parte-de-Baixo {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    gap: 40px;
  }

  .div-button-cima {
    display: flex;
    justify-content: center;
    margin-top: 5px;
    gap: 100px;
  }

  .div-button-baixo {
    display: flex;
    justify-content: center;
    margin-top: 5px;
    gap: 100px;
  }

  .Titulo-baixo{
    display: flex;
    justify-content: center;
    color: #ffff;
    gap: 60px;
    margin-top: 30px;
  }

  a {
    text-decoration: none; /* Remove o sublinhado do link */
    color: inherit; /* Mantém a cor herdada */
  }
`;

export const Botao = styled.button`
  --color: #0077ff;
  font-family: inherit;
  display: inline-block;
  width: 6em;
  height: 2.6em;
  line-height: 2.5em;
  overflow: hidden;
  cursor: pointer;
  margin: 20px;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 6px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    background: var(--color);
    width: 150px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
  }

  &:hover {
    color: white;
  }

  &:before {
    top: 100%;
    left: 100%;
    transition: 0.3s all;
  }

  &:hover::before {
    top: -30px;
    left: -30px;
  }
`;
