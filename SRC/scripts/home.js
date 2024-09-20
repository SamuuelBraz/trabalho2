
function salvar() {
    const nome = document.getElementById("Nome").value;
    const prazo = document.getElementById("Prazo").value;
    const descricao = document.getElementById("Descricao").value;


    if (nome && prazo && descricao) {
        const projeto = {
            nome: nome,
            prazo: prazo,
            descricao: descricao
        };
        
        let projetos = JSON.parse(localStorage.getItem('projetos')) || [];

        projetos.push(projeto);

        localStorage.setItem('projetos', JSON.stringify(projetos));


        exibirProjetos();
    } else {
        alert('Por favor, preencha todos os campos!');
    }

    document.getElementById("Nome").value = '';
    document.getElementById("Prazo").value = '';
    document.getElementById("Descricao").value = '';
}

function exibirProjetos() {
    const projetosLista = document.getElementById('projetosLista');
    projetosLista.innerHTML = '' + '';

    const projetos = JSON.parse(localStorage.getItem('projetos')) || [];

  
    projetos.forEach(projeto => {
        const ul = document.createElement('ul');
        ul.textContent = `Nome: ${projeto.nome}
         Prazo: ${projeto.prazo} 
         Descrição: ${projeto.descricao}`;
        projetosLista.appendChild(ul);
    });
}
window.onload = exibirProjetos;

