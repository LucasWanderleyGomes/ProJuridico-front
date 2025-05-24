import React from 'react'
import Header from "../components/Header"
import Contact from "../components/Contact"
import FooterPages from '../components/FooterPages'

// BOTAO DE SUBIR PRO TOPO LA

import BotScrollUp from '../components/BotScrollUp';

const Contato = () => {
  return (
    <div>
      <Header />
      <Contact />
      <FooterPages/>
      <BotScrollUp/>
    </div>
  )
}

export default Contato