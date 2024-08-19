import MaiorEficiencia from "../assets/ImgBeneficios/MaiorEficiencia.png";
import MelhorDesempenho from "../assets/ImgBeneficios/melhorDesempenho.png";
import ProducaoEnergia from '../assets/ImgBeneficios/ProducaoDeEnergia.png';
import TecAdaptativa from "../assets/ImgBeneficios/TecAdaptativa.png";
import OtimizacaoEspaco from "../assets/ImgBeneficios/OtimizacaoEspaco.png";
import { CardsBeneficios } from "../styles/Beneficios.styles";
import { Link } from 'react-router-dom';

function Beneficios() {
  return (
    <CardsBeneficios id="Beneficios">
      <h2>Benefícios</h2>
      <div className="Titulo-cima">
        <div className="TitleWrapper">
          <h3>Melhor desempenho</h3>
          <Link to="/md"><img src={MelhorDesempenho} alt="Imagem de melhor desempenho" /></Link>
        </div>
        <div className="TitleWrapper">
          <h3>Maior eficiência </h3>
          <Link to="/me"><img src={MaiorEficiencia} alt="Imagem de Maior eficiência" /></Link>
        </div>
        <div className="TitleWrapper">
          <h3>Produção de energia</h3>
          <Link to="/pe"><img src={ProducaoEnergia} alt="Imagem de Produção de Energia" /></Link>
        </div>
      </div>
      <div className="Titulo-baixo">
        <div className="TitleWrapper">
          <h3>Tecnologia adaptativa</h3>
          <Link to="/te"><img src={TecAdaptativa} alt="Imagem Tecnologia Adaptativa" /></Link>
        </div>
        <div className="TitleWrapper">
          <h3>Otimização de espaço</h3>
          <Link to="/ot"><img src={OtimizacaoEspaco} alt="Imagem Otimização de Espaço" /></Link>
        </div>
      </div>
    </CardsBeneficios>
  )
}

export default Beneficios;
