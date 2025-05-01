import React from 'react'

const BlogItem = ({blogItem}) => {
  return (
    <div>
      <ul>
        <li>{blogItem.titulo}</li>
        <li>{blogItem.descricao}</li>
        <li>{blogItem.criacao}</li>
        <li>{blogItem.usuario?.username}</li>
        <li>{blogItem.usuario?.email}</li>
      </ul>
    </div>
  )
}

export default BlogItem