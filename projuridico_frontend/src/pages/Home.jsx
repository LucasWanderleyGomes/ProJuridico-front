import React from 'react'
import Hero from "../components/Hero";
import Community from "../components/Community";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/Pages/Home.css";
import Box from "../components/Box";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Box />
     
      <main>
        
        <Community />
    
      </main>
    </div>
  );
};

export default Home;
