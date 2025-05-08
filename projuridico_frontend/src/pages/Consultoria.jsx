import Header from "../components/Header"
import bg from "../assets/bgConsult.png"
import PageDecoration from '../components/PageDecoration'
import api from "../api"
import { useState, useEffect } from 'react'
import Consulta from "../components/Consulta"
import '../styles/Pages/Consultoria.css'
import bgConsulta from "../assets/consulta-juridica.png"
import {motion} from "framer-motion"
import FooterPages from "../components/FooterPages"


import { FaChartLine } from "react-icons/fa";
import { FaCompass } from "react-icons/fa6";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Consultoria = () => {

  const [consultoria, setConsultoria] = useState([])
  const [nome_cliente, setNomeCliente] = useState("")
  const [assunto, setAssunto] = useState("")
  const [descricao, setDescricao] = useState("")
  const [numProcesso, setNumProcesso] = useState("")

  useEffect( () => {
    getConsulta()
  }, [])


  const getConsulta = () =>{
      api.get("/api/v2/consultas/")
      .then((res) => (res.data))
      .then((data) => {setConsultoria(data.results) ; console.log(data.results)})
      .catch((error) => alert(error));
  }

  return (
    <div>
      <Header/>
      <PageDecoration sectionName={"Consultoria"} descricaoSection={"Resultados que refletem estratégia, técnica e comprometimento. Explore nosso portfólio de consultorias jurídicas e veja como transformamos desafios em soluções seguras, éticas e eficazes."} bg={bg}/>
      <section className="section-box-vantagens" style={{ backgroundImage: `url(${bgConsulta})` }}>
        <div id="motion-div-consult-1">
              <div className="vantagens title">
                  <div id="title-vantagens">
                    <span id="number-span">3</span> 
                    <p>Benefícios da consultoria jurídica para mulheres</p>
                  </div>
              </div>
              <div className="vantagens texts">

                <div className="box-text-icon">
                  <div className="inicio-linha">
                    <h2>1</h2>
                    <RiQuestionnaireFill id="questionaire"/>
                    <div id="invis">---</div>
                  </div>
                  
                  <p className="box-text">Escuta qualificada das dores e esclarecimento detalhado de dúvidas.</p>
                </div>

                <div className="box-text-icon">
                  <div className="inicio-linha">
                    <h2>2</h2>
                    <FaCompass id="compass"/>
                    <div id="invis">---</div>
                  </div>
                  
                  <p className="box-text">Orientação especializada que considera os detalhes da situação em análise e características e interesses da mulher.</p>
                </div>

                <div className="box-text-icon">
                  <div className="inicio-linha">
                    <h2>3</h2>
                    <FaChartLine id="chart-line"/>
                    <div id="invis">---</div>
                  </div>
                  
                  <p className="box-text">Planejamento das providências jurídicas a serem adotadas, minimizando riscos e custos.</p>
                </div>
                  
              </div>
      
          
            </div>
      </section>

      <section className="section-consultas">

        <div className="container-cabecalho">
          
          <div className="cabecalho-consultorias">
            <h2 id="title-avs">Avaliações das consultorias</h2>
            <p id="content-cabecalho">Conheça a experiência de quem já contou com meu apoio jurídico. Avaliações reais de clientes, com seus relatos e temas atendidos.</p>

          </div>

          <div className="icones-cabecalho">
            <p id="txt-busca">Busque por alguma palavra chave, para facilitar a sua procura por avaliações!</p>
            <form id="form-buscar">
              <input
                type="text"
                placeholder="Buscar avaliação de consultoria..."
                id="barra-busca"
            
              />
              <button id="bot-busca" type="submit">< FaSearch id="icone-busca"/></button>
            </form>
          </div>

          
        </div>
        
        <div className="content-consultas">

          {consultoria.map((consulta) => 
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                id="motion-div-consult-2"
                className="wrapper-card"> 
              <Consulta consulta={consulta} key={consulta.id} id="consulta-card"/>
            </motion.div>
          
          )}

        </div>
          
      </section>
      
     
      <FooterPages/>
    </div>
  )
}

export default Consultoria