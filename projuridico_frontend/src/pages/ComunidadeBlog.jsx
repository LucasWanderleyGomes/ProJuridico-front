import React from 'react'
import Header from '../components/Header'
import NavCom from '../components/comunityComponents/NavCom'
import InfoCom from '../components/comunityComponents/InfoCom'
import BlogPosts from '../components/comunityComponents/BlogPosts'
import FooterPages from '../components/FooterPages'
import DecoradorComunidade from '../components/comunityComponents/DecoradorComunidade'
import blogBg from "../assets/capa-blog.png"

// BOTAO DE SUBIR PRO TOPO LA

import BotScrollUp from '../components/BotScrollUp';

import '../styles/Pages/Comunidade.css'
import '../styles/Pages/ComunidadeBlog.css'
const ComunidadeBlog = () => {
    return (
        
        <div className='content-comunidade'>
            <Header/>
            <section className="main-content-section">
                <div className='left-content-info'>
                    <NavCom/>
                    <InfoCom/>
                </div>
                
                <div className='container-eventos'>
                    <section className='informativos-eventos'>
                        <DecoradorComunidade img={blogBg} titulo={"Blog"} texto={"Seja bem-vindo(a) ao nosso Blog! Este é o seu espaço para compartilhar o dia a dia, os momentos especiais e as experiências que tornam a sua vida única. Feito por nós e para nós. Quanto mais a gente compartilhar, mais rica e divertida a nossa comunidade se torna."}/>
                    </section>
                    <BlogPosts/>
                </div>
                
            
            </section>
        
            <FooterPages/>
             <BotScrollUp/>
        </div>
    )
}

export default ComunidadeBlog