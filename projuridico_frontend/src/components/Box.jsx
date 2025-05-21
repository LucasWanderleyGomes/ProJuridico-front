import "../styles/components/Box.css"
import {motion} from "framer-motion"

import { FaBrain } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaFileCircleQuestion } from "react-icons/fa6";

const Box = () => {
    return (
        <section className="main-box-sec">
                <div className="cabecalho-secao2">
                    <h2 id="titulo-secao2">Soluções Jurídicas para Mulheres</h2>
                    <p className="desc-secao2">A defesa dos direitos das mulheres é um verdadeiro instrumento de emancipação, de promoção de autonomia, a partir da provocação de novas perspectivas de resposta pelo Judiciário, que considere às desigualdades que nos afetam, afastando-as ou ao menos minimizando-as.</p>
                </div>
                

                <div className="Box">
                    <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                id='motion-div1'
                                >
                                <div className="box1">
                                    <div className="container-icone-sec2">
                                        <FaFileCircleQuestion className="icones-cards-sec2"/>
                                    </div>
                                    
                                    <p className="content-cards">Apresentação de projetos e investimentos, defensores do direito da mulher</p>
                                </div>
                    </motion.div>
                    <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                id='motion-div1'
                            >
                                <div className="box2">
                                    <div className="container-icone-sec2">
                                        <MdGroups className="icones-cards-sec2"/>   
                                    </div>
                                                                     
                                    <p className="content-cards">Comunidade de interesses coletivos referentes aos movimentos empreendedores femininos</p>
                                </div>
                    </motion.div>
                    <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                id='motion-div1'
                                >
                                    <div className="box3">
                                        <div className="container-icone-sec2">
                                            <FaBrain className="icones-cards-sec2"/>
                                        </div>
                                        
                                        <p className="content-cards">Planejamento das providências jurídicas a serem adotadas, minimizando riscos e custos</p>
                                    </div>
                    </motion.div>
                    
                    
                    
                </div>

        </section>
        
    );

}

export default Box;