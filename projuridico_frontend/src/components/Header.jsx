import "../styles/components/Header.css"

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Projurídico</h1>
      <nav className="nav">
        <a href="#">Adevocida</a>
        <a href="#">Consultoria</a>
        <a href="#">Contato</a>
        <a href="#">Comunidade</a>
      </nav>
    </header>
  );
};

export default Header;