import styled from "styled-components";

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



`