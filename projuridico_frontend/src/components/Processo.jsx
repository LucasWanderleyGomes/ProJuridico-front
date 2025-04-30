import React from 'react'
import "../styles/components/Processo.css"
import { MdFamilyRestroom } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { GoLaw } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

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
      <div className='cima-processo'>
      
        <button id='button-modal' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <BsThreeDots id='three-dots'/>
        </button>

        
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Escolha a ação para o processo {processo.id}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <button className='botoes-inside-mod' id='botao-deletar' onClick={() => onDelete(processo.id)}><FaTrash id='trash'/> <p>Apagar processo</p></button>
                
                <button className='botoes-inside-mod' id='botao-esconder'><FaEyeSlash id='closed-eye'/><p>Esconder processo</p></button>
                
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            
              </div>
            </div>
          </div>
        </div>
            
          
        
      </div>
      <div className='baixo-processo'>
        <div className='left-box-processo'>
          {handlegetIcon(processo.categoria)}
        </div>
        <div className='right-box-processo'>   
          <p id='categoria'>{processo.categoria}</p>
          <p id='titulo'>{processo.titulo}</p>
          <p id='descricao'>{processo.descricao}</p>
        </div>
      </div>
      

      
    </div>
  )
}

export default Processo
