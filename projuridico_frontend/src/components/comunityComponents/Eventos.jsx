import React from 'react'
import api from '../../api'
import { useState, useEffect } from 'react'
// styles

import '../../styles/components/comunityStyles/EventosList.css'

const Posts = () => {
  const [postagens, setPostagens] = useState([])

  useEffect(() => {
    getPostagens()
  }, [])

  const getPostagens = () => {
    api.get('/api/v2/comunidades/1/postagens/')
      .then((res) => setPostagens(res.data.results))
      .catch((err) => alert("Erro ao buscar postagens: " + err))
  }

  return (
    <div className="postagens-container">
      <h2>Eventos da Comunidade</h2>
      {postagens.map((post) => (
        <div key={post.id} className="postagem-card">
          <h3>{post.titulo}</h3>
          <p>{post.conteudo}</p>
          <small>Publicado em: {new Date(post.data_publicacao).toLocaleString()}</small>
          <br />
          {post.usuario?.username} ({post.usuario?.email})
        </div>
      ))}
    </div>
  )
}

export default Posts