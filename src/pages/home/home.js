document.addEventListener('DOMContentLoaded', () => {
    // Verificar se o usuário está logado
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login';
        return;
    }

    // Configurar o botão de logout
    const btnLogout = document.getElementById('btnLogout');
    btnLogout.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    });

    // Carregar dados do dashboard
    carregarDadosDashboard();
});

async function carregarDadosDashboard() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/api/v2/dashboard', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao carregar dados');
        }

        const data = await response.json();

        // Atualizar contadores
        document.getElementById('processosAtivos').textContent = data.processosAtivos;
        document.getElementById('clientesCadastrados').textContent = data.clientesCadastrados;
        document.getElementById('audienciasHoje').textContent = data.audienciasHoje;

        // Atualizar lista de audiências
        const listaAudiencias = document.getElementById('listaAudiencias');
        listaAudiencias.innerHTML = data.proximasAudiencias.map(audiencia => `
            <div class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="mb-1">${audiencia.tipo}</h6>
                        <small class="text-muted">${audiencia.data} - ${audiencia.hora}</small>
                    </div>
                    <span class="badge bg-primary">${audiencia.status}</span>
                </div>
            </div>
        `).join('');

        // Atualizar lista de processos
        const listaProcessos = document.getElementById('listaProcessos');
        listaProcessos.innerHTML = data.processosRecentes.map(processo => `
            <div class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="mb-1">${processo.numero}</h6>
                        <small class="text-muted">${processo.cliente}</small>
                    </div>
                    <span class="badge bg-${getStatusColor(processo.status)}">${processo.status}</span>
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao carregar dados do dashboard');
    }
}

function getStatusColor(status) {
    const cores = {
        'Em andamento': 'primary',
        'Concluído': 'success',
        'Arquivado': 'secondary',
        'Pendente': 'warning'
    };
    return cores[status] || 'info';
} 