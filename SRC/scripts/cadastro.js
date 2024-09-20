document.getElementById("cadastro").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var usuario = document.getElementById("usuario").value; // Corrigido para getElementById
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) { // Corrigido para comparar 'senha' e 'confirmarSenha'
        alert("As senhas não coincidem");
        return;
    }

    // Cria o objeto do usuário
    const user = {
        nome: nome,
        nomedeUsuario: usuario, // Mantido consistente com o nome da variável 'usuario'
        senha: senha
    };

    // Salva o usuário no localStorage
    localStorage.setItem(usuario, JSON.stringify(user)); // Corrigido para armazenar o objeto 'user'

    alert("Cadastro realizado com sucesso! Por favor, faça login.");
    window.location.href = "Login.html";
});