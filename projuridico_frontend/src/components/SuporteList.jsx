import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/components/SuporteList.css";

const SuporteList = () => {
  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [busyIds, setBusyIds] = useState(new Set());

  const fetchChamados = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("http://localhost:8000/api/v2/mensagens/");
      setChamados(response.data.results || []);
    } catch (error) {
      console.error("Erro ao buscar mensagens:", error);
      setError("Não foi possível carregar as mensagens. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChamados();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const marcarComoRespondido = async (id) => {
    try {
      setBusyIds(prev => new Set(prev).add(id));
      await axios.patch(`http://localhost:8000/api/v2/mensagens/${id}/`, {
        respondido: true,
      });
      setChamados(prev => prev.map(chamado => 
        chamado.id === id ? { ...chamado, respondido: true } : chamado
      ));
      setExpandedId(null);
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      setError("Erro ao marcar como respondido.");
    } finally {
      setBusyIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  
  const excluirMensagem = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta mensagem?')) return;
    
    try {
      setBusyIds(prev => new Set(prev).add(id));
      await axios.delete(`http://localhost:8000/api/v2/mensagens/${id}/`);
      setChamados(prev => prev.filter(chamado => chamado.id !== id));
      setMensagem('Mensagem excluída com sucesso!');
    } catch (error) {
      console.error("Erro ao excluir mensagem:", error);
      setError("Erro ao excluir mensagem. Tente novamente.");
    } finally {
      setBusyIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  if (error) {
    return (
      <section className="suporte-list">
        <div className="error-state">
          <p>{error}</p>
          <button onClick={fetchChamados} className="respond-button">
            Recarregar Mensagens
          </button>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando chamados...</p>
      </div>
    );
  }

  const chamadosOrdenados = [...chamados].sort((a, b) => 
    new Date(b.criado_em) - new Date(a.criado_em)
  );

  return (
    <section className="suporte-list">
      <header className="suporte-header">
        <div>
          <h2>Mensagens Recebidas</h2>
          <p className="subtitle">Central de atendimento ao cliente</p>
        </div>
        <div className="header-actions">
          <p className="total-chamados">
            {chamados.length} {chamados.length === 1 ? 'mensagem' : 'mensagens'}
          </p>
          <button onClick={fetchChamados} className="refresh-button" title="Recarregar mensagens">
            ↻
          </button>
        </div>
      </header>

      {chamados.length === 0 ? (
        <div className="empty-state">
          <p>Nenhuma mensagem recebida ainda.</p>
          <button onClick={fetchChamados} className="respond-button">
            Recarregar
          </button>
        </div>
      ) : (
        <ul className="chamados-grid">
          {chamadosOrdenados.map((chamado) => (
            <li 
              key={chamado.id} 
              className={`chamado-card ${expandedId === chamado.id ? 'expanded' : ''}`}
              aria-expanded={expandedId === chamado.id}
            >
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  excluirMensagem(chamado.id);
                }}
                className="delete-button-x"
                disabled={busyIds.has(chamado.id)}
                title="Excluir mensagem"
              >
                {busyIds.has(chamado.id) ? '⌛' : '✕'}
              </button>
              
              <div
                className="card-header"
                onClick={() => toggleExpand(chamado.id)}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === 'Enter' && toggleExpand(chamado.id)}
              >
                <div className="user-info">
                  <h3 className="user-name">
                    {chamado.nome}
                    {chamado.respondido && <span className="responded-icon" title="Respondido">✓</span>}
                  </h3>
                  <p className="user-email">{chamado.email}</p>
                  <p className="user-phone">{chamado.telefone || "Sem telefone"}</p>
                </div>
                <div className="meta-info">
                  <time dateTime={chamado.criado_em}>
                    {new Date(chamado.criado_em).toLocaleString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </time>
                  <span className={`status-badge ${chamado.respondido ? "respondido" : "pendente"}`}>
                    {chamado.respondido ? "Respondido" : "Pendente"}
                  </span>
                </div>
              </div>

              {expandedId === chamado.id && (
                <div className="card-details">
                  <div className="message-container">
                    <h4>Mensagem:</h4>
                    <p className="message-content">{chamado.mensagem}</p>
                  </div>
                  <div className="actions">
                    {!chamado.respondido && (
                      <button 
                        onClick={() => marcarComoRespondido(chamado.id)}
                        className="respond-button"
                        disabled={busyIds.has(chamado.id)}
                      >
                        {busyIds.has(chamado.id) ? 'Processando...' : 'Marcar como Respondido'}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SuporteList;