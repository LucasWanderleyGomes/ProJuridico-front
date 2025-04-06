import React from 'react'

// ASSETS 

import bolinhas from '../assets/bolinhas.png'
import { ImHammer2 } from "react-icons/im";

const InfoLoginCadastro = () => {
  return (
            <div>
              <div id='title-page'>
                <ImHammer2 id='icone-pj'/>
                <h1>ProJurídico</h1>
              </div>
              <p>Venha fazer parte da nossa comunidade e nos ajude a crescer</p>
              <p>Entre na sua conta para verificar os eventos mais próximos da sua região</p>
              <img src={bolinhas} alt="bolinhas de baixo" id='img-bolinhas' />
            </div>
  )
}

export default InfoLoginCadastro