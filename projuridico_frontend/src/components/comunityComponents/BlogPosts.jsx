import React, { useState, useEffect, useRef } from 'react'
import api from '../../api'
import BlogItem from './BlogItem'
import { IoMdImages } from "react-icons/io";
// styles
import '../../styles/components/comunityStyles/EventosList.css'
import '../../styles/components/comunityStyles/BlogList.css'

const BlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [imagem, setImagem] = useState(null)
  const imagemInputRef = useRef(null)
  const [error, setError] = useState("")

  useEffect(() => {
    getBlogPosts()
  }, [])

  const getBlogPosts = () => {
    api.get("http://127.0.0.1:8000/api/v2/comunidades/1/blogPosts/")
      .then((res) => {
        setBlogPosts(res.data.results)
      })
      .catch((error) => {
        setError(error)
        alert("Erro ao buscar blog posts")
      })
  }

  const handleDeletePostagem = (id) => {
    api.delete(`/api/v2/comunidades/1/blogPosts/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert(`Postagem deletada com sucesso`)
          getBlogPosts()
        }
      })
      .catch((error) => {
        console.log(error)
        alert("Erro ao tentar deletar a postagem")
      })
  }

  const handleImagemChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagem(e.target.files[0])
    }
  }

  const handlePostBlog = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('titulo', titulo)
    formData.append('descricao', descricao)
    formData.append('ativo', true)
    if (imagem) {
      formData.append('upload', imagem)
    }

    api.post(`/api/v2/comunidades/1/blogPosts/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        if (res.status === 201) {
          alert(`Post - ${res.data.titulo} - criado com sucesso`)
          setTitulo("")
          setDescricao("")
          setImagem(null)
          getBlogPosts()
        }
      })
      .catch((err) => {
        setError(err)
        alert("Erro ao criar postagem")
        console.log(err)
      })
  }

  return (
    <div className='postagens-container'>
      <div className='adicionar-evento-container'>
        <p id='textinho-cima-form'>Adicione um post ao blog da comunidade!</p>
        <form onSubmit={handlePostBlog} className='form-criar-evento'>
          <div className='content-inputs'>
              <div className='imagem-titulo'>
                <input
                  placeholder='No que você está pensando agora?'
                  
                  type='text'
                  name='titulo'
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  className='inputs-form-event-blog'
                  autoComplete="off"
                />
                
              </div>
              <div className='img-descricao'>
                 <input

                
                type='text'
                name='descricao'
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className='inputs-form-event-blog'
                autoComplete="off"
              />
              
                <input
                  
                  type="file"
                  name="upload"
                  onChange={handleImagemChange}
                  
                  ref={imagemInputRef}
                  style={{ display: 'none' }}
                />
                <button
                  id='file-blog'
                  type="button"
                  className="botao-escolher-arquivo"
                  onClick={() => imagemInputRef.current.click()}
                >
                  <IoMdImages id='icone-img'/>
                </button>
              </div>
             
          </div>
          
          <div className='container-botao'>
            <button id='botao-env-evento' type='submit'>Adicionar Post</button>
          </div>
        </form>
      </div>

      <aside className='componente-nav'>
        {blogPosts.map((blogItem) => (
          <BlogItem
            key={blogItem.id}
            blogItem={blogItem}
            onDelete={() => handleDeletePostagem(blogItem.id)}
          />
        ))}
      </aside>
    </div>
  )
}

export default BlogPosts
