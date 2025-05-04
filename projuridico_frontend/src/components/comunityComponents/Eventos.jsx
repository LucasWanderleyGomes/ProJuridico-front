import React from 'react'
import api from '../../api'
import { useState, useEffect } from 'react'
import { IoPersonCircle } from "react-icons/io5";
// styles

import '../../styles/components/comunityStyles/EventosList.css'

const Posts = () => {
  const [postagens, setPostagens] = useState([])

  useEffect(() => {
    getPostagens()
  }, [])

  const getPostagens = () => {
    api.get('/api/v2/comunidades/1/eventos/')
      .then((res) => {setPostagens(res.data.results) ; console.log(res.data.results)})
      .catch((err) => alert("Erro ao buscar postagens: " + err))
  }

  return (
    <div className="postagens-container">
      
      <section className='criacao-de-postagem'>

        <form action="" method="post">
          <input type="text" name="" id="" />
          <textarea name="" id=""></textarea>
          <button type="submit">Publicar</button>
        </form>
        
      </section>
      {postagens.map((post) => (
        <div key={post.id} className="postagem-card">
          
          <div className='user-info'>
            <div className='box-infos'>
              <div id='profile-container'>
                  <IoPersonCircle className='profile-icon'/>
              </div>
              <p>{post.usuario?.username} </p>
              <p id='email-user'>{post.usuario?.email}</p>
            </div>
            <div className='box-data'>
              <p id='data-post'>Publicado em: {new Date(post.data_publicacao).toLocaleString()}</p>
              
            </div>
            
          </div>
          <h3 className='titulo-evento'>{post.titulo}</h3>
          <p className='conteudo-evento'>{post.conteudo}</p>
          {post.upload && (
            <div className='imagem-container'>
              <img className='imagens-post' src={post.upload} alt={`Imagem da postagem ${post.id}`} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          )}
          
        </div>
      ))}
    </div>
  )
}

export default Posts