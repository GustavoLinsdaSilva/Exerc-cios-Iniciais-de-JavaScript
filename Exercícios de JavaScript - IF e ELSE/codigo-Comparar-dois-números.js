alert("Bem-vindo ao Comparador de Números");
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
if (numero1 > numero2) {
    alert(`O número ${numero1} é MAIOR que ${numero2}`);
} else if (numero2 > numero1) {
    alert(`O número ${numero2} é MAIOR que ${numero1}`);
} else {
    alert("Os dois números são IGUAIS");
}