import React from 'react'
import FormCadastro from '../components/FormCadastro'

const Cadastro = () => {

  return (

    <FormCadastro route="/api/v2/auth/users/" method="register" />
    
  )
}

export default Cadastro