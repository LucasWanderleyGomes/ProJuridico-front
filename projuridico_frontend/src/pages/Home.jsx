import React from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import Community from "../components/Community";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/Pages/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <main>
        
        <Community />
    
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
