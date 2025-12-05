document.getElementById("form-contato").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const destino = "svv@cesar.school"; 

    const assunto = encodeURIComponent("Contato pelo Portfólio");
    const corpo = encodeURIComponent(
`Olá, eu sou ${nome}
Email: ${email}
${mensagem}`
    );

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${destino}&su=${assunto}&body=${corpo}`;

    window.open(url, "_blank");
});
