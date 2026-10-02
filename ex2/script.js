nomeCompleto = localStorage.getItem("nomeCompleto");

palavras = nomeCompleto.split(" ");

primeiroNome = palavras[0];
ultimoNome = palavras[palavras.length - 1];

document.getElementById("mensagem").innerHTML =
    primeiroNome + " " + ultimoNome + ", seja bem-vindo ao jogo dos Felinos!";

document.getElementById("btnConvidado").addEventListener("click", function () {
    window.location.href = "../ex3/index.html";
});
