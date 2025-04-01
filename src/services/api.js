// import axios from 'axios';
// const baseURL = 'http://localhost:3000/api';

// export const apiV1 = axios.create({
//     baseURL: `${baseURL}/v1`,
//     timeout: 5000,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// export const apiV2 = axios.create({
//     baseURL: `${baseURL}/v2`,
//     timeout: 5000,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// apiV1.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response) {
//             console.error('Erro na resposta V1:', error.response.data);
//             alert('Erro no servidor: ' + error.response.data.message);
//         } else if (error.request) {
//             console.error('Erro na requisição V1:', error.request);
//             alert('Erro de conexão com o servidor');
//         } else {
//             console.error('Erro V1:', error.message);
//             alert('Erro: ' + error.message);
//         }
//         return Promise.reject(error);
//     }
// );

// apiV2.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response) {
//             console.error('Erro na resposta V2:', error.response.data);
//             alert('Erro no servidor: ' + error.response.data.message);
//         } else if (error.request) {
//             console.error('Erro na requisição V2:', error.request);
//             alert('Erro de conexão com o servidor');
//         } else {
//             console.error('Erro V2:', error.message);
//             alert('Erro: ' + error.message);
//         }
//         return Promise.reject(error);
//     }
// );

// export const setAuthToken = (token, version = 'v2') => {
//     const api = version === 'v1' ? apiV1 : apiV2;
//     if (token) {
//         api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {
//         delete api.defaults.headers.common['Authorization'];
//     }
// };

// export const api = apiV2; 