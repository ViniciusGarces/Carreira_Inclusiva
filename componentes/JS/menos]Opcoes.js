function menosOpcoes(){
    const maisOpcoes = document.getElementById('.mais-opcoes');
    const menosOpcoes = document.getElementById('.menos-opcoes');

    if(maisOpcoes.classList.contains("hidden")){
        maisOpcoes.classList.remove("hidden");
        menosOpcoes.textContent = "Menos opções";
    }
    else{
        maisOpcoes.classList.add("hidden");
        menosOpcoes.textContent = "Mais opções";
    }
}