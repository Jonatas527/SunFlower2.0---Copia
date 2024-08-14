import { Integrantes } from '../styles/Grupo.styles';

import fundoG from '../assets/fundoGrupo.png';

import jonatas from '../assets/integantes/jonatas.jpg'
import joao from '../assets/integantes/joao.jpg'
import vinicius from '../assets/integantes/vinicius.jpg'

import face from '../assets/icones/face.png'
import link from '../assets/icones/link.png'
import insta from '../assets/icones/insta.png'

export function Grupo() {
    return (
        <Integrantes id='integrantes'>
            <div className="background" style={{ backgroundImage: `url(${fundoG})` }}></div>
            <h2 className="title">Integrantes:</h2>
            <div className="container">
                <div className="integrantes">
                    <div className="integrante">
                        <img src={jonatas} alt="Jônatas Siqueira" />
                        <h3>Jônatas Siqueira</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src={face} className="fab fa-facebook-f" alt="" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img src={link} className="fab fa-linkedin-in" alt="" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={insta} className="fab fa-instagram" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="integrante">
                        <img src={joao} alt="João Victor Rodrigues" />
                        <h3>João Victor Rodrigues</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src={face} className="fab fa-facebook-f" alt="" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img src={link} className="fab fa-linkedin-in" alt="" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={insta} className="fab fa-instagram" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="integrante">
                        <img src={vinicius} alt="Vinicius Paixão" />
                        <h3>Vinicius Paixão</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src={face} className="fab fa-facebook-f" alt="" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img src={link} className="fab fa-linkedin-in" alt="" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={insta} className="fab fa-instagram" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Integrantes>
    );
}

export default Grupo;
