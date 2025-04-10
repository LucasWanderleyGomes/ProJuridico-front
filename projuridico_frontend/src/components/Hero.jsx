import "../styles/components/Hero.css"
import "../styles/assents/hero.png"

const Hero = () => {
  return (
    <section class="main">
        <div class="hero">
            <header>
                <h2>Projuridico</h2>

                <div class="items">
                    <a href="">Advocacia</a>
                    <a href="">Consultoria</a>
                    <a href="">Contato</a>
                    <a href="">Comunidade</a>
                </div>
            </header>

            <div class="action">
                <div class="name">
                    <p> Danielle Lucena</p>
                    <h4>Advocacia Especializada</h4>
                </div>

                <img src="hero.png" alt=""></img>
            </div>
        </div>
        
        <div class="call">
            <button class="login">Login</button>

            <div class ="more">
             <h3>Nossa missão é contribuir para o fortalecimento da autonomia das mulheres </h3>
             <p>A partir de uma assessoria jurídica humanizada.</p>
             <button>Saiba mais</button>
            </div>

        </div>
    </section>
  );
};

export default Hero;