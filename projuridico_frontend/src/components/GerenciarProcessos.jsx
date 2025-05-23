import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/components/SuporteList.css";

const GerenciarProcessos = () => {
  const [processos, setProcessos] = useState([]);
  const [processoAtual, setProcessoAtual] = useState({
    categoria: '',
    titulo: '',
    descricao: '',
  });
  const [modoEdicao, setModoEdicao] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  
  useEffect(() => {
    const fetchProcessos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v2/processos/");
        setProcessos(response.data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar processos:", error);
        setErro("Erro ao carregar processos");
        setLoading(false);
      }
    };

    fetchProcessos();
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProcessoAtual(prev => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErro('');
    setMensagem('');

    try {
      let response;
      if (modoEdicao) {
        response = await axios.put(
          `http://localhost:8000/api/v2/processos/${processoAtual.id}/`,
          processoAtual
        );
        setMensagem('Processo atualizado com sucesso!');
      } else {
        response = await axios.post(
          'http://localhost:8000/api/v2/processos/',
          processoAtual
        );
        setMensagem('Processo criado com sucesso!');
      }

      
      const updatedResponse = await axios.get("http://localhost:8000/api/v2/processos/");
      setProcessos(updatedResponse.data.results || []);
      
      
      setProcessoAtual({
        categoria: '',
        titulo: '',
        descricao: '',
      });
      setModoEdicao(false);
    } catch (error) {
      setErro(error.response?.data?.message || 'Erro ao processar processo');
    } finally {
      setLoading(false);
    }
  };

  
  const handleEditar = (processo) => {
    setProcessoAtual(processo);
    setModoEdicao(true);
    setExpandedId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const handleExcluir = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este processo?')) return;
    
    try {
      await axios.delete(`http://localhost:8000/api/v2/processos/${id}/`);
      setMensagem('Processo excluído com sucesso!');
      
      
      const updatedResponse = await axios.get("http://localhost:8000/api/v2/processos/");
      setProcessos(updatedResponse.data.results || []);
    } catch (error) {
      setErro('Erro ao excluir processo');
    }
  };

  
  const handleCancelarEdicao = () => {
    setProcessoAtual({
      categoria: '',
      titulo: '',
      descricao: '',
    });
    setModoEdicao(false);
    setMensagem('');
    setErro('');
  };

  
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading && processos.length === 0) {
    return <div className="loading-container">Carregando processos...</div>;
  }

  return (
    <section className="suporte-list">
      <header className="suporte-header">
        <h2>{modoEdicao ? 'Editar Processo' : 'Novo Processo'}</h2>
        <p className="total-chamados">
          {processos.length} {processos.length === 1 ? 'processo' : 'processos'}
        </p>
      </header>

      
      <form onSubmit={handleSubmit} className="consulta-form-dark">
        {mensagem && (
          <div className="alert alert-success-dark">
            {mensagem}
          </div>
        )}
        {erro && (
          <div className="alert alert-danger-dark">
            {erro}
          </div>
        )}

        <div className="form-group-dark">
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={processoAtual.categoria}
            onChange={handleChange}
            required
            className="form-input-dark"
          />
        </div>

        <div className="form-group-dark">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={processoAtual.titulo}
            onChange={handleChange}
            required
            className="form-input-dark"
          />
        </div>

        <div className="form-group-dark">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            rows="5"
            value={processoAtual.descricao}
            onChange={handleChange}
            required
            className="form-textarea-dark"
          />
        </div>

        <div className="form-actions-dark">
          {modoEdicao && (
            <button
              type="button"
              onClick={handleCancelarEdicao}
              className="cancel-button"
            >
              Cancelar
            </button>
          )}
          <button
            type="submit"
            className="respond-button"
            disabled={loading}
          >
            {loading
              ? 'Salvando...'
              : modoEdicao
              ? 'Atualizar Processo'
              : 'Cadastrar Processo'}
          </button>
        </div>
      </form>

      
      <div className="consultas-list">
        <h3 style={{ color: '#ffffff', marginBottom: '1.5rem' }}>
          Processos Cadastrados
        </h3>

        {!loading && processos.length === 0 ? (
          <div className="empty-state">
            <p>Nenhum processo encontrado.</p>
          </div>
        ) : (
          <ul className="chamados-grid">
            {processos.map((processo) => (
              <li 
                key={processo.id} 
                className={`chamado-card ${expandedId === processo.id ? 'expanded' : ''}`}
              >
                <div
                  className="card-header"
                  onClick={() => toggleExpand(processo.id)}
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) => e.key === 'Enter' && toggleExpand(processo.id)}
                >
                  <div className="user-info">
                    <h3 className="user-name">{processo.titulo}</h3>
                    <p className="user-email">Categoria: {processo.categoria}</p>
                    <p className="user-phone">
                      Criado em: {new Date(processo.data_criacao).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="meta-info">
                    <span className={`status-badge ${processo.ativo ? "respondido" : "pendente"}`}>
                      {processo.ativo ? "Ativo" : "Inativo"}
                    </span>
                  </div>
                </div>

                {expandedId === processo.id && (
                  <div className="card-details">
                    <div className="message-container">
                      <h4>Descrição:</h4>
                      <p className="message-content">{processo.descricao}</p>
                    </div>
                    <div className="actions">
                      <button
                        onClick={() => handleEditar(processo)}
                        className="edit-button"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleExcluir(processo.id)}
                        className="delete-button"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default GerenciarProcessos;