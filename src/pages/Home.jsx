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
           <a href="#"> <li>Home</li></a>
           <a href="#"> <li> Público-alvo</li></a>
            <a href="#"><li> Benefícios</li></a>
            <a href=""><li>Peças</li></a>
            <a href="#"><li>Grupo</li></a>
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
