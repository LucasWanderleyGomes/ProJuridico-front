import React from 'react'
import '../../styles/components/comunityStyles/DecoradorCom.css'

const DecoradorComunidade = ({img, titulo, texto}) => {
  return (
    <div className='decorador-comunidade' >
        <div id='div-imagem' style={{ backgroundImage: `url(${img})`}}> 

        </div>
        <div id='infos-txt-decorador'>
            <h2 id='titulo-decorador-com'>{titulo}</h2>
            <p>@Danielle Lucena</p>
            <p>{texto}</p>
        </div>
      
    </div>
  )
}

export default DecoradorComunidade