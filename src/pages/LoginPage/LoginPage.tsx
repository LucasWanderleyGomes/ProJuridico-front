import React from 'react';
import Header from '../../components/Header/Header';
import styles from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.loginPage}>
      <Header />
      <LoginForm />
    </div>
  );
};

export default LoginPage;