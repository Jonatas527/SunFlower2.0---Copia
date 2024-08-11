import { HeaderHome } from "../styles/Home.styles";
import logoImg from "../assets/logoSunflower.png";

export default function Header() {
  return (
    <HeaderHome>
      <header>
        <nav>
          <img src={logoImg} className="logo" alt="Logo da SunFlower" />
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Público-alvo</li></a>
            <a href="#"><li>Benefícios</li></a>
            <a href="#"><li>Peças</li></a>
            <a href="#"><li>Grupo</li></a>
          </ul>
        </nav>
      </header>
  </HeaderHome>
  )
}
