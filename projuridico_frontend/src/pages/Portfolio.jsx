import React from 'react'
import Header from "../components/Header"
import Processo from "../components/Processo"
import FooterPages from '../components/FooterPages'
import api from "../api"
import { useState, useEffect } from 'react'
import PageDecoration from '../components/PageDecoration'
import bg from "../assets/bgSection.png"
import {motion} from "framer-motion"
import imageContent from "../assets/dani.png"
import "../styles/Pages/Portfolio.css"
import bgPorftolio from "../assets/bg-portfolio.png"

const Portfolio = () => {

  const [portfolio, setPortfolio] = useState([])
  const [categoria, setCategoria] = useState("")
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")

  useEffect(() => {
      getProcesso()
  }, [] )

  const getProcesso = () =>{
      api.get("/api/v2/processos/")
      .then((res) => res.data)
      .then((data) => {setPortfolio(data.results) ; console.log(data.results)})
      .catch((err) => alert(err));
  }

  const handleDeleteProcesso = (id) =>{
      api.delete(`/api/v2/processos/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert(`Processo ${res.data.id} deletado com sucesso!`)
        } else {
          alert("Erro ao deletar o processo selecionado.")
        }
        getProcesso();
      }).catch((error) => alert(error));
      
  }

  const handleCriarProcesso = (e) =>{
    e.preventDefault();
    api.post(`/api/v2/processos/`, {categoria, titulo, descricao})
    .then((res) => {
      if (res.status === 201) {
        alert(`Processo ${res.data.id} criado e adicionado ao seu portfolio.`)
      } else {
        alert("Erro ao criar um processo para seu portfolio.")
      }
      getProcesso();
    })
    .catch((error) => alert(error));
    
  }


  return (
    <>
      <Header/>
      <PageDecoration sectionName={"Portfolio"} descricaoSection={"Conheça todas os trabalhos (e projetos) mais importantes que consolidaram minha carreira, até o momento atual."} bg={bg}/>
     
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" id='carrossel-bg'>
          <div class="carousel-item active" data-bs-interval="4000" id='item-carrossel1'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              id='motion-div1'
            >
              <div className='content-motion'>
                
                <div className="right-container-info">
                    <img src={imageContent} alt="" id='img-dani' />
                </div>
                <div className="left-container-info">
                  <p>Nosso ponto de partida e principal base de atuação é a defesa das mulheres no âmbito das estruturas familiares, que são os espaços onde as diferenças – essências distintas - podem, primeiramente, se transformar em desigualdades – privilégios de uns em detrimento de outros - e se transmutar em violências.</p>
                </div>
                
              </div>
             

            </motion.div>

          </div>
          <div class="carousel-item" data-bs-interval="4000" id='item-carrossel2'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                viewport={{ once: true }}
                id='motion-div2'
              >
                <div className='content-motion'>
                  
                  <div className="right-container-info">
                    <img src={imageContent} alt="" id='img-dani' />
                  </div>
                  <div className="left-container-info">
                    <p>E, em reforço, faz-se necessário impulsionar outras formas de emancipação da mulher. Daí nasce a necessidade de ampliar a atuação para a proteção da sua produção intelectual e de sua base empresarial, sobretudo na vertente educacional; do seu acesso à saúde, aos benefícios previdenciários e à possibilidade de transcendência dos frutos do seu trabalho e interesses pessoais, a partir do planejamento sucessório.</p>
                  </div>
                
                </div>
                
            </motion.div>
            
          </div>
          <div class="carousel-item" data-bs-interval="4000" id='item-carrossel3'>
            <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  id='motion-div3'
                >
                  <div className='content-motion'>
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    id='motion-div3'
                    >  
                      <div className='content-motion'>
                       
                        <div className="right-container-info">
                          <img src={imageContent} alt="" id='img-dani' />
                        </div>
                        <div className="left-container-info">
                          <p>A atuação é coordenada e executada em maior parte pela Dra. @daniellelucenaadv , mas também conta com a colaboração e alta competência técnica de outras advogadas, formando uma grande rede de mulheres que defendem mulheres e vivem juntas um potente processo de empoderamento, em vias individual e coletiva, como deve ser.</p>
                        </div>
                      
                      </div>
                    
                    </motion.div>
                    
                  <div className="right-container-info">

                  </div>
                
                  </div>
                
            </motion.div>
            
          </div>
        </div>
        <button id='previous-but' class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button id='next-but' class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      
      <motion.div

        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="p-8 bg-white rounded-2xl shadow-xl"
        id='div-portfolio'
      >
        
        <section className='section-portfolio' style={{ backgroundImage: `url(${bgPorftolio})`}} >
          <h2 id='title-section-processos'>Destaques de processos</h2>
          <p id='texto-sec-proc'>“ O direito é um poder passivo ou pacificado pelo Estado e é sinônimo de poder, pois sem esta participação e legitimação democrática, só resta a violência, a descrença e a barbárie.” (Hannah Arendt – Filósofa )</p>
          {portfolio.map((processo) => <Processo processo={processo} onDelete={handleDeleteProcesso} key={processo.id} /> )}
        </section>
      </motion.div>
      
      
      {/* <h3>Adicionar um processo</h3>
      <form onSubmit={handleCriarProcesso} className='form-processo'>
        <label htmlFor="categoria">Categoria</label>
        <input 
          id='categoria'
          type='text'
          name='text'
          required
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
          />
          <label htmlFor="titulo">Categoria</label>
         <input
          
          id='titulo'
          type='text'
          name='titulo'
          required
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
        />
        <label htmlFor="descricao">Descricao</label>
         <textarea    
          id='descricao'
          name='descricao'
          required
          onChange={(e) => setDescricao(e.target.value)}
          value={descricao}
        ></textarea>
        <button type='submit' value='submit'>Criar</button>
      </form> */}
      <FooterPages/>
    </>
  )
}

export default Portfolio