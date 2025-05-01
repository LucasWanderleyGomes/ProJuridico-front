import React from 'react'
import Header from '../components/Header'
import NavCom from '../components/comunityComponents/NavCom'
import Posts from '../components/comunityComponents/Eventos'
import InfoCom from '../components/comunityComponents/InfoCom'


import '../styles/Pages/Comunidade.css'

const Comunidade = () => {



  return (
    <div className='content-comunidade'>
        <Header/>
        <section id='padding-nav'>        
        </section>
        <section className="main-content-section">
          <div className='left-content-info'>
            <NavCom/>
            <InfoCom/>
          </div>
          
         <div>
          <Posts/>
         </div>
          
          
        </section>
       
        
    </div>
  )
}

export default Comunidade