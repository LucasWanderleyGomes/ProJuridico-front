import "../styles/components/Community.css";

const Community = () => {
  const cards = [
    {
      title: "Inovação",
      content: "Mostre o fruto de suas ideias mais inovadoras e compartilhe seu produto para encorajar outras empreendedoras!"
    },
    {
      title: "Visão",
      content: "Enxergamos um futuro onde cada mulher empreendedora transforma suas ideias em realidade, inovando e inspirando o mercado com autenticidade e ousadia."
    },
    {
      title: "Conexão",
      content: "Conecte-se com outras mulheres com os mesmos objetivos que os seus e compartilhem seus projetos pessoais."
    },
    {
      title: "Descobrimento",
      content: "Descubra tudo que há de inovador no cenário empreendedor e tome iniciativa para transformar seus sonhos em realidade!"
    },
    {
      title: "Pertencimento",
      content: "Juntas, construímos uma comunidade forte e acolhedora, onde cada mulher encontra apoio, motivação e oportunidades para crescer e prosperar."
    },
    {
      title: "Fortalecimento",
      content: "Capacitar mulheres para enfrentar desafios e conquistar seu espaço no mundo dos negócios, com conhecimento, inovação e atitude."
    }
  ];

  return (
    <section className="community">
      <h2 className="community__title">Comunidade</h2>
      
      <div className="community__grid">
        {cards.map((card, index) => (
          <div key={index} className="community__card">
            <h3 className="community__card-title">{card.title}</h3>
            <p className="community__card-content">{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;