import { } from 'react'
import './Cadastro.css'
import Ilustracao from '../../assets/ilustracao-alerta.jpg'

// const emailInput = document.getElementById("email");
// const span = document.getElementById("spanEmail");
// const email = emailInput.value;
// const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;



// function validarEmail() {

    
//     if (regex.test(email)) {
//     }
//     else {
//         emailInput.style.border = '2px solid #e63636';
//         span.style.display = 'block';
//         span.style.fontSize = '12px';
//         span.style.color = '#e63636';
//         span.style.textAlign = 'center';
//         span.style.marginBottom = '4px';
//     }
// }

// emailInput.addEventListener('click', validarEmail())

const Cadastro = () => {
    return (
        <>
            <container className='cadastro__container'>
                <div className='cadastro__title'>
                    
                    <img src={Ilustracao} alt="" />
                </div>
                <form id="form">
                    <h2 >Cadastre-se para receber as novidades</h2>
                    <div>
                        <div id="texto">
                            <label for="nome">Nome</label>
                            <input id="nome" type="text" name="nome" placeholder="Insira seu Nome" minlength="3" required />
                            <span id="spanNome">Insira um Nome válido</span>
                        </div>
                        <div id="texto">
                            <label for="email">E-mail</label>
                            <input id="email" type="email" name="email" placeholder="Insira seu E-mail" required />
                            <span id="spanEmail">Insira um E-mail válido</span>
                        </div>
                    </div>
                    <div className="checkbox">
                        <div>
                            <input id="politicas" type="checkbox" name="politicas" required />
                            <label for="politicas">Confirmo que li e aceito as Políticas de Privacidade da InfoAir</label>
                        </div>
                        <div>
                            <input id="notificacao" type="checkbox" name="notificacao" required />
                            <label for="notificacao">Concordo em receber atualizações sobre a InfoAir via E-mail</label>
                        </div>
                    </div>
                    <input type="submit" value="Enviar" id="botao" onclick="validarEmail()" />
                </form>
            </container>
        </>
    )
}

export default Cadastro

