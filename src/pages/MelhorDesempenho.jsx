import { PageMelhorDesempenho } from "../styles/MelhorDesempenho.style";

import { StyledButton } from '../styles/MelhorDesempenho.style'

import ImgMlrDesempenho from "../assets/ImgBenePage/MelhorDesempenhoPageIMG.png";

import { Link } from 'react-router-dom';


export function MelhorDesempenho() {
  return (
    
    <PageMelhorDesempenho>
      
      <main>

        <div className="Div-text">
          <h2>Melhor desempenho</h2>
          <p>Rastreadores solares são dispositivos que podem ajustar continuamente a posição dos painéis solares para otimizar a captação de luz, mesmo em dias nublados ou em condições de pouca luminosidade. Essa capacidade de ajuste dinâmico permite que os painéis permaneçam na melhor orientação possível em relação ao sol, melhorando significativamente a produção de energia em uma ampla variedade de condições climáticas. Ao adaptarem a inclinação e a direção dos painéis de acordo com a variação da luz solar disponível, esses rastreadores garantem uma eficiência energética aprimorada, contribuindo para uma geração de energia mais constante e robusta</p>

        </div>

        <div className="img">
          <img src={ImgMlrDesempenho} alt="" />
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
