import { HeaderHome } from "../styles/Home.styles"

import logoImg from "../assets/logoSunflower.png"
import fundo from "../assets/fundoHome.jpg"


export function Home() {
  return (
    <HeaderHome>

      <header>
        <nav>
          <img src={logoImg} className="logo" alt="Logo da SunFlower" />
          <ul>
            <li>Home</li>
            <li>Benefícios</li>
            <li>Peças</li>
            <li>Público-alvo</li>
            <li>Grupo</li>
          </ul>
        </nav>
      </header>
      <div className="home" style={{backgroundImage: `url(${fundo})`}}>

        <h1>Rastreador solar unidirecional de fluxo fotovoltaico</h1>
        <p>Rastreamento Solar Unilateral: Maximizando a Eficiência Energética para Sistemas Fotovoltaicos</p>

      </div>

    </HeaderHome>

  )
}
