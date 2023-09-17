import React, { useState } from "react";
import LoginImg from '../../assets/login.jpg'
import ContrucaoImg from '../../assets/construcao.png'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './Login.css'

import { BsDoorClosed } from "react-icons/bs";

const Login = () => {

	const [userLogin, setUserLogin] = useState()
	const [passwordLogin, setPasswordLogin] = useState()

	const [isLogado, setIsLogado] = useState(false);

	const validarUsuario = (chave) => {
		const pegarDados = localStorage.getItem(chave, JSON.stringify(chave));
		const resultado = pegarDados.split(',')
		const user = resultado[0];

		return user
	}

	function validarSenha(chave) {
		const getDado = localStorage.getItem(chave, JSON.stringify(chave))
		const resultado = getDado.split(',')
		const senha = resultado[1]
		return senha
	}

	function logar(userLogin, passwordLogin) {
		event.preventDefault();

		if (userLogin == validarUsuario(userLogin) && passwordLogin == validarSenha(userLogin)) {
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Logado com sucesso!',
				showConfirmButton: false,
				timer: 1500

			})
			setIsLogado(true)
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Credenciais incorretas!',
			})
		}
	}

	if (!isLogado) {
		return (
			<>
				<container className='cadastro__container'>
					<form id="form">
						<h2>Login</h2>
						<p>Certifique-se que você fez seu cadastro!</p>
						<img className='form-img' src={LoginImg} alt="" />
						<div>
							<div id="texto">
								<label for="nome">Usuario</label>
								<input id="nome" value={userLogin} onChange={(e) => setUserLogin(e.target.value)} type="text" name="nome" placeholder="Insira seu Nome" minlength="3" required />
								<span id="spanNome">Insira seu usuário </span>
							</div>
							<div id="texto">
								<label for="senha">Senha</label>
								<input id="senha" type="password" vvalue={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} name="senha" placeholder="Insira sua senha" required />
								<span id="spanEmail">Insira sua senha senha</span>
							</div>
						</div>
						<input type="submit" onClick={() => logar(userLogin, passwordLogin)} id="botao" />
					</form>
				</container>
			</>
		)
	}



	return (
		<section className="logged">
			<div className="topo">
				<button onClick={() => setIsLogado(false)}>
					<div className="closebtn">
						<BsDoorClosed />
						<p>Sair</p>
					</div>
				</button>
			</div>
			<h1>Bem-vindo, <span>{userLogin}</span>!</h1>
			<div className="construcao">
				<div className="construcao-textos">
					<h2>Oops..</h2>
					<h4>Ainda não temos nada por aqui! <br />
						Avisaremos assim que houver novidades!</h4>
				</div>
				<img className="construcao-img" src={ContrucaoImg} alt="Desenho de uma construcao" />
			</div>
		</section>
	)

}

export default Login