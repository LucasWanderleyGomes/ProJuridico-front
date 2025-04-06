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
      
      <main>
        <Hero />
        <Community />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
