import {useState} from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants"
import "../styles/components/Form.css"

const Form = ({route, method}) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

   

    const handleSubmit = async(e) =>{
        setLoading(true)
        e.preventDefault()

        try{

            const response = await api.post(route, { email, password })
            if ( method==="login" ){
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
            
        } catch (error) {
            alert(error)

        } finally {
            setLoading(false)
        }

    }
    return(
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Bem vindo de volta</h1>
            <p>Entre com suas credenciais</p>
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
            <button type="submit" className="botao-logar">
                Entrar
            </button>
        </form>
    )
}

export default Form