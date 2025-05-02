import React from 'react'
import {Link} from "react-router-dom"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import '../styles/components/FooterPages.css'

const FooterPages = () => {
  return (
    <section className='section-footer'>
        <div className='cima-footer'>
            <ul className='lista-itens-footer'>
                <li className='secao-item-lista'>
                    <h3 className='titles-footer'>Sobre nós</h3>
                    <Link to='/' className='links-item-lista'>Acessar página</Link> 
                    <Link to='/' className='links-item-lista'>Nosso sistema foi desenvolvido com dedicação por uma equipe comprometida com a excelência. Cada detalhe foi pensado para oferecer uma experiência prática, segura e eficiente.</Link> 
                </li>
                <li className='secao-item-lista'>
                    <h3 className='titles-footer'>Links rápidos</h3>
                    <Link to='/' className='links-item-lista'>Postagens do blog</Link>
                    <Link to='/' className='links-item-lista'>Enviar mensagem para o suporte</Link>
                    <Link to='/' className='links-item-lista'>Cadastrar</Link>
                </li>
                <li className='secao-item-lista'>
                    <h3 className='titles-footer'>Contatos</h3>
                    <Link to='/' className='links-item-lista'>Pessoal - (11) 12222-2222</Link>
                    <Link to='/' className='links-item-lista'>Empresarial - (11) 12222-2222</Link>  
                    <Link to='/' className='links-item-lista'>Equipe - (11) 12222-2222</Link>
                </li>
                <li className='secao-item-lista'>
                    <h3 className='titles-footer'>Equipe</h3>
                    <Link to='/' className='links-item-lista'>Dev - Felipe Marinho</Link>
                    <Link to='/' className='links-item-lista'>Dev - Lucas Wanderley</Link>  
                    <Link to='/' className='links-item-lista'>@Suporte ProJuridico</Link>

                </li>
              

            </ul>
            
        </div>
       
           

           
        
        <div className='div-redes'>
            <ul className='links-redes-sociais'>
           
                <Link><FaWhatsapp className='icones-redes-footer'/></Link>              
                <Link><FaInstagram className='icones-redes-footer'/></Link>
                <Link><MdEmail className='icones-redes-footer'/></Link>
                <Link><FaPhoneAlt className='icones-redes-footer'/></Link>
                <Link><FaLinkedin className='icones-redes-footer'/></Link>
            </ul>
        </div>
       
        <div className='end-footer'>
            <p>2025. Todos os direitos reservados por @daniellelucenaadv.</p>
            <a href='#'>Termos e condições</a>
        </div>
    </section>
  )
}

export default FooterPages