import React from 'react'
import "../styles/components/Consulta.css"
import { BiWorld } from "react-icons/bi";
import { IoMdBusiness } from "react-icons/io";
import { MdLockPerson } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
const Consulta = ({consulta}) => {

   const handlegetIcon = () => {
      switch (consulta.assunto) {
        case 'Negocios':
          return <MdFamilyRestroom className='icon-cons'/>;
        case 'Empresa':
            return <IoMdBusiness className='icon-cons'/>;
        case 'Profissao':
          return <IoMdBusiness className='icon-cons'/>;
        case 'Pessoal':
          return <MdLockPerson className='icon-cons'/>;
        default:
          return < BiWorld className='icon-cons'/>;
      }
    };

  return (
    <div className='container-consulta'>

      <ul className='lista-info-consulta'>

          <li id='assunto'>{consulta.assunto}</li>
          <li>"{consulta.descricao}"<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li id='container-nome-icone'>
            <p>{consulta.nome_cliente}
            </p>
            {handlegetIcon()}
          </li>
              
      </ul>

      {/* <p><li>{consulta.numero_processo}</li></p> */}
    </div>
  )
}

export default Consulta