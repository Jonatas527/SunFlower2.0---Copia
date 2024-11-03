


import { GuiaM } from '../styles/Guia.styles';
import Slider from "react-slick"; // Importando o Slider do react-slick

const Guia = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <GuiaM id='Guia'>
      <h1 className="title">Guia de Utilização</h1>
      <Slider {...settings}>
        <div className="card">
          <h2 className="card-title">Introdução</h2>
          <p className="card-text">
            Este guia fornece instruções detalhadas sobre a instalação, configuração e operação do rastreador solar unidirecional. Siga estas etapas para otimizar o desempenho do seu sistema e garantir a sua segurança.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Componentes</h2>
          <p className="card-text">
            O rastreador solar unidirecional inclui os seguintes componentes: painéis solares, motores, sensores de luz, controladores e estrutura de suporte.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Instalação</h2>
          <ol className="card-list">
            <li>Monte os painéis solares na estrutura de suporte.</li>
            <li>Conecte os motores aos painéis solares.</li>
            <li>Instale os sensores de luz nas posições apropriadas.</li>
            <li>Conecte o controlador ao sistema e verifique as conexões elétricas.</li>
          </ol>
        </div>
        <div className="card">
          <h2 className="card-title">Operação</h2>
          <p className="card-text">
            Após a configuração, o rastreador solar ajustará automaticamente a posição dos painéis solares para maximizar a captação de luz solar. Monitore o sistema periodicamente e faça ajustes manuais, se necessário.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Manutenção</h2>
          <ol className="card-list">
            <li>Limpe os painéis solares regularmente para remover poeira e detritos.</li>
            <li>Verifique os motores e sensores periodicamente para garantir que estão funcionando corretamente.</li>
            <li>Faça uma inspeção anual completa do sistema.</li>
          </ol>
        </div>
        <div className="card">
          <h2 className="card-title">Recursos Adicionais</h2>
          <p className="card-text">
            Para mais informações, consulte os seguintes recursos:<br />
            <a href="manual.pdf">Manual do Fabricante</a><br />
            <a href="tutorial_video.mp4">Vídeo Tutorial</a>
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Conclusão e Contato</h2>
          <p className="card-text">
            Este guia ajudou você a entender e utilizar o rastreador solar unidirecional. Para suporte adicional, entre em contato através de <a href="mailto:support@example.com">support@example.com</a>.
          </p>
        </div>
      </Slider>
    </GuiaM>
  );
};

export default Guia;