import React from 'react'

import Contact from "../components/Contact";

import Footer from "../components/Footer";

// BOTAO DE SUBIR PRO TOPO LA

import BotScrollUp from '../components/BotScrollUp';

// COMPONENTES DE PAGINA

import Header from "../components/Header";
import Box from "../components/Box";
import TabsSection from '../components/TabsSection'
import Hero from "../components/Hero";
import Community from "../components/Community";
import FooterPages from '../components/FooterPages'


// STYLES
import "../styles/Pages/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header/>
      <Hero />
      <Box />
      <TabsSection/>
     
      <main>
        <Community />

      </main>
      
      <FooterPages/>
      <BotScrollUp/>
    </div>
  );
};

export default Home;
