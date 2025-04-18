import React from 'react'

const Consulta = ({consulta}) => {
  return (
    <div>
        <ul>
            <li>{consulta.nome_cliente}</li>
            <li>{consulta.assunto}</li>
            <li>{consulta.descricao}</li>
            <li>{consulta.numero_processo}</li>
        </ul>

    </div>
  )
}

export default Consulta