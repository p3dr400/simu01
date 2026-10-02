nomeCompleto = localStorage.getItem("nomeCompleto");

palavras = nomeCompleto.split(" ");

primeiroNome = palavras[0];

document.getElementById("gato01").addEventListener("click", function () {
    alert("Oi " + primeiroNome + ", tudo bem com você?");
});

carinhos = 0;

document.getElementById("gato02").addEventListener("click", function () {
    carinhos = carinhos + 1;
    document.getElementById("carinhos").innerHTML = "Carinhos: " + carinhos;
});

document.getElementById("gato03").addEventListener("mouseover", function () {
    document.getElementById("gato03").src = "Imagens/gato06.gif";
});

document.getElementById("gato03").addEventListener("mouseout", function () {
    document.getElementById("gato03").src = "Imagens/gato03.gif";
});

document.getElementById("gato04").addEventListener("mouseover", function () {
    document.getElementById("textoGato04").innerHTML = "Ai, pare de fazer cócegas!";
});

document.getElementById("gato04").addEventListener("mouseout", function () {
    document.getElementById("textoGato04").innerHTML = "lá lá lá lá lá lá";
});

document.getElementById("btnSorte").addEventListener("click", function () {
    numero = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numero").value = numero;
});
