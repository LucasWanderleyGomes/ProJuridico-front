import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/home">ProJurídico</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/processos">Processos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clientes">Clientes</Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-light" onClick={handleLogout}>Sair</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 