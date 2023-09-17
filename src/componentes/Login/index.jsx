import React, { useState } from "react";

const Login = () => {

	const [username, setUsername] = useState()
	const [password, setPassword] = useState()
	const [userLogin, setUserLogin] = useState()
	const [passwordLogin, setPasswordLogin] = useState()

	const armazenar = (chave, valor) => {
		localStorage.setItem(chave, valor)
	}

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
			console.log("Usuario Logado com sucesso")
		} else {
			console.log("Vai dormir")
		}
	}


	return (
		<>
			<div className="login__container">
				<fieldset id="formulario">
					<legend>Cadastrar Usuario</legend>
					<fieldset class="box">
						<legend for="usuario">Usuario</legend>
						<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="usuario" placeholder="Digite seu usúario..." />
					</fieldset>
					<div class="box">
						<label for="campo1">Senha</label>
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="campo1" placeholder="Digite sua senha..." />
					</div>
					<button type="submit" onClick={() => armazenar(username, [username, password])} id="btnSubmit">Cadastrar</button>
				</fieldset>
			</div>
			<div>
				<fieldset id="formulario">
					<legend>Login</legend>
					<fieldset>
						<label for="login-usuario">Usuario</label>
						<input type="text" id="login-usuario" value={userLogin} onChange={(e) => setUserLogin(e.target.value)} placeholder="Digite seu usuario" />
					</fieldset>
					<fieldset>
						<label for="login-password">senha</label>
						<input type="password" id="login-password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} placeholder="digite sua senha" />
					</fieldset>
					<button type="submit" onClick={() => logar(userLogin, passwordLogin)} id="btnLogar">Logar</button>
				</fieldset>
			</div>
		</>
	)
}

export default Login