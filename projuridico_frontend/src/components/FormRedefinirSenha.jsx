import React from 'react'
import {useState} from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
import "../styles/components/FormCadastro.css"
import { FaEye } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import "../styles/components/FormRedefinirSenha.css"



const FormRedefinirSenha = ({route}) => {
    const [uid, setUid] = useState("")
    const [token, setToken] = useState("")
    const [new_password, setNew_Password] = useState("")
    const [re_new_password, setRe_new_Password] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        setLoading(true)
        e.preventDefault()

        try {
            await api.post(route, {uid, token, new_password, re_new_password})
            console.log("Enviando dados do formulário para a redefinição de senha")
            navigate("/login")

          } catch (error){

            alert(error)

          } finally {

            setLoading(false)

          }
    }

  
  return (
        <form onSubmit={handleSubmit}  className="form-container">
            <div id='container-title-ajuda'>
              <div className='div-content' id='inv'>---</div>
              <h1 className='div-content' id='title-form'>Redefinição de senha</h1>
              <div className='div-content' class="dropdown" id='dropdown-ajuda'>
                  <button id='botao-ajuda' class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <IoIosHelpCircle id='icone' />
                  </button>
                  <ul class="dropdown-menu">
                    <li><a id='ajuda-text' class="dropdown-item" href="#">Ajuda</a></li>
                    <li><a class="dropdown-item" href="#">Uid - código de 3 letras</a></li>
                    <li><a class="dropdown-item" href="#">Token - conteúdo após a última '/' </a></li>
                  </ul>
              </div>
            </div>
            <div className='div-texto-form'>
             <p id='txt-redefinir-senha'>Utilize o UID  e o Token para validar suas credenciais, além de decidir qual será a sua nova senha!</p>
            </div>
            <input 
                type="text" 
                className="input email" 
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                placeholder="Uid"
            />
            <input 
                type="text" 
                className="input email" 
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Token"
            />
           <div className="container-senha">
                <input 
                    type={showPassword ? "text" : "password"}
                    className="input senha"
                    value={new_password}
                    onChange={(e) => setNew_Password(e.target.value)}
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
                    value={re_new_password}
                    onChange={(e) => setRe_new_Password(e.target.value)}
                    placeholder="Confirme sua nova senha"
                />
                <span 
                    className="olhinho"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEye/> : <FaEyeSlash/> }
                </span>
            </div>

            <button type="submit" className="botao-logar">
                Redefinir
            </button>
        </form>
  )
}

export default FormRedefinirSenha