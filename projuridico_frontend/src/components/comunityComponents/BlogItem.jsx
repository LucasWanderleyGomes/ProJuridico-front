import React from 'react'
import { IoPersonCircle } from "react-icons/io5";
import '../../styles/components/comunityStyles/BlogItem.css'

const BlogItem = ({blogItem}) => {
  return (
    <div className='container-post'>

      <div className='user-info'>
        <div className='box-infos'>
          <div className='profile-container'>
            <IoPersonCircle className='profile-icon'/>
          </div>
          <p>{blogItem.usuario?.username}</p>
          <p className='email-user'>{blogItem.usuario?.email}</p>
      
        </div>
       

        <div className='box-data'>
          <p id='data-post'>Publicado em:  {new Date(blogItem.criacao).toLocaleString()}</p>
        
        </div>
      </div>
      
      <p>{blogItem.titulo}</p>
      <p>{blogItem.descricao}</p>
        {blogItem.upload && (
            <div className='imagem-container'>
              <img className='imagens-post' src={blogItem.upload} alt={`Imagem da postagem ${blogItem.id}`} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
      )}

    </div>
  )
}

export default BlogItem