import "../styles/components/Header.css";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/bg-navbar.png";
import { ACCESS_TOKEN } from "../constants";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap"; // React-Bootstrap

import { IoPersonSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

const Header = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLogout = () => {
    localStorage.clear();
    setShowModal(false);
    navigate("/login"); // redireciona para login após logout
  };

  return (
    <header className="header" style={{ backgroundImage: `url(${bg})` }}>
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
            <button id="button-prof" className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <IoPersonSharp className="profile" />
            </button>
            <ul className="dropdown-menu" id="menu-dropdown">
              <li className="itens-dropdown-menu">
                <Link to='/' id="ext-links-drop" className="dropdown-item">
                  <IoPersonCircleSharp className="icones-drop" /> Perfil
                </Link>
              </li>
              <li className="itens-dropdown-menu">
                <Link to='/' id="ext-links-drop" className="dropdown-item">
                  <IoIosInformationCircle className="icones-drop" />Página de suporte
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
