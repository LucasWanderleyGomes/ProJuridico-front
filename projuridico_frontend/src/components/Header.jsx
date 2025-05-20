import "../styles/components/Header.css";
import { Link, useNavigate } from "react-router-dom";
// import bg from "../assets/bg-navbar.png";
import { ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap"; // React-Bootstrap

import { IoPersonSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

const Header = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLogout = () => {
    localStorage.clear();
    setShowModal(false);
    navigate("/login");
  };

 useEffect(() => {
    const header = document.querySelector('.header');

    const handleScroll = () => {
      if (window.scrollY > 10) {
        header.classList.remove('at-top');
      } else {
        header.classList.add('at-top');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica ao montar o componente

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <header
        className={`header ${isScrolled ? "scrolled" : "at-top"}`}
  
    >
      <div className="left-header-cont">
        <Link to="/home" className="logo">ProJuridico</Link>
      </div>

      <nav className="items">
        <Link to="/portfolio" className="links-nav">Advocacia</Link>
        <Link to="/consultoria" className="links-nav">Consultoria</Link>
        <Link to="/contato" className="links-nav">Contato</Link>
        <Link to="/comunidade/eventos" className="links-nav">Comunidade</Link>
      </nav>

      <div className="right-header-cont">
        {token ? (
          <div className="dropdown">
            <button id="button-prof" className="btn btn-secondary dropdown-toggle" type="button">
              <IoPersonSharp className="profile" />
            </button>
            <ul className="dropdown-menu" id="menu-dropdown">
              <li className="itens-dropdown-menu">
                <Link to='/perfil/me' id="ext-links-drop" className="dropdown-item">
                  <IoPersonCircleSharp className="icones-drop" /> Perfil
                </Link>
              </li>
              <li className="itens-dropdown-menu">
                <Link to='/' id="ext-links-drop" className="dropdown-item">
                  <IoIosInformationCircle className="icones-drop" /> Página de suporte
                </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="itens-dropdown-menu">
                <button id="botao-sair" type="button" className="dropdown-item" onClick={handleShow}>
                  <MdOutlineLogout id="sair" className="icones-drop" /> Sair da conta
                </button>
              </li>
            </ul>

            <Modal show={showModal} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Confirmação</Modal.Title>
              </Modal.Header>
              <Modal.Body>Tem certeza que deseja sair?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={handleLogout}>
                  Sair
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ) : (
          <Link to="/login" className="links-nav" id="bot-login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;