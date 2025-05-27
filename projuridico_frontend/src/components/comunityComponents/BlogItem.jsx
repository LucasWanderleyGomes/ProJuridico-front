import React, { forwardRef } from 'react'; 
import { IoPersonCircle } from 'react-icons/io5';
import '../../styles/components/comunityStyles/BlogItem.css';
import { getCurrentUser } from '../GetUserConst';

import { FaEyeSlash } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { GoAlertFill } from 'react-icons/go';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { IoHeart } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';


const BlogItem = forwardRef(({ blogItem, onDelete, onLike }, ref) => {
    const currentUser = getCurrentUser();

    return (
        
        <div className='container-post' ref={ref}>
            <div className='user-info'>
                <div className='box-infos'>
                    <div className='profile-container'>
                        <IoPersonCircle className='profile-icon' />
                    </div>
                    <p>{blogItem.usuario?.username}</p>
                    <p className='email-user'>{blogItem.usuario?.email}</p>
                </div>

                <div className='box-data'>
                    <p id='data-post'>Publicado em: {new Date(blogItem.criacao).toLocaleString()}</p>
                    <div className='dropdown' id='box-botao-menu'>
                        <a id='botao-opcoes-eventos' className='btn btn-secondary dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            <BsThreeDotsVertical className='icone-tres-pontos-eventos' />
                        </a>

                        <ul className='dropdown-menu' id='menu-postagem'>
                            <li><a className='dropdown-item' href='#'><FaEyeSlash />Ocultar publicação</a></li>
                            <li><a id='link-ruim' className='dropdown-item' href='#'><GoAlertFill className='icones-ruins-menu' />Denunciar publicação</a></li>
                            {currentUser?.user_id === blogItem.usuario?.id && (
                                <li>
                                    <button onClick={() => onDelete(blogItem.id)} id='link-ruim-button' className='dropdown-item'>
                                        <MdDelete id='trash-menu-ev' className='icones-ruins-menu' />Apagar publicação
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <p>{blogItem.titulo}</p>
            <p>{blogItem.descricao}</p>
            {blogItem.upload && (
                <div className='imagem-container'>
                    <img className='imagens-post' src={blogItem.upload} alt={`Imagem da postagem ${blogItem.id}`} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
            <div className='cont-likes'>
                {blogItem.has_liked ? (
                    <IoHeart
                        className='icone-like'
                        onClick={() => onLike(blogItem.id)}
                    />
                ) : (
                    <IoHeartOutline
                        className='icone-like'
                        onClick={() => onLike(blogItem.id)}
                    />
                )}
                {blogItem.likes_count}
            </div>
        </div>
    );
});

export default BlogItem;