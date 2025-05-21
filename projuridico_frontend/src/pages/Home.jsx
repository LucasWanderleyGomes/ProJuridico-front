import React from 'react'
import Hero from "../components/Hero";
import Community from "../components/Community";
import Contact from "../components/Contact";
import FooterPages from '../components/FooterPages'
import Footer from "../components/Footer";

import Header from "../components/Header";
import Box from "../components/Box";
import TabsSection from '../components/TabsSection'

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

    </div>
  );
};

export default Home;
