import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>ProJurídico</h1>
      <p>Venha fazer parte da nossa comunidade e nos ajude a crescer!</p>
    </header>
  );
};

export default Header;