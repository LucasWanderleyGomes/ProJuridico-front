import {useState} from "react"

// utilidades 
import api from "../api"
import { useNavigate } from "react-router-dom"
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants"

// estilos
import "../styles/components/Form.css"

// componentes
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Form = ({route, method}) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

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
            <h1 id="titulo-formulario">Bem vindo de volta!</h1>
            <p id="texto-formulario">Entre com suas credenciais</p>
            <input 
                type="email" 
                className="input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <div className="container-senha">
                <input 
                    type={showPassword ? "text" : "password"}
                    className="input senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                />
                <span 
                    className="olhinho"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEye/> : <FaEyeSlash/> }
                </span>
            </div>
            <button type="submit" className="botao-logar">
                Entrar
            </button>
        </form>
    )
}

export default Form