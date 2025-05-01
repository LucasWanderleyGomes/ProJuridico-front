import React from 'react'
import Header from '../components/Header'
import NavCom from '../components/comunityComponents/NavCom'
import InfoCom from '../components/comunityComponents/InfoCom'
import BlogPosts from '../components/comunityComponents/BlogPosts'

import '../styles/Pages/Comunidade.css'

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
              
                <div>
                    <BlogPosts/>
                </div>
              
              
            </section>
           
            
        </div>
      )
}

export default ComunidadeBlog