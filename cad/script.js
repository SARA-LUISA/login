document.getElementById("confirmar").addEventListener("click", function () 
// Função anônima que será executada quando o botão for clicado

{

    let nome = document.getElementById("nome").value;
    // Obtém o valor do campo de entrada com id "nome"
    let idade = document.getElementById("idade").value;
    // Obtém o valor do campo de entrada com id "idade"
    let cidade = document.getElementById("cidade").value;
    // Obtém o valor do campo de entrada com id "cidade"
    let email = document.getElementById("email").value;
    // Obtém o valor do campo de entrada com id "email"


    document.getElementById("resultado").innerHTML =
    // Define o conteúdo HTML do elemento com id "resultado" para exibir as informações
    // coletadas
    "Bem-vindo, " + nome + "<br>" + "Idade: " + idade + "<br>" +"Cidade: " + cidade + "<br>" +
    "Email: " + email;
});
