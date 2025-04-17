import React from 'react'
import "../styles/components/Processo.css"
import { MdFamilyRestroom } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { GoLaw } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";

const Processo = ({ processo, onDelete }) => {
  
  const handlegetIcon = (categoria) => {
    switch (categoria) {
      case 'Familia':
        return <MdFamilyRestroom className='icon-card'/>;
      case 'Empresas':
        return <IoMdBusiness className='icon-card'/>;
      case 'Criminal':
        return <GoLaw className='icon-card'/>;
      case 'Sociedade':
        return <IoIosPeople className='icon-card'/>;
      case 'Laboral':
        return <MdOutlineWork className='icon-card'/>;
      default:
        return null;
    }
  };

  return (
    <div className='processo-cont'>
      <div className='left-box-processo'>
        {handlegetIcon(processo.categoria)}
      </div>

      <div className='right-box-processo'>
        <div className='options-container'>
          <select className="form-select" aria-label="Default select example" id='select-dropdown'>
            <option defaultValue className='options-select'>. . .</option>
            <option value="1" className='options-select'>
              <button id='botao-deletar' onClick={() => onDelete(processo.id)}>Apagar</button>
            </option>
            <option value="2" className='options-select'>
              <button id='botao-deletar'>Esconder Processo</button>
            </option>
          </select>
        </div>
        
        <p id='categoria'>{processo.categoria}</p>
        <p id='titulo'>{processo.titulo}</p>
        <p id='descricao'>{processo.descricao}</p>
      </div>
    </div>
  )
}

export default Processo
