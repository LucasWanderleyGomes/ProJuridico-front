
import react from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// importando os componentes referentes às páginas =-=-=-=-

import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Erro404 from "./pages/Erro404"
import Home from "./pages/Home"
import Comunidade from "./pages/Comunidade"
import Consultoria from "./pages/Consultoria"
import Portfolio from "./pages/Portfolio"
import Contato from "./pages/Contato"
import ForgotPassword from './pages/ForgotPassword'
import ConfirmPasswordRed from "./pages/ConfirmPasswordRed"
import PainelAdmin from "./pages/PainelAdmin"
import ComunidadeBlog from './pages/ComunidadeBlog'

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
          path="/home" 
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
          path="/forgot-password"
          element={
            <ForgotPassword />
          }
        />

        <Route
          path="/confirm-credencials"
          element={
            <ConfirmPasswordRed />
          }
        />

        <Route
          path="/logout"
          element={
            <Logout />
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
          path="/portfolio"
          element = {
            <Portfolio />
          }
        />

         <Route 
          path="/consultoria"
          element = {
            <Consultoria />
          }
        />

        <Route 
          path="/comunidade/eventos" 
          element={
            <ProtectedRoute>
              <Comunidade />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/comunidade/blog" 
          element={
            <ProtectedRoute>
              <ComunidadeBlog />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/contato" 
          element={
            <Contato/>
          } 
        />
        
        <Route 
          path="/painel-admin"
          element={<PainelAdmin />}
        />


      </Routes>
    </BrowserRouter>
  )
}

export default App
