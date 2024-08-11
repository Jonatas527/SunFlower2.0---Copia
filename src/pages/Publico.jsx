import { Container, Title, TargetGroup, Group, GroupTitle, GroupText } from '../styles/PublicoAlvo.styles';

const Publi = () => {
  return (
    <Container>
      <Title>Público-alvo</Title>
      <TargetGroup>
        <Group>
          <GroupTitle>Empresas:</GroupTitle>
          <GroupText>
            Empresas e indústrias que visam reduzir seus custos com energia e melhorar sua pegada ambiental.
          </GroupText>
        </Group>
        <Group>
          <GroupTitle>Investidores:</GroupTitle>
          <GroupText>
            Investidores interessados em soluções inovadoras de geração de energia renovável.
          </GroupText>
        </Group>
      </TargetGroup>
    </Container>
  );
};

export default Publi;
