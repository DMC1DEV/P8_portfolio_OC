document.addEventListener("DOMContentLoaded", function () {
    // Ajout d'une classe pour l'animation de zoom
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.classList.add('zoom-on-load');
        item.addEventListener('animationend', () => {
            item.classList.remove('zoom-on-load');
        });

        // Gestion du clic pour rediriger ou charger dynamiquement le contenu
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project-id');
            if (projectId) {
                // Redirige vers la page projet avec l'ID du projet en paramètre de requête dans l'URL
                window.location.href = `pages/page_projet.html?id=${projectId}`;
            }
        });
    });
});

function renderDynamicPage(data) {
    const dynamicContent = document.getElementById('dynamic-content');
    if (dynamicContent) {
        dynamicContent.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.description}</p>
        `;
    }
}
