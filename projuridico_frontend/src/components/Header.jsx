import "../styles/components/Header.css"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <div className="left-header-cont">
          <Link to="/home" className="logo" >ProJuridico</Link>

          
      </div>
      <nav className="items">

            <Link to="/portfolio" className="links-nav" >Portfólio</Link>
            <Link to="/consultoria" className="links-nav">Consultoria</Link>
            <Link to="/contato" className="links-nav">Contato</Link>
            <Link to="/comunidade" className="links-nav">Comunidade</Link>

      </nav>
      <div className="right-header-cont">
          <Link to="/logout" className="links-nav" id="bot-sair-log">Sair</Link>
      </div>

    </header>
  );
};

export default Header;