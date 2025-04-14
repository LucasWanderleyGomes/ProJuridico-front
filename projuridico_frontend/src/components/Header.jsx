import "../styles/components/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="left-header-cont">
          <h2 className="logo">Projuridico</h2>

          <nav className="items">

            <a href="#">Portfólio</a>
            <a href="#">Consultorias</a>
            <a href="#">Contato</a>
            <a href="#">Comunidade</a>

          </nav>
      </div>
     <div className="right-header-cont">
        <a href="" id="bot-sair-log">Sair</a>
     </div>

    </header>
  );
};

export default Header;