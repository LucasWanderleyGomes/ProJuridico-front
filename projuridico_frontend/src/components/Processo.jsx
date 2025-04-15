import React from 'react'

const Processo = ({processo, onDelete}) => {


  return (
    <div className='processo-cont'>
        <p>{processo.categoria}</p>
        <p>{processo.titulo}</p>
        <p>{processo.descricao}</p>
        <button id='botao-deletar' onClick={() => onDelete(processo.id)}>Apagar</button>
    </div>
  )
}

export default Processo