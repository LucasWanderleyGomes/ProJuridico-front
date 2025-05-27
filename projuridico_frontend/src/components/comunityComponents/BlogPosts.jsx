import React, { useState, useEffect, useRef, useCallback } from 'react';
import api from '../../api';
import BlogItem from './BlogItem'; 
import { IoMdImages } from 'react-icons/io';

// styles
import '../../styles/components/comunityStyles/EventosList.css';
import '../../styles/components/comunityStyles/BlogList.css';

const BlogPosts = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const observer = useRef();

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState(null);
    const imagemInputRef = useRef(null);

    const fetchBlogPosts = useCallback(async (url) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(url);

            setBlogPosts((prevPosts) => {
                const newPosts = response.data.results.filter(
                    (newPost) => !prevPosts.some((existingPost) => existingPost.id === newPost.id)
                );
                return [...prevPosts, ...newPosts];
            });

            setNextPageUrl(response.data.next);
        } catch (err) {
            setError('Erro ao carregar posts do blog. Tente novamente mais tarde.');
            console.error('Erro ao buscar blog posts:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBlogPosts('/api/v2/comunidades/1/blogPosts/');
    }, [fetchBlogPosts]);

    const lastPostElementRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && nextPageUrl) {
                    fetchBlogPosts(nextPageUrl);
                }
            }, {
                rootMargin: '0px 0px 200px 0px',
            });

            if (node) observer.current.observe(node);
        },
        [loading, nextPageUrl, fetchBlogPosts]
    );

    const handleDeletePostagem = (id) => {
        api.delete(`/api/v2/comunidades/1/blogPosts/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert(`Postagem deletada com sucesso`);
                    setBlogPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
                } else {
                    alert(`Erro ao deletar a postagem`);
                }
            })
            .catch((error) => {
                setError(error);
                alert('Erro ao tentar deletar a postagem');
                console.log(error);
            });
    };

    const handleImagemChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImagem(e.target.files[0]);
        }
    };

    const handlePostBlog = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descricao', descricao);
        formData.append('ativo', true);
        if (imagem) {
            formData.append('upload', imagem);
        }

        api.post(`/api/v2/comunidades/1/blogPosts/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                if (res.status === 201) {
                    alert(`Post - ${res.data.titulo} - criado com sucesso`);
                    setTitulo('');
                    setDescricao('');
                    setImagem(null);
                    if (imagemInputRef.current) {
                        imagemInputRef.current.value = '';
                    }
                    setBlogPosts((prevPosts) => [res.data, ...prevPosts]);
                    setNextPageUrl(null); 
                } else {
                    alert('Não foi possível criar o post! Tente novamente mais tarde.');
                }
            })
            .catch((err) => {
                setError(err);
                alert('Erro ao criar postagem');
                console.log(err);
            });
    };

    const handleLike = async (blogPostId) => {
        try {
            const res = await api.post(`/api/v2/comunidades/1/blogPosts/${blogPostId}/like/`);
            const { liked, likes_count } = res.data;

            setBlogPosts((prev) =>
                prev.map((post) =>
                    post.id === blogPostId
                        ? { ...post, likes_count, has_liked: liked }
                        : post
                )
            );
        } catch (error) {
            console.error('Erro ao curtir/descurtir', error);
        }
    };

    return (
        <div className='postagens-container'>
            <div className='adicionar-evento-container'>
                <p id='textinho-cima-form'>Adicione um post ao blog da comunidade!</p>
                <form onSubmit={handlePostBlog} className='form-criar-evento'>
                    <div className='content-inputs'>
                        <div className='imagem-titulo'>
                            <input
                                placeholder='No que você está pensando agora?'
                                type='text'
                                name='titulo'
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                className='inputs-form-event-blog'
                                autoComplete='off'
                            />
                        </div>
                        <div className='img-descricao'>
                            <input
                                placeholder='Descrição do seu post'
                                type='text'
                                name='descricao'
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                className='inputs-form-event-blog'
                                autoComplete='off'
                            />
                            <input
                                type='file'
                                name='upload'
                                onChange={handleImagemChange}
                                ref={imagemInputRef}
                                style={{ display: 'none' }}
                            />
                            <button
                                id='file-blog'
                                type='button'
                                className='botao-escolher-arquivo'
                                onClick={() => imagemInputRef.current.click()}
                            >
                                <IoMdImages id='icone-img' />
                            </button>
                        </div>
                    </div>
                    <div className='container-botao'>
                        <button id='botao-env-evento' type='submit'>Adicionar Post</button>
                    </div>
                </form>
            </div>

            <aside className='componente-nav'>
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

                {blogPosts.map((blogItem, index) => {
                   
                    const isLastPost = blogPosts.length === index + 1 && nextPageUrl;
                    return (
                        <BlogItem
                            key={blogItem.id}
                            blogItem={blogItem}
                            onDelete={() => handleDeletePostagem(blogItem.id)}
                            onLike={() => handleLike(blogItem.id)}
                            // Passa a ref para o último item
                            ref={isLastPost ? lastPostElementRef : null}
                        />
                    );
                })}

                {loading && <p style={{ textAlign: 'center', margin: '20px' }}>Carregando mais posts...</p>}
                {!loading && !nextPageUrl && blogPosts.length > 0 && (
                    <p style={{ textAlign: 'center', margin: '20px', color: '#666' }}>Você chegou ao final dos posts!</p>
                )}
                {!loading && !error && blogPosts.length === 0 && (
                    <p style={{ textAlign: 'center', margin: '20px', color: '#666' }}>Nenhum post encontrado.</p>
                )}
            </aside>
        </div>
    );
};

export default BlogPosts;