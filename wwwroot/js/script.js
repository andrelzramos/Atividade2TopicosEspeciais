document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const mensagem = document.getElementById("mensagem");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const senha = document.getElementById("senha").value;

        // Faça sua validação aqui
        if (nome === "usuario" && senha === "senha123") {
            mensagem.textContent = "Login bem-sucedido!";
            alert("LOGIN FEITO!")
        } else {
            mensagem.textContent = "Nome de usuário ou senha incorretos. Tente novamente.";
            alert("Nome de usuário ou senha incorretos. Tente novamente.")
        }
    });
});