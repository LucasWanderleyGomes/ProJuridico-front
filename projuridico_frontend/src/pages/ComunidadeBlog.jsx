import React from 'react'
import Header from '../components/Header'
import NavCom from '../components/comunityComponents/NavCom'
import InfoCom from '../components/comunityComponents/InfoCom'
import BlogPosts from '../components/comunityComponents/BlogPosts'
import FooterPages from '../components/FooterPages'

import '../styles/Pages/Comunidade.css'
import '../styles/Pages/ComunidadeBlog.css'
const ComunidadeBlog = () => {
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
                    {/* <section className='informativos-eventos'>
                        <h2>Postagens da Comunidade</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad consectetur alias sint delectus, temporibus qui tenetur deserunt. Labore suscipit inventore nesciunt aut numquam ex, impedit neque? Cumque, tenetur voluptatum.</p>
                    </section> */}
                    <BlogPosts/>
                </div>
                
            
            </section>
        
            <FooterPages/>
        </div>
    )
}

export default ComunidadeBlog