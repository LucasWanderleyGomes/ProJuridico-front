document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;
        const telefone = document.getElementById('telefone').value;
        
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }
        
        try {
            const response = await fetch('http://localhost:3000/api/v2/auth/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    sobrenome,
                    email,
                    senha,
                    telefone
                })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
                window.location.href = '/login';
            } else {
                alert(data.message || 'Erro ao realizar cadastro');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao conectar com o servidor');
        }
    });
}); 