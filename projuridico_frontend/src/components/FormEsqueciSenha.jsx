import {useState} from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants"
import "../styles/components/FormCadastro.css"

const FormEsqueciSenha = ({route}) => {
   const [email, setEmail] = useState("")
   const navigate = useNavigate()
   const [loading, setLoading] = useState(false)

   const handleSubmit = async(e) =>{
        setLoading(true)
        e.preventDefault()

        try{

            await api.post(route, {email})
            console.log("Requisição enviada ")
            navigate("/confirm-credencials")
        
            
        } catch (error) {
            alert(error)

        } finally {
            setLoading(false)
        }

    }

  return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Redefinição de senha</h1>
            <p>Informe seu email cadastrado na plataforma, para que passamos ajudá-lo(a) na recuperação da sua senha!</p>
            <input 
                id="input-email-forgot"
                type="text" 
                className="input email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button type="submit" className="botao-logar">
                Enviar
            </button>
        </form>
  )
}

export default FormEsqueciSenha