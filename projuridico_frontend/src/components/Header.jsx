import "../styles/components/Header.css";

// UTILITARIOS
import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../constants";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";


// ASSETS
import { IoPersonSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";


const Header = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLogout = () => {
    localStorage.clear();
    setShowModal(false);
    navigate("/login");
  };

  const mostrarLinksCelular = () =>{

    const listCel = document.querySelector('.lista-links-cell')
    const menuHamb = document.querySelector('.botao-abrir-menu')
    const botaoFechar = document.querySelector('.botao-fechar-menu')

    menuHamb.style.display = 'none'
    listCel.style.display = 'flex'
    botaoFechar.style.display = 'flex'

  }
  const removerLinksCelular = () =>{

    const listCel = document.querySelector('.lista-links-cell')
    const menuHamb = document.querySelector('.botao-abrir-menu')
    const botaoFechar = document.querySelector('.botao-fechar-menu')

    listCel.style.display = 'none'
    menuHamb.style.display = 'flex'
    botaoFechar.style.display = 'none' 

  }

  return (
    <header className="header">
      <div className="left-header-cont">
        <button onClick={mostrarLinksCelular} className="botao-abrir-menu"><IoMenu className="menu-hamb"/></button>
        <button onClick={removerLinksCelular} className="botao-fechar-menu"><IoIosClose className="fechar-menu-hamb"/></button>
        <ul className="lista-links-cell">
            <li className="item-link-header-cel"><Link to="/home" className="links-pags-cel" id="link-home">Danielle Lucena</Link></li>
            <li className="item-link-header-cel"><Link to="/portfolio" className="links-pags-cel">Advocacia</Link></li>
            <li className="item-link-header-cel"><Link to="/consultoria" className="links-pags-cel">Consultoria</Link></li>
            <li className="item-link-header-cel"><Link to="/comunidade/eventos" className="links-pags-cel">Comunidade</Link></li>
            <li className="item-link-header-cel"><Link to="/contato" className="links-pags-cel">Contato</Link></li>
        </ul>
        <Link to="/home" className="logo">Danielle Lucena</Link>
      </div>
      <div className="right-header-cont">
          <nav className="items">
          <Link to="/portfolio" className="links-nav">Advocacia</Link>
          <Link to="/consultoria" className="links-nav">Consultoria</Link>
          <Link to="/comunidade/eventos" className="links-nav">Comunidade</Link>
          <Link to="/contato" className="links-nav">Contato</Link>
        </nav>

        <div className="right-header-cont" >
            {token ? (
              <div className="dropdown">
                {/* Este botão deve abrir o menu suspenso */}
                <button
                  id="button-prof"
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown" // Adicionado para Bootstrap 5
                  aria-expanded="false"      // Adicionado para Bootstrap 5
                >
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
                    {/* Este botão abre o modal, como já estava */}
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
      </div>

      
    </header>
  );
};

export default Header;