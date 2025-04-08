import "../styles/components/Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="divider"></div>
      
      <div className="content">
        <h3 className="name">Danielle Lucena</h3>
        <h2 className="specyalits">Advogada Especializada</h2>
        
        <ul className="features">
          <li>Apresentação de projetos e investimentos, defensores do direito da mulher</li>
          <li>Comunidade de interesses coletivos referentes aos movimentos empreendedores femininos</li>
          <li>Planejamento das providências jurídicas a serem adotadas, minimizando riscos e custos</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;