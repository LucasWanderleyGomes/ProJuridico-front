import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/components/SuporteList.css";

const SuporteList = () => {
  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchChamados = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v2/mensagens/");
        setChamados(response.data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar mensagens:", error);
      }
    };

    fetchChamados();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const marcarComoRespondido = async (id) => {
    try {
      await axios.patch(`http://localhost:8000/api/v2/mensagens/${id}/`, {
        respondido: true,
      });

      setChamados((prev) =>
        prev.map((chamado) =>
          chamado.id === id ? { ...chamado, respondido: true } : chamado
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  };

  if (loading) return <div className="loading-container">Carregando chamados...</div>;

  return (
    <section className="suporte-list">
      <header className="suporte-header">
        <h2>Mensagens Recebidas</h2>
        <p className="total-chamados">{chamados.length} {chamados.length === 1 ? 'mensagem' : 'mensagens'}</p>
      </header>

      {chamados.length === 0 ? (
        <div className="empty-state">
          <p>Nenhum chamado encontrado.</p>
        </div>
      ) : (
        <ul className="chamados-grid">
          {chamados.map((chamado) => (
            <li 
              key={chamado.id} 
              className={`chamado-card ${expandedId === chamado.id ? 'expanded' : ''}`}
              aria-expanded={expandedId === chamado.id}
            >
              <div
                className="card-header"
                onClick={() => toggleExpand(chamado.id)}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === 'Enter' && toggleExpand(chamado.id)}
              >
                <div className="user-info">
                  <h3 className="user-name">{chamado.nome}</h3>
                  <p className="user-email">{chamado.email}</p>
                  <p className="user-phone">{chamado.telefone || "Sem telefone"}</p>
                </div>
                <div className="meta-info">
                  <time dateTime={chamado.criado_em}>
                    {new Date(chamado.criado_em).toLocaleString()}
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
                      >
                        Marcar como Respondido
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