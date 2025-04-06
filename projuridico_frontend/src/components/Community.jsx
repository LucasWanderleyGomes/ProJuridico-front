import "../styles/components/Community.css"

const Community = () => {
  return (
    <section className={styles.community}>
      <h2 className={styles.title}>Comunidade</h2>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Inovação</h3>
          <p>Mostre o fruto de suas ideias mais inovadoras e compartilhe sua  o seu produto para encorajar outras empreendedoras! </p>
        </div>
        
        <div className={styles.card}>
          <h3>Visão</h3>
          <p>Enxergamos um futuro onde cada mulher empreendedora transforma suas ideias em realidade, inovando e inspirando o mercado com autenticidade e ousadia</p>
        </div>
        
        <div className={styles.card}>
          <h3>Conexão</h3>
          <p>Conecte-se com outras mulheres com os mesmos objetivos que os seus e compartilhem seus projetos pessoais.</p>
        </div>
        
        <div className={styles.card}>
          <h3>Descobrimento</h3>
          <p>Descubra tudo que há de inovador no cenário empreendedor e tome iniciativa para transformar seus sonhos em realidade!</p>
        </div>
        
        <div className={styles.card}>
          <h3>Pertencimento</h3>
          <p>Juntas, construímos uma comunidade forte e acolhedora, onde cada mulher encontra apoio, motivação e oportunidades para crescer e prosperar</p>
        </div>

        <div className={styles.card}>
          <h3>Fortalecimento</h3>
          <p>Capacitar mulheres para enfrentar desafios e conquistar seu espaço no mundo dos negócios, com conhecimento, inovação e atitude.</p>
        </div>

      </div>
    </section>
  );
};

export default Community;