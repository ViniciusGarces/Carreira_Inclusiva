//obter uma referência ao elemento html acessibilidadeImg
const imgAcessibilidade = document.getElementById('acessibilidadeImg');
//selecionar um elemento html com a classe .acessibilidade e armazenar uma referencia a ele na constante menuAcessibilidade
const menuAcessibilidade = document.querySelector('.acessibilidade');

//Exibir/ocultar o menu ao clicar na imagem
imgAcessibilidade.addEventListener('click', () => {
    if (menuAcessibilidade.style.display === 'none' || menuAcessibilidade.style.display === '') {
        menuAcessibilidade.style.display = 'block';
    } else {
        menuAcessibilidade.style.display = 'none';
    }
});
// função para alterar o contraste da página
function contraste() {
    document.body.classList.toggle('contraste');

    if (document.body.classList.contains('contraste')) {
        localStorage.setItem('contraste', 'true');
    } else {
        localStorage.removeItem('contraste', 'false');
    }
}

let count = 0;
// função para destacar os elementos linkaveis da página
function linksDestacados(){
    const elementosLinkaveis = document.querySelectorAll('a, button');
    
    count++;
    if(count === 1) {
        elementosLinkaveis.forEach(elemento => {
            elemento.classList.add('linksDestacados');
        });
    }
    else {
        elementosLinkaveis.forEach(elemento => {
            elemento.classList.remove('linksDestacados');
        });
        count = 0;
    }

}

// função para aumentar ou diminuir o texto da página
let clickCount = 0;
function aumentar_diminuir_texto(){
    clickCount++;
    if(clickCount === 1) {
        document.body.style.fontSize = '20px';
    }
    else if (clickCount === 2) {
        document.body.style.fontSize = '30px';
    }
    else if (clickCount === 3) {s
        document.body.style.fontSize = '40px';
    }
    else {
        document.body.style.fontSize = 'initial'; // Volta ao tamanho normal
        clickCount = 0; // Reseta o contador
    }
}