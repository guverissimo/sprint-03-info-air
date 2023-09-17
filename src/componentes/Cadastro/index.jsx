import { useState } from 'react'
import './Cadastro.css'
import Ilustracao from '../../assets/ilustracao-alerta.jpg'
import cadastradoImg from '../../assets/cadastrado.jpg'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Cadastro = () => {
    
    const [username, setUsername] = useState()
	const [password, setPassword] = useState()

    const armazenar = (chave, valor) => {
        event.preventDefault();
        
		localStorage.setItem(chave, valor)
        
        if(username != password){
            Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Cadastrado com sucesso!',
				showConfirmButton: false,
				timer: 1500
			})
        } else {
            Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Digite a senha diferente do nome de usuario!',
			  })
        }
	}

    console.log(username)
    return (
        <>
            <container className='cadastro__container'>
                <form id="form">
                    <h2 >Cadastre-se para receber as novidades</h2>
                    <img className='form-img' src={Ilustracao} alt="" />
                    <div>
                        <div id="texto">
                            <label for="nome">Cadastre um usuário</label>
                            <input id="nome" value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="nome" placeholder="Insira seu Nome" minlength="3" required />
                            <span id="spanNome">Insira um Nome válido</span>
                        </div>
                        <div id="texto">
                            <label for="senha">Cadastre uma senha</label>
                            <input id="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="senha" placeholder="Insira sua senha" required />
                            <span id="spanEmail">Insira uma senha</span>
                        </div>
                    </div>
                    <div className="checkbox">
                        <div className='chebox-box'>
                            <input id="politicas" type="checkbox" name="politicas" required />
                            <label for="politicas">Confirmo que li e aceito as Políticas de Privacidade da InfoAir</label>
                        </div>
                        <div className='chebox-box'>
                            <input id="notificacao" type="checkbox" name="notificacao" required />
                            <label for="notificacao">Concordo em receber atualizações sobre a InfoAir via E-mail</label>
                        </div>
                    </div>
                    <input type="submit"  onClick={() => armazenar(username, [username, password])} id="botao" onclick="validarEmail()" />
                </form>
            </container>
        </>
    )
}

export default Cadastro

