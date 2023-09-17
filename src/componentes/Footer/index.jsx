import { } from "react";
import './Footer.css'
import MapaRodape from '../../assets/mapa-rodape.png'
import facebook from '../../assets/icons8-facebook-50.png'
import instagram from '../../assets/icons8-instagram-50.png'
import tiktok from '../../assets/icons8-tiktok-50.png'
import whatsapp from '../../assets/icons8-whatsapp-50.png'
import GoogleMaps from "./GoogleMapa";

const Footer = () => {

  return (
    <>
      <div className="rodape">
          <div className="textos-social">
            <div className="textos">
              <h1>Onde nos encontrar?</h1>
              <p>Av. Paulista, 1106 -
                Bela Vista, São Paulo - SP, 01311-000</p>
            </div>
            <div className="redes-sociais">
              <img className="rede-social" src={facebook} alt="" />
              <img className="rede-social" src={instagram} alt="" />
              <img className="rede-social" src={tiktok} alt="" />
              <img className="rede-social" src={whatsapp} alt="" />
            </div>
          </div>
          <img className="Img-Rodape" src={MapaRodape} alt="Onde nos encontrar" />
      </div>
    </>
  )

}

export default Footer