import React from 'react'
import '../../styles/components/comunityStyles/InfoCom.css'

const InfoCom = () => {
  return (
    <div className='barra-de-info'>
        <div id='img-box'></div>
        <div className='container-infos'>
          <h3 id='title-info'>Informações complementares</h3>
          <div className='medidores-lateral'>
            <h4 className='titulo'>Comunidade</h4>
            <p className='content'>Comunidade Danielle Lucena</p>
          </div>
          <div className='medidores-lateral'>
            <h4 className='titulo'>Regras</h4>
            <p className='content'>Comunidade Danielle Lucena</p>
          </div>
          <div className='medidores-lateral'>
            <p className='content'>"Cultivar estados mentais positivos como a generosidade e a compaixão decididamente conduz à melhor saúde mental e à felicidade" - Dalai Lama. </p>
          </div>
        </div>
    </div>
  )
}

export default InfoCom