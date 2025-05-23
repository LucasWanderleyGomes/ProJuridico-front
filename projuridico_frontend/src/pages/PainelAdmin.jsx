import SuporteList from "../components/SuporteList";
import GerenciarConsultas from "../components/GerenciarConsultas";
import "../styles/Pages/PainelAdmin.css";
const PainelAdmin = () => {
  return (
    <div className="painel-admin">
      <h1 className="painel-admin__title">Adicionar</h1>
       <GerenciarConsultas />


      <h1 className="painel-admin__title">Suporte</h1>
      <SuporteList />
    </div>
  );
};

export default PainelAdmin;
