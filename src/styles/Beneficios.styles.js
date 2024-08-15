
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

  padding: 16px 42px;
  border-radius: 3px;
  box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5);
  line-height: 1.25;
  background: #FC6E51;
  text-decoration: none;
  user-select: none;
  color: white;
  font-size: 16px;
  letter-spacing: .08em;
  text-transform: uppercase;
  position: relative;
  transition: background-color .6s ease;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    top: var(--mouse-y);
    left: var(--mouse-x);
    transform-style: flat;
    transform: translate3d(-50%,-50%,0);
    background: rgba(white,.1);
    border-radius: 100%;
    transition: width .3s ease, height .3s ease;
  }
  &:focus,
  &:hover {
      background: darken(#FC6E51,7%);
  }
  &:active {
    &:after {
      width: 300px;
      height: 300px;
    }
  }
}

`