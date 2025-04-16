import "../styles/components/Header.css"
import {Link} from "react-router-dom"
import bg from "../assets/bg-navbar.png"
import { ACCESS_TOKEN } from "../constants";
import { useState } from "react";

const Header = () => {

  const token = localStorage.getItem(ACCESS_TOKEN)
  const handleDeslogar = () => {
    localStorage.clear()
  }

  return (
    <header className="header" style={{ backgroundImage: `url(${bg})` }}>
      <div className="left-header-cont">
          <Link to="/home" className="logo" >ProJuridico</Link>

          
      </div>
      <nav className="items">

            <Link to="/portfolio" className="links-nav" >Advocacia</Link>
            <Link to="/consultoria" className="links-nav">Consultoria</Link>
            <Link to="/contato" className="links-nav">Contato</Link>
            <Link to="/comunidade" className="links-nav">Comunidade</Link>

      </nav>
      <div className="right-header-cont">

          {token? (
            
            <Link to="/home" className="links-nav" id="bot-sair" onClick={handleDeslogar}>Sair</Link>
            
          ):(
            <Link to="/logout" className="links-nav" id="bot-login">Login</Link>
          )}
          
      </div>

    </header>
  );
};

export default Header;