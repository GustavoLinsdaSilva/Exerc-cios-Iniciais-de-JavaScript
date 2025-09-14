alert("Bem-vindo ao Verificador de Turno");
let turno = prompt("Digite o turno que você estuda: (M - Manhã, T - Tarde, N - Noite)");
if (turno === "M" || turno === "m") {
    alert("Bom dia!");
} else if (turno === "T" || turno === "t") {
    alert("Boa tarde!");
} else if (turno === "N" || turno === "n") {
    alert("Boa noite!");
} else {
    alert("Turno inválido");
}