function lerDescricao(event) {
    const descricao = event.target.alt; // Pega a descrição diretamente do atributo alt
    if (descricao) {
        const fala = new SpeechSynthesisUtterance(descricao);
        fala.lang = "pt-BR";
        window.speechSynthesis.speak(fala);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as imagens com a tag 'alt' definida
    const imagensComAlt = document.querySelectorAll('img[alt]');

    // Adiciona o evento 'mouseover' em todas as imagens selecionadas
    imagensComAlt.forEach(imagem => {
        imagem.addEventListener('mouseover', lerDescricao);
    });
});