import React from "react";
import "../styles/components/Consulta.css";
import { BiWorld } from "react-icons/bi";
import { IoMdBusiness } from "react-icons/io";
import { MdLockPerson, MdFamilyRestroom } from "react-icons/md";

/**
 * Retorna o ícone correspondente ao assunto da consulta.
 * Caso venha algo diferente do previsto, cai no ícone “mundo”.
 */
const getIconByAssunto = (assunto) => {
  const key = (assunto || "").toLowerCase();     // evita null / case-sensitive

  switch (key) {
    case "negocios":
    case "negócios":
      return <MdFamilyRestroom className="icon-cons" />;   // troque se quiser outro ícone
    case "empresa":
      return <IoMdBusiness className="icon-cons" />;
    case "profissao":
    case "profissão":
      return <IoMdBusiness className="icon-cons" />;
    case "pessoal":
      return <MdLockPerson className="icon-cons" />;
    default:
      return <BiWorld className="icon-cons" />;
  }
};

const Consulta = ({ consulta }) => {
  if (!consulta) return null;

  const { assunto, descricao, nome_cliente } = consulta;

  return (
    <div className="container-consulta">
      <ul className="lista-info-consulta">
        <li id="assunto">{assunto}</li>

        
        <li className="descricao">
          "{descricao?.slice(0, 200)}
          {descricao && descricao.length > 200 ? "…" : ""}"
        </li>

        <li id="container-nome-icone">
          <p>{nome_cliente}</p>
          {getIconByAssunto(assunto)}
        </li>
      </ul>
    </div>
  );
};

export default Consulta;
