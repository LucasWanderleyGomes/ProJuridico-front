import SuporteList from "../components/SuporteList";
import GerenciarConsultas from "../components/GerenciarConsultas";
import GerenciarProcessos from "../components/GerenciarProcessos";
import "../styles/Pages/PainelAdmin.css";
const PainelAdmin = () => {
  return (
    <div className="painel-admin">
      <h1 className="painel-admin__title">Gerenciamento</h1>
       <GerenciarConsultas />

       <GerenciarProcessos />


      <h1 className="painel-admin__title">Suporte</h1>
      <SuporteList />
    </div>
  );
};

export default PainelAdmin;
