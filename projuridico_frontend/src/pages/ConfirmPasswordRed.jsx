import React from 'react'
import FormRedefinirSenha from '../components/FormRedefinirSenha'
import "../styles/Pages/Login.css"
import { Link } from 'react-router-dom'
import InfoLoginCadastro from '../components/InfoLoginCadastro'
import bg from '../assets/background-forms.png'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const ConfirmPasswordRed = () => {
  return (
  <main className='bg-style' style={{ backgroundImage: `url(${bg})` }}>
    <section className='content-section'>
      <InfoLoginCadastro title={"Redefinição de senha"} text={"Estamos quase lá! Utilize os recursos necessários para recuperar o acesso a sua conta"}/>
      <div id='container-form'>
        <FormRedefinirSenha route="/api/v2/auth/users/reset_password_confirm/"  />
        <div className="box-esqueci">
            <p className='criar-conta'>Não possui uma conta?</p>
            <Link className='criar-conta' to="/cadastro"> Crie sua conta aqui.</Link>
        </div>
      </div>
    </section>
  </main>
  )
}

export default ConfirmPasswordRed