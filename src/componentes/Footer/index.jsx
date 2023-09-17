import { } from "react";
import './Footer.css'
import MapaRodape from '../../assets/mapa-rodape.png'
import facebook from '../../assets/icons8-facebook-50.png'
import instagram from '../../assets/icons8-instagram-50.png'
import tiktok from '../../assets/icons8-tiktok-50.png'
import whatsapp from '../../assets/icons8-whatsapp-50.png'

const Footer = () => {

  return (
    <>
      <div className="rodape">
          <div className="textos-social">
            <div className="textos">
              <h1>Contato</h1>
              <p>Av. Paulista, 1106 -
                Bela Vista, São Paulo - SP, 01311-000</p>
            </div>
            <div className="redes-sociais">
              <a href="https://www.facebook.com/fiap?ref=embed_page" target="blank">
                <img className="rede-social" src={facebook} alt="" />
              </a>
              <a href="https://www.instagram.com/" target="blank">
                <img className="rede-social" src={instagram} alt="" />
              </a>
              <a href="https://www.tiktok.com/pt-BR/" target="blank">
                <img className="rede-social" src={tiktok} alt="" />
              </a>
              <a href="https://web.whatsapp.com/" target="blank">
                <img className="rede-social" src={whatsapp} alt="" />
              </a>
            </div>
          </div>
          <img className="Img-Rodape" src={MapaRodape} alt="Onde nos encontrar" />
      </div>
    </>
  )

}

export default Footer