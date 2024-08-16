import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${props => props.theme.HomeCorFundo};
  color: #fff;
  font-family: Arial, sans-serif;
  .title {
  font-size: 2em;
  margin-bottom: 40px;
}

.target-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.group {
  background-color: #1b2a3a;
  padding:20px;
  border-radius: 8px;
  text-align: center;
}

.group-title {
  color: #7cb3fc;
  margin-bottom: 8px;
}

.group-text {
  color: #e2e8f0;
  margin: 0;
}
@media  (max-width: 730px){
  .target-group {
    padding: 0 15px; /* Padding menor para dispositivos pequenos */
  }


.group {
  background-color: #1b2a3a;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin: 0  auto; /* Centraliza o grupo */
  max-width: 95%; /* Limita a largura máxima */
}

.group-title {
  color: #7cb3fc;
  margin-bottom: 10px;
}

.group-text {
  color: #e2e8f0;
  margin: 0;
}

}
`;



