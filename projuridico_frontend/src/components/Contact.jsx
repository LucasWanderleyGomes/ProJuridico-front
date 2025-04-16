import "../styles/components/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-header">
        <h2 className="title">Contate-nos</h2>
        <p className="subtitle">Ficou com alguma dúvida? Não se preocupe, estamos à disposição para ajudar.</p>
      </div>

      <div className="divider"></div>

      <div className="contact-info">
        <div className="info-section">
          <h2 className="info-title">Endereço</h2>
          <p className="info-text">Rua nº 89, Lorem ipsum dolor sit amet</p>

          <h2 className="info-title">Telefone</h2>
          <p className="info-text">83 9 1111-3333</p>
        
          <h2 className="info-title">Email</h2>
          <p className="info-text">emailficticio@hotmail.com</p>
          
        </div>
      </div>

      <div className="divider"></div>

      <div className="send-message">
        <h3>Envie-nos uma mensagem</h3>
        <p className="message-subtitle">Possui sugestões, mensagens, agradecimentos ou alguma coisa que queira nos falar? Preencha o formulário abaixo:</p>

        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" rows="4"></textarea>
          </div>

          <button className="submit-button">ENVIAR</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;