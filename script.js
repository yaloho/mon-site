// Afficher automatiquement l’année dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Fonction pour afficher une section à la fois
function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.add('hidden'); // cacher toutes les sections
  });

  document.getElementById(id).classList.remove('hidden'); // afficher celle demandée
}
