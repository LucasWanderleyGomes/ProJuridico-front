import React from 'react'

// ASSETS 
import logo from '../assets/icone-projuridico.png'
import bolinhas from '../assets/bolinhas.png'
import { ImHammer2 } from "react-icons/im";
import {Link} from "react-router-dom"



const InfoLoginCadastro = ({title, text}) => {

  const handleAddInfo = () =>{
    if (title && text){
      return (
          <div className='container-infos'>
              <div id='title-page'>

                <img src={logo} alt=""  id='icone-pj'/>
                <Link to="/" id='h1-titulo'>ProJurídico</Link>
                
              </div>

              <div id='container-ps'>
                <p id='txt-1'>{title}</p>
                <p id='txt-2'>{text}</p>
              </div>
              
              <img src={bolinhas} alt="bolinhas de baixo" id='img-bolinhas' />

          </div>
      )} else {
        return (
          <div className='container-infos'>
            <div id='title-page'>
              {/* <ImHammer2 id='icone-pj'/> */}
              <img src={logo} alt=""  id='icone-pj'/>
              <Link to="/" id='h1-titulo'>ProJurídico</Link>
              
            </div>

            <div id='container-ps'>
              <p id='txt-1'>Venha fazer parte da nossa comunidade e nos ajude a crescer</p>
              <p id='txt-2'>Entre na sua conta para verificar os eventos mais próximos da sua região</p>
            </div>
            
            <img src={bolinhas} alt="bolinhas de baixo" id='img-bolinhas' />

          </div>
        );
        
      }
    
  }

  return (
      handleAddInfo()  
  )
}

export default InfoLoginCadastro