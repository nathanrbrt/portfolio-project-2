// Referências aos modais e botões de fechar
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

// Abrir modais ao clicar no bloco correspondente
document.querySelectorAll('.single-galeria').forEach((block, index) => {
    block.addEventListener('click', function(event) {
        // Fecha todos os modais antes de abrir o selecionado
        modals.forEach(modal => modal.style.display = 'none');
        // Abre o modal correspondente ao bloco clicado
        modals[index].style.display = 'block';
        event.stopPropagation(); // Impede que outros eventos sejam disparados
    });
});

// Fechar o modal ao clicar no "X"
closeBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        // Fecha todos os modais
        modals.forEach(modal => modal.style.display = 'none');
        event.stopPropagation(); // Impede que outros eventos sejam disparados
    });
});

// Fechar o modal ao clicar fora da janela (parte de fora)
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none'; // Fecha o modal se o clique for fora dele
        }
    });
});
