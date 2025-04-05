import {useState} from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants"

const Form = ({route, method}) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const titulo = method === "login" ? "Login" : "Register"

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return(
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{titulo}</h1>
            <input 
                type="email" 
                className="input email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                 />

        </form>
    )
}

export default Form