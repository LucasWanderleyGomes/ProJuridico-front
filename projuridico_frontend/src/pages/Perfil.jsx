import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import FooterPages from '../components/FooterPages'
import papelPerfil from '../assets/papel-parede-perfil.jpg'
import NavPerfil from '../components/Perfil/NavPerfil'
import { IoPersonSharp } from "react-icons/io5";

import api from '../api'


import '../styles/Pages/Perfil.css'

const Perfil = () => {

    const [profile, setProfile] = useState("")

    useEffect( () => {
        handleGetProfile()
    }, [])

    const handleGetProfile = () =>{
        api.get("/api/v2/auth/users/me/")
        .then((res) => res.data )
        .then((data) => {
            setProfile(data); 
            console.log(data);
        })
        .catch((err) => alert(err))
    }

  return (
    < >
        <Header/>
        <section id='padding-nav'>        
        </section>
        <section className='section-content'>
            <div className='container-capa'  style={{
                    backgroundImage: `url(${papelPerfil})`,
                    backgroundSize: 'cover', // Opcional: para cobrir todo o container
            }}>   
            </div>
            <div className='div-infos-user'>
                <div className='container-circulo-foto'>
                    <IoPersonSharp className="icone-perfil-profile" />
                </div>
                <div className='infos-textuais'>
                    <h2 className='username'>{profile.username}</h2>
                    <p className='email'>{profile.email}</p>
                </div>
            </div>
            <section className='main-content-section-perfil'>
                <div className='left-section'>
                    <p>XX X XXXX-XXXX</p>
                    <a href="#">Só exibindo u link padrão</a>
                </div>
                <div className='right-section'>
                    
                </div>
            </section>
        </section>
        <FooterPages/>
    </>
  )
}

export default Perfil