
import './App.css';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
    
  //   const token = sessionStorage.getItem('token');
  //   setIsAuthenticated(!!token);
  //   setLoading(false);
  // }, []);

  // // Componente para proteger rotas que requerem autenticação
  // const PrivateRoute = ({ children }) => {
  //   if (loading) {
  //     return (
  //       <div className="d-flex justify-content-center align-items-center min-vh-100">
  //         <div className="spinner-border text-primary" role="status">
  //           <span className="visually-hidden">Carregando...</span>
  //         </div>
  //       </div>
  //     );
  //   }
  //   return isAuthenticated ? children : <Navigate to="/login" />;
  // };

  return (
    <>
    </>
    // <Router>
    //   <div className="app">
    //     {isAuthenticated && <Navbar />}
    //     <div className="main-content">
    //       <Routes>
    //         <Route path="/login" element={
    //           isAuthenticated ? <Navigate to="/home" /> : <Login setIsAuthenticated={setIsAuthenticated} />
    //         } />
    //         <Route path="/cadastro" element={
    //           isAuthenticated ? <Navigate to="/home" /> : <Cadastro />
    //         } />
    //         <Route path="/home" element={
    //           <PrivateRoute>
    //             <Home />
    //           </PrivateRoute>
    //         } />
    //         <Route path="/processos" element={
    //           <PrivateRoute>
    //             <Processos />
    //           </PrivateRoute>
    //         } />
    //         <Route path="/clientes" element={
    //           <PrivateRoute>
    //             <Clientes />
    //           </PrivateRoute>
    //         } />
    //         <Route path="/" element={<Navigate to="/home" />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
