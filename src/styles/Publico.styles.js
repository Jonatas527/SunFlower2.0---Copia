import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${props => props.theme.HomeCorFundo};
  color: #fff;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 40px;
`;

const TargetGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Group = styled.div`
  background-color: #1b2a3a;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const GroupTitle = styled.h2`
  color: #7cb3fc;
  margin-bottom: 10px;
`;

const GroupText = styled.p`
  color: #e2e8f0;
  margin: 0;
`;

export { Container, Title, TargetGroup, Group, GroupTitle, GroupText };
