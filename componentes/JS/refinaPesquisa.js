function toggleDropdown(optionsId, arrowId) {
  const dropdownOptions = document.getElementById(optionsId);
  const arrow = document.getElementById(arrowId);
  const cardPesquisa = document.querySelector(".card-pesquisa"); // Seleciona a .card-pesquisa

  // Toggle entre mostrar/esconder as opções
  dropdownOptions.classList.toggle("show");

  // Alternar a rotação da seta
  arrow.classList.toggle("rotate");

   // Após alterar o estado (abrir/fechar), recalcular a altura da .card-pesquisa
  recalculateCardPesquisaHeight();
}

function recalculateCardPesquisaHeight() {
  const cardPesquisa = document.querySelector('.card-pesquisa'); // Seleciona a .card-pesquisa
  const allDropdowns = document.querySelectorAll('.options'); // Seleciona todas as opções dropdown
  let totalHeight = 400; // Altura mínima padrão (ajuste conforme necessário)

  // Somar a altura de todos os dropdowns abertos
  allDropdowns.forEach(dropdown => {
    if (dropdown.classList.contains('show')) {
      totalHeight += dropdown.scrollHeight; // Somar a altura do conteúdo visível
    }
  });

  // Ajustar a altura da .card-pesquisa
  cardPesquisa.style.height = totalHeight + "px";

}

