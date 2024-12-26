document.addEventListener("DOMContentLoaded", function () {
    const conteinerVagas = document.querySelector(".conteiner-vagas");
    const vagasHeader = document.querySelector(".sessao-encontre_vagas h2");

    // Função para carregar vagas
    async function carregarVagas() {
        try {
            const response = await fetch("/api/vagas"); // Faz uma requisição à rota da API
            const vagas = await response.json(); // Converte a resposta para JSON

            // Atualiza o texto do h2 com o número de vagas
            vagasHeader.textContent = `${vagas.length} Vagas`;

            // Itera pelas vagas e adiciona no contêiner
            vagas.forEach(vaga => {
                const vagaDiv = document.createElement("div");
                vagaDiv.classList.add("vagas-content");
                vagaDiv.innerHTML = `
                    <h3 class="vaga-titulo">${vaga.titulo}</h3>
                    <h1 class="vaga-empresa">${vaga.empresa}</h1>
                    <img src="/static/img/${vaga.logo}" alt="Logo da empresa ${vaga.empresa}" class="vaga-logo">
                    <div class="vaga-info">
                        <p class="info">
                            <img src="/static/img/${vaga.local}" alt="Ícone de localização" class="info-icon">
                            ${vaga.localizacao}
                        </p>
                        <p class="info"> 
                            <img src="/static/img/${vaga.contrato}" alt="Ícone de contrato" class="info-icon">
                            ${vaga.tipo_contrato}
                        </p>
                        <p class="info"> 
                            <img src="/static/img/${vaga.escritorio}" alt="Ícone de escritorio" class="info-icon">
                            ${vaga.tipo}
                        </p>
                        <p class="info"> 
                            <img src="/static/img/${vaga.salario}" alt="Ícone de salario" class="info-icon">
                            ${vaga.tipo_salario}
                        </p>
                        <p class="descricao>${vaga.descricao}</p>
                    </div>
                `;
                conteinerVagas.appendChild(vagaDiv);
            });
        } catch (error) {
            console.error("Erro ao carregar vagas:", error);
            vagasHeader.textContent = "Erro ao carregar vagas";
        }
    }

    carregarVagas();
});
