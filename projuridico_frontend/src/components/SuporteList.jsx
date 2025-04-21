import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/components/SuporteList.css"

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

  if (loading) return <p>Carregando chamados...</p>;

  return (
    <section className="suporte-list">
      <h2>Mensagens Recebidas</h2>
      {chamados.length === 0 ? (
        <p>Nenhum chamado encontrado.</p>
      ) : (
        <ul>
          {chamados.map((chamado) => (
            <li key={chamado.id}>
              <div
                className="header"
                onClick={() => toggleExpand(chamado.id)}
              >
                <strong>{chamado.nome}<br></br>Email: ({chamado.email}) <br></br>contato:{" "}
                {chamado.telefone || "Sem telefone"}</strong>
                <br />
                <small>{new Date(chamado.criado_em).toLocaleString()}</small>
              </div>

              {expandedId === chamado.id && (
                <div className="expand-content">
                  <hr />
                  <p>{chamado.mensagem}</p>
                  <p>
                    Status:{" "}
                    <span
                      className={`status ${
                        chamado.respondido ? "respondido" : "pendente"
                      }`}
                    >
                      {chamado.respondido ? "Respondido" : "Pendente"}
                    </span>
                  </p>
                  {!chamado.respondido && (
                    <button onClick={() => marcarComoRespondido(chamado.id)}>
                      Marcar como Respondido
                    </button>
                  )}
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
