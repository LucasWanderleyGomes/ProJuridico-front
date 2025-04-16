import React from 'react'
import "../styles/components/PageDecoration.css"
import { FaInstagram } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";

const PageDecoration = ({sectionName, descricaoSection, bg}) => {
  return (
    <>
        <div id='major-bg' style={{ backgroundImage: `url(${bg})` }}>
            <div id='left-content-texts'>
                <p id='name-section'>{sectionName}</p>
                <h2 id='nome-cliente'>Danielle Lucena</h2>
                <p id='descricao-sec'>{descricaoSection}</p>
            </div>
            <div id='right-content-texts'>
                <p>Acompanhe nossas redes sociais para mais detalhes</p>
                <div id='redes-list'>
                    <a href="#"><RxLinkedinLogo /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaWhatsapp /></a>
                </div>
            </div>
            
        </div>
        <div id="linedivider"></div>
    </>
  )
}

export default PageDecoration