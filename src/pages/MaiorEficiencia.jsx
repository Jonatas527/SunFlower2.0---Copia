import { PageMelhorDesempenho } from "../styles/MelhorDesempenho.style";

import { StyledButton } from '../styles/MelhorDesempenho.style'

import ImgMaiorEficiecia from "../assets/ImgBenePage/MaiorEficienciaPageIMG.png";

import { Link } from 'react-router-dom';

export default function Melhoreficiencia() {
  return (
    <PageMelhorDesempenho>

      <main>

        <div className="Div-text">
          <h2>Maior eficiência </h2>
          <p>Como os rastreadores solares são projetados para manter os painéis solares perpendiculares aos raios solares durante todo o dia, eles são capazes de capturar uma quantidade significativamente maior de luz solar. Esse posicionamento otimizado permite que os painéis aproveitem ao máximo a energia solar disponível em qualquer momento do dia. </p>

        </div>

        <div className="img">
          <img src={ImgMaiorEficiecia} alt="" />
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