import React from 'react'

// componentes

import FormCadastro from '../components/FormCadastro'
import InfoLoginCadastro from '../components/InfoLoginCadastro'
import bg from '../assets/background-forms.png'

// estilos

import "../styles/Pages/Login.css"

const Cadastro = () => {

  return (
  
    <main className='bg-style' style={{ backgroundImage: `url(${bg})` }}>
      <section className='content-section'>
        <InfoLoginCadastro />
        <div id='container-form'>
          <FormCadastro route="/api/v2/auth/users/" method="register" />
          <div className="box-esqueci">
              <p className='criar-conta'>Já possui uma conta?</p>
              <a className='criar-conta' href="#"> Entre na sua conta aqui.</a>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Cadastro