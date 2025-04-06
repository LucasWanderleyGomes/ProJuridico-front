import "../styles/components/Contact.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contate-nos</h2>
      <p className={styles.subtitle}>Ficou com alguma duvida? Não se preocupe, estamos à disposição para ajudar.</p>
      
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <h3>Endereço</h3>
          <p>Rua nº 89, Lorem ipsur do askmd</p>
        </div>
        
        <div className={styles.infoItem}>
          <h3>Telefone</h3>
          <p>83 9 1111-3333</p>
        </div>
        
        <div className={styles.infoItem}>
          <h3>Email</h3>
          <p>emailficticio@hotmail.com</p>
        </div>
      </div>
      
      <div className={styles.message}>
        <h3>Envie-nos uma mensagem</h3>
        <p>Possui sugestões, mensagens, agradecimentos ou algumas coisas que queira nos falar? Preencha o formulário abaixo.</p>
      </div>
    </section>
  );
};

export default Contact;