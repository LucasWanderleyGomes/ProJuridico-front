// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({ setIsAuthenticated }) {
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await fetch('http://localhost:3000/api/v2/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, senha })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         sessionStorage.setItem('token', data.token);
//         setIsAuthenticated(true);
//         navigate('/home');
//       } else {
//         setError(data.message || 'Erro ao fazer login');
//       }
//     } catch (error) {
//       setError('Erro ao conectar com o servidor');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center align-items-center min-vh-100">
//         <div className="col-md-6 col-lg-4">
//           <div className="card shadow">
//             <div className="card-body p-5">
//               <h2 className="text-center mb-4">Login</h2>
//               {error && (
//                 <div className="alert alert-danger" role="alert">
//                   {error}
//                 </div>
//               )}
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="senha" className="form-label">Senha</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="senha"
//                     value={senha}
//                     onChange={(e) => setSenha(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="d-grid gap-2">
//                   <button type="submit" className="btn btn-primary">Entrar</button>
//                   <a href="/cadastro" className="btn btn-outline-secondary">Criar Conta</a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login; 