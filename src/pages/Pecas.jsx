import { Carrossel } from "../styles/Pecas.styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Arduino from "../assets/ImgCarrossel/Arduino.png";
import Jumpers from "../assets/ImgCarrossel/Jumpers.png";
import Ldr from "../assets/ImgCarrossel/LDR.png";
import PainelSolar from "../assets/ImgCarrossel/PainelSolar.png";
import Resistores from "../assets/ImgCarrossel/Resistores.png";
import Servomotores from "../assets/ImgCarrossel/Servomotores.png";





export default function Carossel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  
  
  return (
    <Carrossel id="Carrossel">
      <h2 id="pecas">Peças</h2>
      <div className="Carrossel">
        <Slider {...settings}>
          <div>
            <img src={Arduino} alt="Arduino" />
          </div>
          <div>
            <img src={Jumpers} alt="Jumpers" />
          </div>
          <div>
            <img src={Ldr} alt="LDR" />
          </div>
          <div>
            <img src={PainelSolar} alt="Painel Solar" />
          </div>
          <div>
            <img src={Resistores} alt="Resistores" />
          </div>
          <div>
            <img src={Servomotores} alt="Servomotores" />
          </div>
        </Slider>
      </div>

    </Carrossel>

  );
}

