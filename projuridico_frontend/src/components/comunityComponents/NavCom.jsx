import React from 'react'

// components
import { MdOutlineEventNote } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdNightlife } from "react-icons/md";
import { GrHelpBook } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";

// styles

import '../../styles/components/comunityStyles/NavCom.css'

const NavCom = () => {
  return (
    <aside className='componente-nav'>
        <ul className='lista-links'>
            <li className='item-lista'><MdOutlineEventNote className='icones-nav'/>Eventos</li>
            <li className='item-lista'><MdNightlife className='icones-nav'/>Blog</li>
            <li className='item-lista'><FaSearch className='icones-nav'/>Procurar</li>
            <li className='item-lista'><GrHelpBook className='icones-nav'/>Centro de Ajuda</li>
            <li className='item-lista'><FaPeopleGroup className='icones-nav'/>Membros</li>
        </ul>
    </aside>
  )
}

export default NavCom