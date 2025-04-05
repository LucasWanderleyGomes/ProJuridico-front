
import react from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

// importando os componentes referentes às páginas =-=-=-=-

import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Erro404 from "./pages/Erro404"
import Home from "./pages/Home"
import Comunidade from "./pages/Comunidade"

// importando os componentes das nossas rotas protegidas =-=-=-=-

import ProtectedRoute from "./components/ProtectedRoute"

function Logout(){
  localStorage.clear()
  return <Navigate to="/login"/>
}

function CadastroELogout(){
  localStorage.clear()
  return <Cadastro />
}

function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route 
          path="/" 
          element={
              <Home />
          } 
        />

        <Route
          path="/login"
          element={
            <Login/>
          }
        />

        <Route 
          path="/cadastro"
          element={
            <CadastroELogout />
          }
        />

        <Route 
          path="*"
          element = {
            <Erro404 />
          }
        />

        <Route 
          path="/comunidade" 
          element={
            <ProtectedRoute>
              <Comunidade />
            </ProtectedRoute>
          } 
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
