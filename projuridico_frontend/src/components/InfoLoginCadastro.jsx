import React from 'react'

// ASSETS 
import logo from '../assets/icone-projuridico.png'
import bolinhas from '../assets/bolinhas.png'
import { ImHammer2 } from "react-icons/im";

const InfoLoginCadastro = () => {
  return (
            <div className='container-infos'>

              <div id='title-page'>
                {/* <ImHammer2 id='icone-pj'/> */}
                <img src={logo} alt=""  id='icone-pj'/>
                <h1 id='h1-titulo'>ProJurídico</h1>
              </div>

              <div id='container-ps'>
                <p id='txt-1'>Venha fazer parte da nossa comunidade e nos ajude a crescer</p>
                <p id='txt-2'>Entre na sua conta para verificar os eventos mais próximos da sua região</p>
              </div>
              
              <img src={bolinhas} alt="bolinhas de baixo" id='img-bolinhas' />

            </div>
  )
}

export default InfoLoginCadastro