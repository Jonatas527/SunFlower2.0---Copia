import { Container } from '../styles/Publico.styles';

const Publi = () => {
  return (
    <Container id='publico'>
      
      <h1 className="title">Público-alvo</h1>
      <div className="target-group">
        <div className="group">
          <h2 className="group-title">Empresas:</h2>
          <p className="group-text">
            Empresas e indústrias que visam reduzir seus custos com energia e melhorar sua pegada ambiental.
          </p>
        </div>
        <div className="group">
          <h2 className="group-title">Investidores:</h2>
          <p className="group-text">
            Investidores interessados em soluções inovadoras de geração de energia renovável.
          </p>
        </div>
      </div>
    </Container >
  );
};

export default Publi;
