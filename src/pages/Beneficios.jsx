import { Container } from '../styles/Beneficios.styles'

function Beneficios() {
  return (
    <Container>
      <div className="beneficios-container">
        <h2>Benefícios</h2>
        <div className="beneficios-grid">
          <div className="beneficio">
            <h3>Melhor desempenho</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Saiba Mais</button>
          </div>
          <div className="beneficio">
            <h3>Maior eficiência</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Saiba Mais</button>
          </div>
          <div className="beneficio">
            <h3>Produção de energia</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Saiba Mais</button>
          </div>
          <div className="beneficio">
            <h3>Tecnologia adaptativa</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Saiba Mais</button>
          </div>
          <div className="beneficio">
            <h3>Otimização de espaço</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Saiba Mais</button>
          </div>
        </div>
      </div>

    </Container>

  );
}

export default Beneficios;