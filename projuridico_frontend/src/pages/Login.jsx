import React from 'react'
import Form from '../components/Form'

const Login = () => {

  return (

    
    <Form route="/api/v2/auth/jwt/create/" method="login" />
    
  )
}

export default Login