import { Conteudo } from '../styles/Home.styles';
import { Video } from '../styles/Home.styles';
import fundo from '../assets/fundoHome.png';
import PHeader from './Header';
import videoPath from '../assets/ImgBenePage/video.mp4'; // Primeiro vídeo
import segundoVideoPath from '../assets/ImgBenePage/videoProjeto.mp4'; // Segundo vídeo

export function Home() {
  return (
    <Conteudo>
      <PHeader />

      <div className="home" style={{ backgroundImage: `url(${fundo})` }}>
        <h1>Rastreador solar unidirecional de fluxo fotovoltaico</h1>
        <p>Rastreamento Solar Unilateral: Maximizando a Eficiência Energética para Sistemas Fotovoltaicos</p>
      </div>


      <ShortVideo src={segundoVideoPath} />

      
    </Conteudo>
  );
}

const ShortVideo = ({ src }) => {
  return (
    
      <Video>

      <h2 className='h2-titulos-video'>Vídeo do Projeto</h2>
       
      <iframe width="800" height="400" src="https://www.youtube.com/embed/i3BokEY9fbY?si=WzRnTlneJQN_kelh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <h2 className='h2-titulos-video'>Vídeo do Jogo </h2>

      <iframe width="800" height="400" src="https://www.youtube.com/embed/Stbruw3aTXI?si=m9xuicVk9PhEXBRf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Video>
    
  );
};
