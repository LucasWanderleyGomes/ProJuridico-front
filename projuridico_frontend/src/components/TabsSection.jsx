import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // <- Importação
import bgTabs from "../assets/bg-tabs.png"
import "../styles/components/TabsSection.css"

const TabsSection = () => {
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className='section-tabs' style={{ backgroundImage: `url(${bgTabs})` }}>
      <div className='container-tabs-texts'>
        <div className='block-tabs'>
          <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "tabs active-tabs" : "tabs"}>
            Advocacia
          </div>
          <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "tabs active-tabs" : "tabs"}>
            Consultoria
          </div>
        </div>

        <div className='content-tabs'>
          <AnimatePresence mode="wait">
            {toggleState === 1 && (
              <motion.div
                key="advocacia"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="content active-content"
              >
                <p className='active-text'>
                  "Não é um nicho de mercado! A defesa dos direitos das mulheres é verdadeiro instrumento de emancipação, 
                  de promoção de autonomia, a partir da provocação de novas perspectivas de resposta pelo Judiciário, 
                  que considere às desigualdades que nos afetam, 
                  afastando-as ou ao menos minimizando-as." - Danielle Lucena
                </p>
                <h4 className='active-text-title'>Serviços</h4>
                <ul className='lista-servicos'>
                  <li className='item-servicos'><p>1</p>Planejamento matrimoniall</li>
                  <li className='item-servicos'><p>2</p>Constituição e dissolução de União Estável</li>
                  <li className='item-servicos'><p>3</p>Pensão alimentícia</li>
                  <li className='item-servicos'><p>4</p>Guarda de filhos e regime de convívio</li>
                  <li className='item-servicos'><p>5</p>Assistência jurídica à mulher vítima de violência doméstica...</li>
                  <li className='item-servicos'><p>6</p>Divórcio, Filiação socioafetiva, Mediação de conflitos</li>
                  
                </ul>
              </motion.div>
            )}

            {toggleState === 2 && (
              <motion.div
                key="consultoria"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="content active-content"
              >
                <p className='active-text'>
                  "Além da consultoria e assessoria jurídica para clientes finais, também presto orientação e aconselhamento técnico especializado para advogadas 
                  que tem por objetivo desenvolver a própria carreira profissional,
                  bem como potencializar uma atuação específica em defesa das mulheres ou na seara empresarial, 
                  na vertente de propriedade intelectual, para resolução de disputas e litígios." - Danielle Lucena
                </p>
                <h4 className='active-text-title'>Serviços</h4>
                <ul className='lista-servicos'>
                  <li className='item-servicos'><p>1</p>Criação de marca pessoal</li>
                  <li className='item-servicos'><p>2</p>Posicionamento estratégico e gestão da reputação</li>
                  <li className='item-servicos'><p>3</p>Estruturação de redes de contatos</li>
                  <li className='item-servicos'><p>4</p>Uso ético e eficaz das redes sociais</li>
                  <li className='item-servicos'><p>5</p>Assessoria na administração e organização do escritório</li>
                  <li className='item-servicos'><p>6</p>Elaboração de portfólios</li>
                  
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default TabsSection
