import { Conteudo } from '../styles/Home.styles';
import { Video } from '../styles/Home.styles';
import fundo from '../assets/fundoHome.png';
import PHeader from './Header';
import videoPath from '../assets/ImgBenePage/video.mp4'; // Primeiro vídeo
import segundoVideoPath from '../assets/ImgBenePage/videoProjeto.mp4'; // Segundo vídeo

export function Home() {
  return (
    <Conteudo>
      <PHeader/>

      <div className="home" style={{ backgroundImage: `url(${fundo})` }}>
        <h1>Rastreador solar unidirecional de fluxo fotovoltaico</h1>
        <p>Rastreamento Solar Unilateral: Maximizando a Eficiência Energética para Sistemas Fotovoltaicos</p>
      </div>
      
      <ShortVideo src={videoPath} />
      <ShortVideo src={segundoVideoPath} /> {/* Usando a variável correta */}
    </Conteudo>
  );
}

const ShortVideo = ({ src }) => {
  return (
    <Video>
      <div className="short-video">
        <video width="750" height="420" controls>
          <source src={src} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>
    </Video>
  );
};
