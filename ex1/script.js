alert("Olá, seja bem-vindo!");

document.getElementById("btnEntrar").addEventListener("click", function () {
    nome = document.getElementById("txtNome").value;

    if (nome.trim() == "") {
        alert("Informe o nome completo!");
    } else {
        palavras = nome.trim().split(" ");

        if (palavras.length < 2) {
            alert("Informe pelo menos NOME + SOBRENOME");
        } else {
            localStorage.setItem("nomeCompleto", nome);
            window.location.href = "../ex2/index.html";
        }
    }
});
