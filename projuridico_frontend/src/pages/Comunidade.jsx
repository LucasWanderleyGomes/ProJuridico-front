import React from 'react'
import Header from '../components/Header'
import NavCom from '../components/comunityComponents/NavCom'
import Posts from '../components/comunityComponents/Eventos'
import InfoCom from '../components/comunityComponents/InfoCom'
import FooterPages from '../components/FooterPages'
import DecoradorComunidade from '../components/comunityComponents/DecoradorComunidade'
import eventosgBg from "../assets/capa-eventos.png"


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
          
         <div className='container-eventos'>
          <section className='informativos-eventos'>
            <DecoradorComunidade img={eventosgBg} titulo={"Eventos"} texto={"Seja muito bem-vindo(a) à nossa página de Eventos! Aqui é o ponto de encontro para você ficar por dentro de tudo o que acontece e para compartilhar os seus próprios eventos com a nossa comunidade."}/>
            
          </section>
          <Posts/>
         </div>
          
          
        </section>
       
        <FooterPages/>
    </div>
  )
}

export default Comunidade