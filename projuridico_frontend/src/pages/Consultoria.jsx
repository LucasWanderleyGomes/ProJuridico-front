import Header from "../components/Header"
import bg from "../assets/bgConsult.png"
import PageDecoration from '../components/PageDecoration'
import api from "../api"
import { useState, useEffect } from 'react'
import Consulta from "../components/Consulta"

const Consultoria = () => {

  const [consultoria, setConsultoria] = useState([])
  const [nome_cliente, setNomeCliente] = useState("")
  const [assunto, setAssunto] = useState("")
  const [descricao, setDescricao] = useState("")
  const [numProcesso, setNumProcesso] = useState("")

  useEffect( () => {
    getConsulta()
  }, [])


  const getConsulta = () =>{
      api.get("/api/v2/consultas/")
      .then((res) => (res.data))
      .then((data) => {setConsultoria(data.results) ; console.log(data.results)})
      .catch((error) => alert(error));
  }

  return (
    <div>
      <Header/>
      <PageDecoration sectionName={"Consultoria"} descricaoSection={"Resultados que refletem estratégia, técnica e comprometimento. Explore nosso portfólio de consultorias jurídicas e veja como transformamos desafios em soluções seguras, éticas e eficazes."} bg={bg}/>
      {consultoria.map((consulta) => <Consulta consulta={consulta} key={consulta.id}/> )}
    </div>
  )
}

export default Consultoria