import MaiorEficiencia from "../assets/ImgBeneficios/MaiorEficiencia.png";
import MelhorDesempenho from "../assets/ImgBeneficios/melhorDesempenho.png";
import ProducaoEnergia from '../assets/ImgBeneficios/ProducaoDeEnergia.png';

import { CardsBeneficios } from "../styles/Beneficios.styles";
import TecAdaptativa from "../assets/ImgBeneficios/TecAdaptativa.png";
import OtimizacaoEspaco from "../assets/ImgBeneficios/OtimizacaoEspaco.png";

function Beneficios() {
  return (
    <CardsBeneficios>
      <h2>Benefícios</h2>

      <div className="Parte-de-Cima">

        <section><img src={MelhorDesempenho} alt="Imagem de melhor desempeho" /></section>
        <section><img src={MaiorEficiencia} alt="Imagem de Maior eficiência" /></section>
        <section><img src={ProducaoEnergia} alt="Imagem de Produção de Energia" /></section>
      </div>

      <div className="Parte-de-Baixo">
        <section><img src={TecAdaptativa} alt=" Imagem Tecnologia Adaptativa" /></section>
        <section><img src={OtimizacaoEspaco} alt="Imagem Otimização de Espaço" /></section>
      </div>


    </CardsBeneficios>

  )
}

export default Beneficios