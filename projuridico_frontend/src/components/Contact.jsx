import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/components/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  const [showPhone, setShowPhone] = useState(false);

  
  const formatPhone = (value) => {
    
    const onlyNumbers = value.replace(/\D/g, '');
    
    
    if (onlyNumbers.length <= 10) {
      return onlyNumbers
        .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } 
    
    else {
      return onlyNumbers
        .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    if (id === 'telefone') {
      const formattedValue = formatPhone(value);
      setFormData({ ...formData, [id]: formattedValue });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const toggleShowPhone = () => {
    setShowPhone(!showPhone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/v2/mensagens/", formData);
      alert("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <section className="contact">
      <div className="contact-header">
        <h2 className="title">Contate-nos</h2>
        <p className="subtitle">Ficou com alguma dúvida? Não se preocupe, estamos à disposição para ajudar.</p>
      </div>

      <div className="divider"></div>

      <div className="contact-info">
        <div className="info-section">
          <div className="box-info"> 
            <h2 className="info-title">Endereço</h2>
            <p className="info-text">Rua nº 89, Lorem ipsum dolor sit amet</p>
          </div>

          <div className="box-info">
            <h2 className="info-title">Telefone</h2>
            <p className="info-text">83 9 1111-3333</p>
          </div>
          
          <div className="box-info">
            <h2 className="info-title">Email</h2>
            <p className="info-text">emailficticio@hotmail.com</p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="send-message">
        <h3>Envie-nos uma mensagem</h3>
        <p className="message-subtitle">Possui sugestões, mensagens, agradecimentos ou alguma coisa que queira nos falar? Preencha o formulário abaixo:</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" value={formData.nome} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group phone-input-container">
              <label htmlFor="telefone">Telefone</label>
              <div className="phone-input-wrapper">
                <input 
                  type={showPhone ? "text" : "password"}
                  id="telefone" 
                  value={formData.telefone} 
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                  maxLength={15}
                />
                <button 
                  type="button" 
                  className="toggle-phone-visibility"
                  onClick={toggleShowPhone}
                >
                  {showPhone ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" rows="4" value={formData.mensagem} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="submit-button">ENVIAR</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;