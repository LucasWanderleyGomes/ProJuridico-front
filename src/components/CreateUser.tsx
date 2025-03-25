import { useState } from "react";
import apiV1 from "../apiV1";
import styles from "./LoginForm/LoginForm.module.css"; // Reusando os estilos do LoginForm

interface UserFormData {
  username: string;
  email: string;
  password: string;
  oab: string;
  especialidade: string;
  escritorio: string;
  telefone: string;
}

const CreateUser = () => {
  const [formData, setFormData] = useState<UserFormData>({
    username: "",
    email: "",
    password: "",
    oab: "",
    especialidade: "",
    escritorio: "",
    telefone: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Limpa as mensagens quando o usuário começa a digitar
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const requestData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        tipo: "ADV",
        advogado: {
          oab: formData.oab,
          especialidade: formData.especialidade,
          escritorio: formData.escritorio,
          telefone: formData.telefone,
        },
      };

      console.log('Enviando dados para o backend:', requestData);
      console.log('URL da requisição:', apiV1.defaults.baseURL + '/usuario/');
      
      const response = await apiV1.post("/usuario/", requestData);
      console.log('Resposta do backend:', response.data);
      
      setSuccessMessage("Usuário criado com sucesso!");
      setFormData({
        username: "",
        email: "",
        password: "",
        oab: "",
        especialidade: "",
        escritorio: "",
        telefone: "",
      });

      // Redireciona para a página de login após 2 segundos
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);

    } catch (error: any) {
      console.error("Erro completo:", error);
      console.error("Status do erro:", error.response?.status);
      console.error("Dados do erro:", error.response?.data);
      
      if (error.response?.data?.detail) {
        setErrorMessage(error.response.data.detail);
      } else if (error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } else if (error.message === "Network Error") {
        setErrorMessage("Erro de conexão com o servidor. Verifique se o backend está rodando.");
      } else {
        setErrorMessage("Erro ao criar o usuário. Por favor, tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginForm}>
      <h2>Criar Usuário</h2>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      {successMessage && (
        <p className={`${styles.error} ${styles.success}`}>{successMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="oab">OAB:</label>
          <input
            type="text"
            id="oab"
            name="oab"
            value={formData.oab}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="especialidade">Especialidade:</label>
          <input
            type="text"
            id="especialidade"
            name="especialidade"
            value={formData.especialidade}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="escritorio">Escritório:</label>
          <input
            type="text"
            id="escritorio"
            name="escritorio"
            value={formData.escritorio}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Criando..." : "Criar Usuário"}
        </button>
        <p className={styles.createAccount}>
          Já possui uma conta? <a href="/login">Fazer login</a>
        </p>
      </form>
    </div>
  );
};

export default CreateUser;
