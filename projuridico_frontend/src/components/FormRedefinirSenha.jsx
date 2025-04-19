import React from 'react'

const FormRedefinirSenha = () => {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [re_password, setRe_Password] = useState("")
    const [loading, setLoading] = useState(false)
  
  return (
    <form onSubmit={handleSubmit} className="form-container">
            <h1></h1>
            <input 
                type="text" 
                className="input email" 
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Nome"
            />
            <input 
                type="email" 
                className="input email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input 
                type="password" 
                className="input senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
            />
            <input 
                type="password" 
                className="input senha" 
                value={re_password}
                onChange={(e) => setRe_Password(e.target.value)}
                placeholder="Confirme sua senha"
            />

            <button type="submit" className="botao-logar">
                {titulo}
            </button>
        </form>
  )
}

export default FormRedefinirSenha