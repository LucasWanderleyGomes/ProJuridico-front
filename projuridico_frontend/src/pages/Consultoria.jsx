import React from 'react'
import Header from "../components/Header"
import bg from "../assets/bgConsult.png"
import PageDecoration from '../components/PageDecoration'

const Consultoria = () => {
  return (
    <div>
      <Header/>
      <PageDecoration sectionName={"Consultoria"} descricaoSection={"Resultados que refletem estratégia, técnica e comprometimento. Explore nosso portfólio de consultorias jurídicas e veja como transformamos desafios em soluções seguras, éticas e eficazes."} bg={bg}/>
      <p>Consultoria</p>
    </div>
  )
}

export default Consultoria