import MaiorEficiencia from "../assets/ImgBeneficios/MaiorEficiencia.png";
import MelhorDesempenho from "../assets/ImgBeneficios/melhorDesempenho.png";
import ProducaoEnergia from '../assets/ImgBeneficios/ProducaoDeEnergia.png';

import { CardsBeneficios } from "../styles/Beneficios.styles";
import TecAdaptativa from "../assets/ImgBeneficios/TecAdaptativa.png";
import OtimizacaoEspaco from "../assets/ImgBeneficios/OtimizacaoEspaco.png";

import { Link } from 'react-router-dom';




function Beneficios() {


  return (
    <CardsBeneficios id="Beneficios">
      <h2>Benefícios</h2>
 
      <div className="Titulo-cima">
          <h3>Melhor desempenho</h3>
          <h3>Maior eficiência </h3>
          <h3>Produção de energia</h3>
      </div>

      <div className="Parte-de-Cima">
        <Link to="/md "><img src={MelhorDesempenho} alt="Imagem de melhor desempeho" /></Link>
        <Link to="/me"><img src={MaiorEficiencia} alt="Imagem de Maior eficiência" /></Link>
        <Link to="/pe"><img src={ProducaoEnergia} alt="Imagem de Produção de Energia" /></Link>
      </div>

      <div className="Titulo-baixo">
          <h3>Tecnologia adaptativa</h3>
          <h3>Otimização de espaço</h3>
      </div>

      <div className="Parte-de-Baixo">
        <Link to="/te"><img src={TecAdaptativa} alt=" Imagem Tecnologia Adaptativa" /></Link>
        <Link to="/ot"><img src={OtimizacaoEspaco} alt="Imagem Otimização de Espaço" /></Link>
      </div>

    
      
    </CardsBeneficios>

  )
}

export default Beneficios