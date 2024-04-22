document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    fetch('../data/projets.json')
        .then(response => response.json())
        .then(data => {
            const project = data.projets.find(p => p.id === parseInt(projectId));
            if (project) {
                renderProjectDetails(project);
                updatePageTitle(project.title);
            } else {
                // Gestion erreur si projet introuvable
                console.error('Projet non trouvé.');
            }
        })
        .catch(error => console.error('Erreur lors du chargement des données :', error));
});

function renderProjectDetails(project) {
    const projectDetails = document.getElementById('project-details');
    if (projectDetails) {
        projectDetails.innerHTML = `
            <div>
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <img src="${project.img}">
                <a href="${project.link}" target="_blank">Voir le projet</a>
            </div>
        `;
    }
}

function updatePageTitle(title) {
    document.title = title;
}
