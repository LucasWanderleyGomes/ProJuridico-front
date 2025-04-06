import React from 'react'

//  assets

import bolinhas from '../assets/bolinhas.png'
import { ImHammer2 } from "react-icons/im";
import bg from '../assets/background-forms.png'


//  components

import Form from '../components/Form'
import InfoLoginCadastro from '../components/InfoLoginCadastro';

//  styles 

import "../styles/Pages/Login.css"

const Login = () => {

  return (
    <main className='bg-style' style={{ backgroundImage: `url(${bg})` }}>
      <section className='content-section'>
        <InfoLoginCadastro />
        <div id='container-form'>
          <Form route="/api/v2/auth/jwt/create/" method="login" />
          <a href="#" id='link-esqueci'>Esqueci minha senha.</a>
          <div className="box-esqueci">
              <p className='criar-conta'>Não possui uma conta?</p>
              <a className='criar-conta' href="#"> Crie sua conta aqui.</a>
          </div>
        </div>
      </section>
    </main>
    
    
    
  )
}

export default Login