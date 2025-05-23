import "../styles/components/Hero.css"
import hero from "../assets/hero.png"
import bg from "../assets/nova-home.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      className="main-hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.6, ease: "easeOut" }}
    >
      <div className="content-section-home" style={{ backgroundImage: `url(${bg})` }}>
        <div className="containers-hero">ㅤ</div>

        <div className="containers-hero">
          <div className="textos-direita">
            <h1>Danielle Lucena</h1>
            <p id="texto-apresentacao">
              Nossa missão é contribuir para o fortalecimento da autonomia das mulheres
            </p>
            <div className="botoes-home">
              <Link className="agendar">Agendar atendimento</Link>
              <Link className="saiba-mais">Saiba mais</Link>
            </div>
          </div>
          <div className="linha-direita"></div>
        </div>

        <div className="containers-hero" id="icones-cont">
          {/* Ícones comentados aqui */}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;