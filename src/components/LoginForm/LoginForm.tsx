import React from 'react';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  return (
    <div className={styles.loginForm}>
      <h2>Login</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required />
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