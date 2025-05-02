import React from 'react'
import Hero from "../components/Hero";
import Community from "../components/Community";
import Contact from "../components/Contact";
import FooterPages from '../components/FooterPages'
import Footer from "../components/Footer";
import "../styles/Pages/Home.css";
import Header from "../components/Header";
import Box from "../components/Box";


const Home = () => {
  return (
    <div className="home-container">
      <Header/>
      <Hero />
      <Box />
     
      <main>
        <Community />

      </main>
      <Contact />
      
      <FooterPages/>
    </div>
  );
};

export default Home;
