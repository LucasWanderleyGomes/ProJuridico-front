import SuporteList from "../components/SuporteList";
import "../styles/Pages/PainelAdmin.css";
const PainelAdmin = () => {
  return (
    <div className="painel-admin">
      <h1 className="painel-admin__title">Suporte</h1>
      <SuporteList />
    </div>
  );
};

export default PainelAdmin;
