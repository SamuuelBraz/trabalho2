let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');

let validNome = false

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false

let confirmarSenha = document.querySelector('#confirmarSenha');
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha');
let validConfirmaSenha = false



nome.addEventListener('keyup', ()=> {

    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Insira no minímo 3 caracteres';
        validNome = false

       

    } else{ 
        
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome';
        validNome = true
      
    }
})

usuario.addEventListener('keyup', ()=> {

    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuario *Insira no minímo 5 caracteres';
         validUsuario = false
       

    } else{ 
        
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'Usuario';
         validUsuario = true      
    }
})


senha.addEventListener('keyup', ()=> {

    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Insira no minímo 6 caracteres';
         validSenha = false
       

    } else{ 
        
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        validSenha = true
      
    }
})

confirmarSenha.addEventListener('keyup', ()=> {

    if(senha.value != confirmarSenha.value){
        labelConfirmarSenha.setAttribute('style', 'color: red');
        labelConfirmarSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
        confirmarSenha.setAttribute('style', 'color: red')
         validConfirmaSenha = false
       

    } else{ 
        
        labelConfirmarSenha.setAttribute('style', 'color: green');
        labelConfirmarSenha.innerHTML = 'Confirmar Senha';
        confirmarSenha.setAttribute('style', 'color: green');
         validConfirmaSenha = true
    }
})


function cadastrar(){
    if( validNome && validUsuario && validSenha && validConfirmaSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')


        listaUser.push(
            {
                nomecad: nome.value,
                usuariocad: usuario.value,
                senhacad: senha.value
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
}
 }


 document.getElementById("card").addEventListener("submit", function (event) {
    event.preventDefault();
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    var storedUser = localStorage.getItem(usuario);

    if (storedUser) {
        var parsedUser = JSON.parse(storedUser);

        if (parsedUser.senha === senha) {
            localStorage.setItem("usuario", JSON.stringify(parsedUser));
            alert("Login realizado com sucesso!");
            redirecionarParaHome(); // Chama a função de redirecionamento
        } else {
            alert("Senha Incorreta");
        }
    } else {
        alert("Usuário não encontrado");
    }
});

// Função para redirecionar para a página home.html
function redirecionarParaHome() {
    location.href = "./pages/home.html";
}

document.getElementById("loginCadastro").addEventListener("submit", function(event){
    event.preventDefault();
    var Usuario = document.getElementById("usuario").value; 
    var Senha = document.getElementById("Senha").value;

    var Usuario = localStorage.getElementById("Usuario").value;
if(user){
    var parsedUsuario = JSON.parse(Usuario);
    if (parsedUsuario.Senha === Senha){
        localStorage.setItem("Usuario", JSON.stringify(parsedUsuario));
        window.location.href = "home.html";
    }else {
        alert("Senha Incorreta");
    }
    else{
        alert("Usuário não encontrado");
    }
}
})
