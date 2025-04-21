import "../styles/components/Hero.css"
import hero from "../assets/hero.png"


const Hero = () => {
  return (
    <section className="main">
         
        <div className="hero">

            <div className="action">
                <div className="name">
                    <p> Danielle Lucena</p>
                    <h4>Advocacia Especializada</h4>
                </div>

                <img src={hero}></img>
            </div>

        </div>
        
        <div className="call">

            <div className ="more">
                <h3>Nossa missão é contribuir para o fortalecimento da autonomia das mulheres </h3>
                <p>A partir de uma assessoria jurídica humanizada.</p>
                <button>Saiba mais</button>
            </div>
        </div>

    </section>

  );
};

export default Hero;