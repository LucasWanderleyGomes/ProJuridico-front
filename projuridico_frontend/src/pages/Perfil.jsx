import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import FooterPages from '../components/FooterPages'
import papelPerfil from '../assets/papel-parede-perfil.jpg'
import NavPerfil from '../components/Perfil/NavPerfil'
import { IoPersonSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'


import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

import api from '../api'


import '../styles/Pages/Perfil.css'

const Perfil = () => {

    const [profile, setProfile] = useState({})

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
        <section className='section-content'>
            <div className='container-capa'  style={{
                    backgroundImage: `url(${papelPerfil})`,
                    backgroundSize: 'cover', 
            }}>   
            </div>
            <div className='div-infos-user'>
                <div className='container-circulo-foto'>
                    <IoPersonSharp className="icone-perfil-profile" />
                </div>
                <div className='infos-textuais'>
                    <h2 className='username'>{profile.username}</h2>
                    <p className='email'>{profile.email}</p>
                    <p id='frase-user'>"{profile.descricao_pessoal}"</p>
                </div>
            </div>
            <section className='main-content-section-perfil'>
                <div className='left-section'>
                    <div className="dados-infos">
                        <h4 id='titulo-infos'>Informações pessoais</h4>
                    </div>
                    <div className="dados-infos">
                        <p><span className="span-infos-user">Cnpj:</span>{profile.cnpj}</p>
                        
                        <p><span className="span-infos-user">Contato:</span>{profile.contato}</p>
                        <p><span className="span-infos-user">Data de Nascimento:</span>{profile.data_de_nascimento}</p>
                        
                    </div>
                    
                    
                </div>
                <div className='right-section'>
                    <h4 id='titulo-infos'>Redes sociais</h4>
                    <div className='cima-right-perf'>
                        <p id='textinho-perfil-right'>Quer saber mais sobre minha trajetória, projetos e um pouco da minha vida pessoal? Me acompanhe nas redes sociais 
                            — por lá compartilho conteúdos exclusivos, novidades dos meus negócios e momentos do dia a dia.
                        </p>
                    </div>
                    <div className='baixo-right-perf'>
                        <a href={profile.insta}><RiInstagramFill className='icones-redes-perfil'/></a>
                        <a href={profile.whats}><RiWhatsappFill className='icones-redes-perfil'/></a>
                        <a href={profile.linkedin}><BsLinkedin className='icones-redes-perfil'/></a>
                    </div>
                   

                   
                   
                   
                </div>
            </section>
        </section>
        <FooterPages/>
    </>
  )
}

export default Perfil