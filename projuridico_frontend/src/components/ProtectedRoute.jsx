import { Navigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"
import api from '../api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'
import { useState, useEffect } from 'react'

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null)

  useEffect(() => {

    const auth = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN)

      if (!token) {
        setIsAuthorized(false)
        return
      }

      try {
        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 1000

        if (tokenExpiration < now) {
          await refreshToken()
        } else {
          setIsAuthorized(true)
        }
      } catch (error) {
        console.log("Erro ao decodificar token", error)
        setIsAuthorized(false)
      }
    }

    const refreshToken = async () => {
      const refresh = localStorage.getItem(REFRESH_TOKEN)
      try {
        const response = await api.post("/api/v2/auth/jwt/refresh/", { refresh })
        if (response.status === 200) {
          localStorage.setItem(ACCESS_TOKEN, response.data.access)
          setIsAuthorized(true)
        } else {
          setIsAuthorized(false)
        }
      } catch (error) {
        console.log("Erro ao renovar token:", error)
        setIsAuthorized(false)
      }
    }

    auth()
  }, [])

  if (isAuthorized === null) {
    return <div>Carregando...</div>
  }

  return isAuthorized ? children : <Navigate to="/login" />
}

export default ProtectedRoute
