
function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    alert(`Nome: ${nome}\nEmail: ${email}`);
}