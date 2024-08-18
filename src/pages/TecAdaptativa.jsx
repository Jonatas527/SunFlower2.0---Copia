import { PageMelhorDesempenho } from "../styles/MelhorDesempenho.style";

import { StyledButton } from '../styles/MelhorDesempenho.style'

import TecAdaptativa from "../assets/ImgBenePage/TecAdaptativaPageIMG.png";

import { Link } from 'react-router-dom';

export default function Melhoreficiencia() {
  return (
    <PageMelhorDesempenho>

      <main>

        <div className="Div-text">
          <h2>Tecnologia adaptativa</h2>
          <p>Alguns sistemas de rastreamento solar utilizam algoritmos avançados e sensores sofisticados para ajustar automaticamente a posição dos painéis solares. Esses algoritmos analisam continuamente a posição do sol e as condições ambientais para garantir que os painéis estejam sempre na melhor orientação possível. Os sensores monitoram fatores como intensidade da luz e direção dos raios solares, permitindo ajustes em tempo real que maximizam a eficiência da captação de energia. Dessa forma, esses sistemas inteligentes garantem a máxima eficiência na produção de energia, adaptando-se rapidamente às mudanças nas condições meteorológicas e na posição do sol ao longo do dia.</p>

        </div>

        <div className="img">
          <img src={TecAdaptativa} alt="" />
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