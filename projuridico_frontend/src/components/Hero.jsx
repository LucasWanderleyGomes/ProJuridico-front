import "../styles/components/Hero.css"
import hero from "../assets/hero.png"
import bg from "../assets/nova-home.png"

import { Link } from "react-router-dom";


import { RiUserCommunityFill } from "react-icons/ri";
import { LuNotebookText } from "react-icons/lu";
import { MdOutlineWork } from "react-icons/md";

const Hero = () => {
  return (
    <section className="main-hero">
        <div className="content-section-home" style={{ backgroundImage: `url(${bg})`}}>
           <div className="containers-hero">
                    ㅤ
           </div>
           <div className="containers-hero">
                <div className="textos-direita">
                    <h1>Danielle Lucena</h1>
                    <p id="texto-apresentacao">Nossa missão é contribuir para o fortalecimento da autonomia das mulheres </p>
                    <div className="botoes-home">
                        <Link className="agendar">Agendar consulta</Link>
                        <Link className="saiba-mais">Saiba mais</Link>
                    </div>
                                
                </div>
                <div className="linha-direita">
                   
                </div>
           </div>
           <div className="containers-hero" id="icones-cont">
                
                {/* <a href="#work-sec" className="back-icones"><LuNotebookText className="icones-home"/></a>
                <a href="#community" className="back-icones"><RiUserCommunityFill className="icones-home"/> </a>
                <a href="#" className="back-icones"><MdOutlineWork className="icones-home"/></a> */}
                
                
           </div>
            
            
        </div>
         
        {/* <div className="hero">

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
        </div> */}
        

    </section>

  );
};

export default Hero;