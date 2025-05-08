import React from 'react'

// components
import { MdOutlineEventNote } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdNightlife } from "react-icons/md";
import { GrHelpBook } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from 'react-router-dom';

// styles

import '../../styles/components/comunityStyles/NavCom.css'

const NavCom = () => {
  return (
    <aside className='componente-nav'>
        <ul className='lista-links'>
            <Link to="/comunidade/eventos"  className='item-lista'><MdOutlineEventNote className='icones-nav'/>Eventos</Link >
            <Link to="/comunidade/blog"  className='item-lista'><MdNightlife className='icones-nav'/>Blog</Link >
            {/* <Link  className='item-lista'><FaSearch className='icones-nav'/>Procurar</Link> */}
            <Link  className='item-lista'><GrHelpBook className='icones-nav'/>Centro de Ajuda</Link >
            <Link  className='item-lista'><FaPeopleGroup className='icones-nav'/>Membros</Link >
        </ul>
    </aside>
  )
}

export default NavCom