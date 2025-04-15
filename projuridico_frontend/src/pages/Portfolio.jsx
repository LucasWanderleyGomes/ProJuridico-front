import React from 'react'
import Header from "../components/Header"
import Processo from "../components/Processo"
import api from "../api"
import { useState, useEffect } from 'react'

const Portfolio = () => {

  const [portfolio, setPortfolio] = useState([])
  const [categoria, setCategoria] = useState("")
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")

  useEffect(() => {
      getProcesso()
  }, [] )

  const getProcesso = () =>{
      api.get("/api/v2/processos/")
      .then((res) => res.data)
      .then((data) => {setPortfolio(data.results) ; console.log(data.results)})
      .catch((err) => alert(err));
  }

  const handleDeleteProcesso = (id) =>{
      api.delete(`/api/v2/processos/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert(`Processo ${res.data.id} deletado com sucesso!`)
        } else {
          alert("Erro ao deletar o processo selecionado.")
        }
        getProcesso();
      }).catch((error) => alert(error));
      
  }

  const handleCriarProcesso = (e) =>{
    e.preventDefault();
    api.post(`/api/v2/processos/`, {categoria, titulo, descricao})
    .then((res) => {
      if (res.status === 201) {
        alert(`Processo ${res.data.id} criado e adicionado ao seu portfolio.`)
      } else {
        alert("Erro ao criar um processo para seu portfolio.")
      }
      getProcesso();
    })
    .catch((error) => alert(error));
    
  }


  return (
    <>
      <Header/>
      <h1>Portfolio</h1>
      <div>
        {portfolio.map((processo) => <Processo processo={processo} onDelete={handleDeleteProcesso} key={processo.id}/> )}
      </div>
      
      <h3>Adicionar um processo</h3>
      <form onSubmit={handleCriarProcesso} className='form-processo'>
        <label htmlFor="categoria">Categoria</label>
        <input 
          id='categoria'
          type='text'
          name='text'
          required
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
          />
          <label htmlFor="titulo">Categoria</label>
         <input
          
          id='titulo'
          type='text'
          name='titulo'
          required
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
        />
        <label htmlFor="descricao">Descricao</label>
         <textarea    
          id='descricao'
          name='descricao'
          required
          onChange={(e) => setDescricao(e.target.value)}
          value={descricao}
        ></textarea>
        <button type='submit' value='submit'>Criar</button>
      </form>
    </>
  )
}

export default Portfolio