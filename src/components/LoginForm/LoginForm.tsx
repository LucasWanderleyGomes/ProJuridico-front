import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import apiV1 from '../../apiV1';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await apiV1.post('/auth/login/', formData);
      
      // Armazena o token no localStorage
      localStorage.setItem('token', response.data.token);
      
      // Redireciona para a página principal após o login
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Email ou senha inválidos');
      console.error('Erro no login:', error);
    }
  };

  return (
    <div className={styles.loginForm}>
      <h2>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>
        <button type="submit">Entrar</button>
        <p className={styles.forgotPassword}>Esqueci minha senha</p>
        <p className={styles.createAccount}>
          Não possui uma conta? <a href="/signup">Criar conta aqui.</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;