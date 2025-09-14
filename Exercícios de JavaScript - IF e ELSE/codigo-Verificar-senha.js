alert("Bem-vindo ao Sistema de Login");
let senhaDigitada = prompt("Digite a senha:");
let senhaCorreta = "1234";
if (senhaDigitada === senhaCorreta) {
    alert("Acesso PERMITIDO");
} else {
    alert("Acesso NEGADO");
}