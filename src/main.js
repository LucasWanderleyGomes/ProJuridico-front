import { HomePage } from './pages/home/home.js';
import { LoginPage } from './pages/login/login.js';
import { CadastroPage } from './pages/cadastro/cadastro.js';


const routes = {
    '/': LoginPage,
    '/login': LoginPage,
    '/cadastro': CadastroPage,
    '/home': HomePage,
    '/processos': ProcessosPage,
    '/clientes': ClientesPage
};


function renderPage(page) {
    const app = document.getElementById('app');
    app.innerHTML = page;
}


function navigateTo(path) {
    const page = routes[path];
    if (page) {
        renderPage(page());
        window.history.pushState({}, '', path);
    } else {
        renderPage('<h1>404 - Página não encontrada</h1>');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
            e.preventDefault();
            const path = link.getAttribute('href');
            navigateTo(path);
        }
    });

    document.addEventListener('click', (e) => {
        const navLink = e.target.closest('.nav-link');
        if (navLink) {
            e.preventDefault();
            const path = navLink.getAttribute('href');
            navigateTo(path);
        }
    });

    window.addEventListener('popstate', () => {
        navigateTo(window.location.pathname);
    });

    navigateTo(window.location.pathname);
});