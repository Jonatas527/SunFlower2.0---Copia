
import styled from "styled-components";


export const CardsBeneficios = styled.div`

h2{
    display: flex;
    justify-content: center;
    color: #ffff;
    font-size: 40px;
    padding-top: 20px;
}

.Parte-de-Cima,.Parte-de-Baixo {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    gap: 30px;
}

.div-button-cima{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 169px;
}

.div-button-baixo{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap:169px;

}

.button{
  button {
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
}

.button::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

.button:hover {
  color: white;
}

.button:before {
  top: 100%;
  left: 100%;
  transition: 0.3s all;
}

.button:hover::before {
  top: -30px;
  left: -30px;
}
}

`