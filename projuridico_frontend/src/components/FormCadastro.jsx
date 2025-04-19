import {useState} from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants"
import "../styles/components/FormCadastro.css"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const FormCadastro = ({route, method}) =>{
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [re_password, setRe_Password] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const titulo = method === "login" ? "Entrar" : "Cadastrar"

    const handleSubmit = async(e) =>{
        setLoading(true)
        e.preventDefault()

        try{

            const response = await api.post(route, { username, email, password, re_password })
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
            <h1>{titulo}</h1>
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
            <div className="container-senha">
                <input 
                    type={showPassword ? "text" : "password"}
                    className="input senha"
                    value={re_password}
                    onChange={(e) => setRe_Password(e.target.value)}
                    placeholder="Confirme sua senha"
                />
                <span 
                    className="olhinho"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEye/> : <FaEyeSlash/> }
                </span>
            </div>

            <button type="submit" className="botao-logar">
                {titulo}
            </button>
        </form>
    )
}

export default FormCadastro