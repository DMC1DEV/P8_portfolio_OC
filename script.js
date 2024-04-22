document.addEventListener("DOMContentLoaded", function () {
    // Animation de zoom
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.classList.add('zoom-on-load');
        item.addEventListener('animationend', () => {
            item.classList.remove('zoom-on-load');
        });

        // Gestion du clic
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project-id');
            if (projectId) {
                // Ouvre la page projet dans un nouvel onglet avec l'ID du projet en paramètre de requête dans l'URL
                window.open(`pages/page_projet.html?id=${projectId}`, '_blank');
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
