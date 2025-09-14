alert("Bem-vindo ao Verificador de Número");
let numeroPNZ = Number(prompt("Digite um número:"));
if (numeroPNZ > 0) {
    alert(`O número ${numeroPNZ} é POSITIVO`);
} else if (numeroPNZ < 0) {
    alert(`O número ${numeroPNZ} é NEGATIVO`);
} else {
    alert("O número é ZERO");
}