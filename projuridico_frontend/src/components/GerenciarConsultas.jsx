import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/components/SuporteList.css";

const GerenciarConsultas = () => {
  const [consultas, setConsultas] = useState([]);
  const [consultaAtual, setConsultaAtual] = useState({
    nome_cliente: '',
    assunto: '',
    descricao: '',
    numero_processo: '',
  });
  const [modoEdicao, setModoEdicao] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  
  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v2/consultas/");
        
        setConsultas(response.data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar consultas:", error);
        setErro("Erro ao carregar consultas");
        setLoading(false);
      }
    };

    fetchConsultas();
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsultaAtual(prev => ({
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
          `http://localhost:8000/api/v2/consultas/${consultaAtual.id}/`,
          consultaAtual
        );
        setMensagem('Consulta atualizada com sucesso!');
      } else {
        response = await axios.post(
          'http://localhost:8000/api/v2/consultas/',
          consultaAtual
        );
        setMensagem('Consulta criada com sucesso!');
      }

      
      const updatedResponse = await axios.get("http://localhost:8000/api/v2/consultas/");
      setConsultas(updatedResponse.data.results || []);
      
      // Limpa o formulário
      setConsultaAtual({
        nome_cliente: '',
        assunto: '',
        descricao: '',
        numero_processo: '',
      });
      setModoEdicao(false);
    } catch (error) {
      setErro(error.response?.data?.message || 'Erro ao processar consulta');
    } finally {
      setLoading(false);
    }
  };

 
  const handleEditar = (consulta) => {
    setConsultaAtual(consulta);
    setModoEdicao(true);
    setExpandedId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 
  const handleExcluir = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta consulta?')) return;
    
    try {
      await axios.delete(`http://localhost:8000/api/v2/consultas/${id}/`);
      setMensagem('Consulta excluída com sucesso!');
      
      
      const updatedResponse = await axios.get("http://localhost:8000/api/v2/consultas/");
      setConsultas(updatedResponse.data.results || []);
    } catch (error) {
      setErro('Erro ao excluir consulta');
    }
  };

  
  const handleCancelarEdicao = () => {
    setConsultaAtual({
      nome_cliente: '',
      assunto: '',
      descricao: '',
      numero_processo: '',
    });
    setModoEdicao(false);
    setMensagem('');
    setErro('');
  };

  
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading && consultas.length === 0) {
    return <div className="loading-container">Carregando consultas...</div>;
  }

  return (
    <section className="suporte-list">
      <header className="suporte-header">
        <h2>{modoEdicao ? 'Editar Consulta' : 'Nova Consulta'}</h2>
        <p className="total-chamados">
          {consultas.length} {consultas.length === 1 ? 'consulta' : 'consultas'}
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
          <label htmlFor="nome_cliente">Nome do Cliente</label>
          <input
            type="text"
            id="nome_cliente"
            name="nome_cliente"
            value={consultaAtual.nome_cliente}
            onChange={handleChange}
            required
            className="form-input-dark"
          />
        </div>

        <div className="form-group-dark">
          <label htmlFor="assunto">Assunto</label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            value={consultaAtual.assunto}
            onChange={handleChange}
            required
            className="form-input-dark"
          />
        </div>

        <div className="form-group-dark">
          <label htmlFor="numero_processo">Número do Processo</label>
          <input
            type="text"
            id="numero_processo"
            name="numero_processo"
            value={consultaAtual.numero_processo}
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
            value={consultaAtual.descricao}
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
              ? 'Atualizar Consulta'
              : 'Cadastrar Consulta'}
          </button>
        </div>
      </form>

      
      <div className="consultas-list">
        <h3 style={{ color: '#ffffff', marginBottom: '1.5rem' }}>
          Consultas Cadastradas
        </h3>

        {consultas.length === 0 ? (
          <div className="empty-state">
            <p>Nenhuma consulta encontrada.</p>
          </div>
        ) : (
          <ul className="chamados-grid">
            {consultas.map((consulta) => (
              <li 
                key={consulta.id} 
                className={`chamado-card ${expandedId === consulta.id ? 'expanded' : ''}`}
              >
                <div
                  className="card-header"
                  onClick={() => toggleExpand(consulta.id)}
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) => e.key === 'Enter' && toggleExpand(consulta.id)}
                >
                  <div className="user-info">
                    <h3 className="user-name">{consulta.nome_cliente}</h3>
                    <p className="user-email">Processo: {consulta.numero_processo}</p>
                    <p className="user-phone">Assunto: {consulta.assunto}</p>
                  </div>
                  <div className="meta-info">
                    <time dateTime={consulta.criacao}>
                      {new Date(consulta.criacao).toLocaleDateString()}
                    </time>
                  </div>
                </div>

                {expandedId === consulta.id && (
                  <div className="card-details">
                    <div className="message-container">
                      <h4>Descrição:</h4>
                      <p className="message-content">{consulta.descricao}</p>
                    </div>
                    <div className="actions">
                      <button
                        onClick={() => handleEditar(consulta)}
                        className="edit-button"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleExcluir(consulta.id)}
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

export default GerenciarConsultas;