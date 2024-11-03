import { useState } from 'react';
import { GuiaM } from '../styles/Guia.styles';

const Guia = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <GuiaM id='Guia'>
      <h1 className="title">Guia de Utilização </h1>
      
      <div className="card-group">
        <div className={`card ${expandedCard === 0 ? 'expanded' : ''}`} onClick={() => toggleCard(0)}>
          <h2 className="card-title">Introdução</h2>
          <p className="card-text">
            Este guia fornece instruções detalhadas sobre a instalação, configuração e operação do rastreador solar unidirecional. Siga estas etapas para otimizar o desempenho do seu sistema e garantir a sua segurança.
          </p>
        </div>
        
        <div className={`card ${expandedCard === 1 ? 'expanded' : ''}`} onClick={() => toggleCard(1)}>
          <h2 className="card-title">Componentes</h2>
          <p className="card-text">
            O rastreador solar unidirecional inclui os seguintes componentes: painéis solares, motores, sensores de luz, controladores e suportes. Cada componente desempenha um papel crucial na eficiência e funcionalidade do sistema.
          </p>
        </div>

        <div className={`card ${expandedCard === 2 ? 'expanded' : ''}`} onClick={() => toggleCard(2)}>
          <h2 className="card-title">Instalação</h2>
          <p className="card-text">
            A instalação deve ser realizada em um local onde os painéis solares possam receber luz solar direta. Siga as instruções do fabricante para garantir uma instalação segura e eficaz.
          </p>
        </div>

        <div className={`card ${expandedCard === 3 ? 'expanded' : ''}`} onClick={() => toggleCard(3)}>
          <h2 className="card-title">Configuração</h2>
          <p className="card-text">
            Após a instalação, você deve configurar o controlador para otimizar a captação de energia. Consulte o manual para ajustes de ângulo e programação.
          </p>
        </div>

        <div className={`card ${expandedCard === 4 ? 'expanded' : ''}`} onClick={() => toggleCard(4)}>
          <h2 className="card-title">Manutenção</h2>
          <p className="card-text">
            Realize manutenções regulares, como limpeza dos painéis e verificação do funcionamento dos motores, para garantir o desempenho ideal do sistema.
          </p>
        </div>
      </div>
    </GuiaM>
  );
};

export default Guia;
