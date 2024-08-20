import { PageMelhorDesempenho } from "../styles/MelhorDesempenho.style";

import { StyledButton } from '../styles/MelhorDesempenho.style'

import ProdEnergia from "../assets/ImgBenePage/ProducaoEnergiaPageIMG.png";

import { Link } from 'react-router-dom';
import PHeader from "./Header";

export default function Melhoreficiencia() {
  return (
    <PageMelhorDesempenho>
      <PHeader />

      <main>

        <div className="Div-text">
          <h2> produção de energia</h2>
          <p>A produção de energia pode ser aumentada em até 25-35% em comparação com sistemas fixos, que permanecem estáticos e não conseguem ajustar seu ângulo de acordo com a posição do sol. Esse aumento na eficiência torna os rastreadores solares uma opção altamente eficaz para maximizar a geração de energia e melhorar o retorno sobre o investimento em sistemas solares fotovoltaicos.</p>

        </div>

        <div className="img">
          <img src={ProdEnergia} alt="" />
        </div>
        <Link to="/">
          <StyledButton>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Voltar 
          </StyledButton>
        </Link>

      </main>


    </PageMelhorDesempenho>

  )
}