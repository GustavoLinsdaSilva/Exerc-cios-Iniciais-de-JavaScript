alert("Bem-vindo ao Verificador de Par ou Ímpar");
let numeroParImpar = Number(prompt("Digite um número:"));
if (numeroParImpar % 2 === 0) {
    alert(`O número ${numeroParImpar} é PAR`);
} else {
    alert(`O número ${numeroParImpar} é ÍMPAR`);
}