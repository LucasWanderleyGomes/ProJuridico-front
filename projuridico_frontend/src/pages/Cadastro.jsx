import React from 'react'

// componentes

import FormCadastro from '../components/FormCadastro'
import InfoLoginCadastro from '../components/InfoLoginCadastro'
import bg from '../assets/background-forms.png'
import { Link } from 'react-router-dom'

// estilos

import "../styles/Pages/Login.css"

const Cadastro = () => {

  return (
  
    <main className='bg-style' style={{ backgroundImage: `url(${bg})` }}>
      <section className='content-section'>
        <InfoLoginCadastro title={"Venha fazer parte da nossa comunidade e nos ajude a crescer"} text={"Crie a sua conta para verificar os eventos mais próximos da sua região"}/>
        <div id='container-form'>
          <FormCadastro route="/api/v2/auth/users/" method="register" />
          <div className="box-esqueci">
              <p className='criar-conta'>Já possui uma conta?</p>
              <Link className='criar-conta' to="/login"> Entre na sua conta aqui.</Link>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Cadastro