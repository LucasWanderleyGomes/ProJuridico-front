import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Import motion

// STYLES
import "../styles/components/Contact.css";

// ASSETS
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMailUnread } from "react-icons/io5";

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
    } else {
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

  // Define animation variants for the left and right content sections
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="contact">
      <motion.div // Apply motion to the left content div
        id="esquerda-ctt"
        className="contents-contato"
        variants={leftVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="contact-header">
          <h2 className="title-contate-nos">Contate-nos</h2>
          <p className="subtitle">Ficou com alguma dúvida? Não se preocupe, estamos à disposição para ajudar.</p>
        </div>

        <div className="divider-ctt"></div>

        <div className="contact-info">
          <div className="info-section-contato">
            <div className="box-info">
              <HiLocationMarker className="icones-page-contato"/>
              <p className="info-text-ctt">Rua nº 89, Lorem ipsum dolor sit amet</p>
            </div>

            <div className="box-info">
              <BsFillTelephoneFill className="icones-page-contato"/>
              <p className="info-text-ctt">83 9 1111-3333</p>
            </div>

            <div className="box-info">
              <IoMailUnread className="icones-page-contato"/>
              <p className="info-text-ctt">emailficticio@hotmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div // Apply motion to the right content div
        id="direita-ctt"
        className="contents-contato"
        variants={rightVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Add a slight delay
      >
        <div className="send-message">
          <h3>Envie-nos uma mensagem!</h3>
          <p className="message-subtitle">Possui sugestões, mensagens, agradecimentos ou alguma coisa que queira nos falar? Preencha o formulário abaixo:</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" value={formData.nome} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="email-telef" htmlFor="email">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group phone-input-container">
                <label className="email-telef" htmlFor="telefone">Telefone</label>
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
      </motion.div>
    </section>
  );
};

export default Contact;