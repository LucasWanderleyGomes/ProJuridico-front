import React from 'react'
import api from '../../api'
import { useState, useEffect } from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getCurrentUser } from '../GetUserConst';

import { FaEyeSlash } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { GoAlertFill } from "react-icons/go";
// styles

import '../../styles/components/comunityStyles/EventosList.css'

const Posts = () => {
  const [eventos, setEventos] = useState([])
  const currentUser = getCurrentUser()
  

  

  useEffect(() => {
    getEventos()
  }, [])

  const getEventos = () => {
    api.get('/api/v2/comunidades/1/eventos/')
      .then((res) => {setEventos(res.data.results) ; console.log(res.data.results)})
      .catch((err) => alert("Erro ao buscar eventos: " + err))
  }

  const handleDeleteEvento = (id) => {
    api.delete(`/api/v2/comunidades/1/eventos/${id}/`)
    .then((res) => {
      if(res.status === 204){
        alert(`Evento ${res.data.id} deletado com sucesso`)
      } else {
        alert(`Erro ao deletar o evento`)
      }
      getEventos()
    })
    .catch((error) => alert(error))
  }

  return (
    <div className="postagens-container">
      
      {/* <section className='criacao-de-postagem'>

        <form action="" method="post">
          <input type="text" name="" id="" />
          <textarea name="" id=""></textarea>
          <button type="submit">Publicar</button>
        </form>
        
      </section> */}
      {eventos.map((post) => (
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
              <div class="dropdown" id='box-botao-menu' >
                <a id='botao-opcoes-eventos' class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  < BsThreeDotsVertical className='icone-tres-pontos-eventos'/>
                </a>

                <ul class="dropdown-menu" id='menu-postagem'>
                  <li><a class="dropdown-item" href="#"><FaEyeSlash/>Ocultar publicação</a></li>
                  <li ><a id='link-ruim' class="dropdown-item" href="#"><GoAlertFill className='icones-ruins-menu'/>Denunciar publicação</a></li>
                  {currentUser?.user_id === post.usuario?.id && (
                    <li>
                      <button  onClick={() => handleDeleteEvento(post.id)} id='link-ruim-button' class="dropdown-item" href="#"><MdDelete id='trash-menu-ev' className='icones-ruins-menu'/>Apagar publicação
                      </button>
                    </li> 
                  )}
                  

                  


                </ul>
            </div>
            </div>
            
          </div>
          <h3 className='titulo-evento'>{post.titulo}</h3>
          <p className='conteudo-evento'>{post.conteudo}</p>
          {post.upload && (
            <div className='imagem-container'>
              <img className='imagens-post' src={post.upload} alt={`Imagem da postagem ${post.id}`}  />
            </div>
          )}
          
        </div>
      ))}
    </div>
  )
}

export default Posts