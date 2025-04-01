document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const submitButton = form.querySelector('button[type="submit"]');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        // Desabilita o botão durante o processo de login
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Entrando...';
        
        try {
            const response = await fetch('http://localhost:3000/api/v2/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    senha
                })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Armazena o token de forma mais segura
                sessionStorage.setItem('token', data.token);
                
                // Verifica se o token é válido antes de redirecionar
                if (data.token) {
                    window.location.replace('/home');
                } else {
                    throw new Error('Token inválido recebido do servidor');
                }
            } else {
                throw new Error(data.message || 'Erro ao fazer login');
            }
        } catch (error) {
            console.error('Erro:', error);
            // Mostra mensagem de erro mais amigável
            const errorDiv = document.createElement('div');
            errorDiv.className = 'alert alert-danger mt-3';
            errorDiv.textContent = error.message || 'Erro ao conectar com o servidor';
            form.insertBefore(errorDiv, form.firstChild);
            
            // Remove a mensagem de erro após 5 segundos
            setTimeout(() => errorDiv.remove(), 5000);
        } finally {
            // Reabilita o botão
            submitButton.disabled = false;
            submitButton.textContent = 'Entrar';
        }
    });
}); 