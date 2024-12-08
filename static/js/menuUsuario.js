// Script para alternar o menu dropdown
document.addEventListener('DOMContentLoaded', function () {
    const setaBaixo = document.querySelector('.seta_baixo');
    const menuUsuarios = document.querySelector('.menu_usuarios');

    if (setaBaixo) {
        setaBaixo.addEventListener('click', function () {
            menuUsuarios.classList.toggle('active');
        });
    }
});
