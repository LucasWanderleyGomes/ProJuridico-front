function Home() {
  return (
    <div className="container mt-4">
      <h1>Bem-vindo ao ProJurídico</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Processos</h5>
              <p className="card-text">Gerencie seus processos jurídicos</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Clientes</h5>
              <p className="card-text">Gerencie seus clientes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 