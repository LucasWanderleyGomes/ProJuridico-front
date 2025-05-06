import React from 'react'
import api from '../../api'
import { useState, useEffect } from 'react'

import BlogItem from './BlogItem'
//styles

import '../../styles/components/comunityStyles/BlogList.css'

const BlogPosts = () => {

  const [blogPosts, setBlogPosts] = useState([])
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [criacao, setCriacao] = useState("")
  const [usuario, setUsuario] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    getBlogPosts()
  }, [])

  

  const getBlogPosts = () =>{
    api.get("http://127.0.0.1:8000/api/v2/comunidades/1/blogPosts/")
        .then((res) => res.data)
        .then((data) => {
            setBlogPosts(data.results);
            console.log(data.results);
        })
        .catch((error) => {
            setError(error);
            alert(error);
        })
  }

  const handleDeletePostagem = (id) => {
    api.delete(`/api/v2/comunidades/1/blogPosts/${id}/`)
      .then((res) => {
        if (res.status === 200) {
          alert(`Postagem deletada com sucesso`)
          getBlogPosts()
        } else {
          alert(`Erro ao deletar a postagem`)
        }
      })
      .catch((error) => {
        console.log(error)
        alert("Erro ao tentar deletar a postagem")
      })
  }


  return (
    <aside className='componente-nav'>
        {blogPosts.map((blogItem) => <BlogItem key={blogItem.id} blogItem={blogItem} onDelete={handleDeletePostagem}/> )}
    </aside>
  )
}

export default BlogPosts