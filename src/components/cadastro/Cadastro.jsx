// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Cadastro() {
//   const [formData, setFormData] = useState({
//     nome: '',
//     sobrenome: '',
//     email: '',
//     senha: '',
//     confirmarSenha: '',
//     telefone: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (formData.senha !== formData.confirmarSenha) {
//       setError('As senhas não coincidem');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3000/api/v2/auth/cadastro', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         navigate('/login');
//       } else {
//         setError(data.message || 'Erro ao criar conta');
//       }
//     } catch (error) {
//       setError('Erro ao conectar com o servidor');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center align-items-center min-vh-100">
//         <div className="col-md-8 col-lg-6">
//           <div className="card shadow">
//             <div className="card-body p-5">
//               <h2 className="text-center mb-4">Criar Conta</h2>
//               {error && (
//                 <div className="alert alert-danger" role="alert">
//                   {error}
//                 </div>
//               )}
//               <form onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label htmlFor="nome" className="form-label">Nome</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="nome"
//                       name="nome"
//                       value={formData.nome}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="sobrenome"
//                       name="sobrenome"
//                       value={formData.sobrenome}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label htmlFor="senha" className="form-label">Senha</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="senha"
//                       name="senha"
//                       value={formData.senha}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label htmlFor="confirmarSenha" className="form-label">Confirmar Senha</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="confirmarSenha"
//                       name="confirmarSenha"
//                       value={formData.confirmarSenha}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="telefone" className="form-label">Telefone</label>
//                   <input
//                     type="tel"
//                     className="form-control"
//                     id="telefone"
//                     name="telefone"
//                     value={formData.telefone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="d-grid gap-2">
//                   <button type="submit" className="btn btn-primary">Criar Conta</button>
//                   <a href="/login" className="btn btn-outline-secondary">Já tenho uma conta</a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cadastro; 