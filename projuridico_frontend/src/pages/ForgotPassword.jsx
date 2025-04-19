import React from 'react'

// components

import InfoLoginCadastro from '../components/InfoLoginCadastro'
import bg from "../assets/background-forms.png"
import FormCadastro from "../components/FormCadastro"
import { Link } from 'react-router-dom'
// styles

import "../styles/Pages/Login.css"
import "../styles/Pages/ForgotPassword.css"
import FormEsqueciSenha from '../components/FormEsqueciSenha'

const ForgotPassword = () => {
  return (
    <main className='bg-style' style={{ backgroundImage: `url(${bg})` }}>
      <section className='content-section'>
        <InfoLoginCadastro title={"Esqueceu sua senha?"} text={"Não se preocupe, iremos te ajudar a recuperar suas credenciais! "} />
        <div id='container-form'>
          <FormEsqueciSenha route="/api/v2/auth/users/reset_password/" />
          <div className="box-esqueci">
              <p className='criar-conta'>Já possui uma conta?</p>
              <Link className='criar-conta' to="/login"> Entre na sua conta aqui.</Link>
          </div>
        </div>
      </section>
    </main>


  )
}

export default ForgotPassword