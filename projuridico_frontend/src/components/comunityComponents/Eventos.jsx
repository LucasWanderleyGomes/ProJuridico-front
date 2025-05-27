import React, { useState, useEffect, useRef, useCallback } from 'react';
import api from '../../api';
import { IoPersonCircle } from 'react-icons/io5';
import { getCurrentUser } from '../GetUserConst';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaEyeSlash } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { GoAlertFill } from 'react-icons/go';
import { IoHeart } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import { IoMdImages } from 'react-icons/io';

import '../../styles/components/comunityStyles/EventosList.css';

const Posts = () => {
    const [eventos, setEventos] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const observer = useRef();

    const currentUser = getCurrentUser();
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [imagem, setImagem] = useState(null);
    const imagemInputRef = useRef(null);

    const fetchEventos = useCallback(async (url) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(url);
            
            
            setEventos((prevEventos) => {
                const newEvents = response.data.results.filter(
                    (newEvent) => !prevEventos.some((existingEvent) => existingEvent.id === newEvent.id)
                );
                return [...prevEventos, ...newEvents];
            });
            
            setNextPageUrl(response.data.next);
        } catch (err) {
            setError('Erro ao carregar eventos. Tente novamente mais tarde.');
            console.error('Erro ao buscar eventos:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchEventos('/api/v2/comunidades/1/eventos/');
    }, [fetchEventos]);

    const lastPostElementRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && nextPageUrl) {
                    fetchEventos(nextPageUrl);
                }
            }, {
                rootMargin: '0px 0px 200px 0px',
            });

            if (node) observer.current.observe(node);
        },
        [loading, nextPageUrl, fetchEventos]
    );

    const handleDeleteEvento = (id) => {
        api.delete(`/api/v2/comunidades/1/eventos/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert(`Evento deletado com sucesso`);
                } else {
                    alert(`Erro ao deletar o evento`);
                }
                setEventos([]);
                setNextPageUrl(null);
                fetchEventos('/api/v2/comunidades/1/eventos/');
            })
            .catch((error) => {
                setError(error);
                alert(error);
                console.log(error);
            });
    };

    const handleImagemChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImagem(e.target.files[0]);
        }
    };

    const handlePostEvento = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('conteudo', conteudo);
        formData.append('ativo', true);
        if (imagem) {
            formData.append('upload', imagem);
        }

        api.post(`/api/v2/comunidades/1/eventos/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                if (res.status === 201) {
                    alert(`Evento - ${res.data.titulo} - criado com sucesso`);
                    setTitulo('');
                    setConteudo('');
                    setImagem(null);
                    if (imagemInputRef.current) {
                        imagemInputRef.current.value = '';
                    }
                } else {
                    alert('Não foi possível criar um evento! Tente novamente mais tarde.');
                }
                setEventos([]);
                setNextPageUrl(null);
                fetchEventos('/api/v2/comunidades/1/eventos/');
            })
            .catch((err) => {
                setError(err);
                alert(`${err}`);
                console.log(err);
            });
    };

    const handleToggleLike = async (postId) => {
        try {
            const res = await api.post(`/api/v2/comunidades/1/eventos/${postId}/like/`);
            const { liked, likes_count } = res.data;

            setEventos((prev) =>
                prev.map((post) =>
                    post.id === postId
                        ? { ...post, likes_count, has_liked: liked }
                        : post
                )
            );
        } catch (error) {
            console.error('Erro ao curtir/descurtir', error);
        }
    };

    return (
        <div className="postagens-container">
            <div className='adicionar-evento-container'>
                <p id='textinho-cima-form'>Adicione um evento à nossa comunidade!</p>
                <form onSubmit={handlePostEvento} className='form-criar-evento'>
                    <div className='imagem-titulo'>
                        <input
                            placeholder='Titulo do seu evento'
                            id='titulo-form'
                            type='text'
                            name='text'
                            autoComplete="off"
                            onChange={(e) => setTitulo(e.target.value)}
                            value={titulo}
                            className='inputs-form-event'
                        />
                        <input
                            type="file"
                            id="imagem-form"
                            name="upload"
                            onChange={handleImagemChange}
                            className='inputs-form-event'
                            ref={imagemInputRef}
                            style={{ display: 'none' }}
                        />
                        <button
                            type="button"
                            className="botao-escolher-arquivo"
                            onClick={() => imagemInputRef.current.click()}
                        >
                            <IoMdImages id='icone-img' />
                        </button>
                    </div>
                    <div className='imagem-enviar'>
                        <input
                            placeholder='Descreva seu evento'
                            id='descricao-form'
                            type='text'
                            name='conteudo'
                            autoComplete="off"
                            onChange={(e) => setConteudo(e.target.value)}
                            value={conteudo}
                            className='inputs-form-event'
                        />
                    </div>
                    <div className='container-botao'>
                        <button id='botao-env-evento' type='submit' value='submit'>Adicionar evento</button>
                    </div>
                </form>
            </div>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            {eventos.map((post, index) => {
                const isLastPost = eventos.length === index + 1 && nextPageUrl;
                return (
                    <div key={post.id} className="postagem-card" ref={isLastPost ? lastPostElementRef : null}>
                        <div className='user-info'>
                            <div className='box-infos'>
                                <div id='profile-container'>
                                    <IoPersonCircle className='profile-icon' />
                                </div>
                                <div className='email-user-event'>
                                    <p id='user-nickname'>{post.usuario?.username} </p>
                                    <p id='email-user'>{post.usuario?.email}</p>
                                </div>
                            </div>
                            <div className='box-data'>
                                <p id='data-post'>Publicado em: {new Date(post.data_publicacao).toLocaleString()}</p>
                                <div className="dropdown" id='box-botao-menu' >
                                    <a id='botao-opcoes-eventos' className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <BsThreeDotsVertical className='icone-tres-pontos-eventos' />
                                    </a>
                                    <ul className="dropdown-menu" id='menu-postagem'>
                                        <li><a className="dropdown-item" href="#"><FaEyeSlash />Ocultar publicação</a></li>
                                        <li><a id='link-ruim' className="dropdown-item" href="#"><GoAlertFill className='icones-ruins-menu' />Denunciar publicação</a></li>
                                        {currentUser?.user_id === post.usuario?.id && (
                                            <li>
                                                <button onClick={() => handleDeleteEvento(post.id)} id='link-ruim-button' className="dropdown-item" href="#"><MdDelete id='trash-menu-ev' className='icones-ruins-menu' />Apagar publicação
                                                </button>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h3 className='titulo-evento'>{post.titulo}</h3>
                        <p className='conteudo-evento'>{post.conteudo}</p>
                        {post.upload && (
                            <div className='imagem-container'>
                                <img className='imagens-post' src={post.upload} alt={`Imagem da postagem ${post.id}`} />
                            </div>
                        )}
                        <div className='cont-likes'>
                            {post.has_liked ? (
                                <IoHeart
                                    className='icone-like'
                                    onClick={() => handleToggleLike(post.id)}
                                />
                            ) : (
                                <IoHeartOutline
                                    className='icone-like'
                                    onClick={() => handleToggleLike(post.id)}
                                />
                            )}
                            {post.likes_count}
                        </div>
                    </div>
                );
            })}
            {loading && <p style={{ textAlign: 'center', margin: '20px' }}>Carregando mais eventos...</p>}
            {!loading && !nextPageUrl && eventos.length > 0 && (
                <p style={{ textAlign: 'center', margin: '20px', color: '#666' }}>Você chegou ao final dos eventos!</p>
            )}
            {!loading && !error && eventos.length === 0 && (
                <p style={{ textAlign: 'center', margin: '20px', color: '#666' }}>Nenhum evento encontrado.</p>
            )}
        </div>
    );
};

export default Posts;