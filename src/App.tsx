import React from 'react';

import './App.css';
import CreateUser from './components/CreateUser';

const App: React.FC = () => {
  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <CreateUser />
    </div>
  );
};

export default App;