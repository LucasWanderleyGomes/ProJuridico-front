import "../styles/components/Header.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Prolurídico</h1>
      <nav className={styles.nav}>
        <a href="#">Adevocida</a>
        <a href="#">Consultoria</a>
        <a href="#">Contato</a>
        <a href="#">Comunidade</a>
      </nav>
    </header>
  );
};

export default Header;