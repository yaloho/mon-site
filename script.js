// Affiche automatiquement l’année dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Fonction pour afficher une section à la fois et activer le lien cliqué
function showSection(id, clickedLink) {
  // Cacher toutes les sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.add('hidden'));

  // Afficher la section demandée
  document.getElementById(id).classList.remove('hidden');

  // Retirer la classe active de tous les liens
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => link.classList.remove('active'));

  // Ajouter la classe active au lien cliqué
  if (clickedLink) {
    clickedLink.classList.add('active');
  }
}
