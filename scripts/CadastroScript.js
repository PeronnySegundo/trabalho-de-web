const form = document.getElementById("formulario");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const senhaConfirmacao = document.getElementById("senhaConfirmacao");
const linguagensFavoritas = document.querySelectorAll('input[name="lingua"]:checked');

const validarCampo = (input, condicao, mensagemErro) => {
    const item = input.parentElement;
    const mensagemDeErro = item.querySelector("a");

    if (condicao) {
        mensagemDeErro.innerText = mensagemErro;
        item.className = "conteudoDoFormulario error";
    } else {
        item.className = "conteudoDoFormulario";
    }
};

const validacaoUsername = () => {
    validarCampo(username, username.value === "", "O nome de usuário não pode ser vazio");
};

const validacaoEmail = () => {
    validarCampo(email, email.value === "", "O email não pode ser vazio");
};

const validacaoSenha = () => {
    validarCampo(senha, senha.value === "", "A senha não pode ser vazia");
    if (senha.value.length < 8) {
        validarCampo(senha, true, "A senha deve no mínimo 8 caracteres");
    } else if (!senha.value.match(/[a-zA-Z]/) || !senha.value.match(/[0-9]/)) {
        validarCampo(senha, true, "A senha deve conter letras e números");
    }
};

const validacaoConfirmarSenha = () => {
    validarCampo(senhaConfirmacao, senhaConfirmacao.value === "", "A confirmação de senha não pode ser vazia");
    if (senhaConfirmacao.value !== senha.value) {
        validarCampo(senhaConfirmacao, true, "Senhas diferentes");
    }
};

const salvarUsuarioNoLocalStorage = () => {
    const linguagensSelecionadas = Array.from(document.querySelectorAll('input[name="lingua"]:checked'))
        .map((checkbox) => checkbox.value);

    const novoUsuario = {
        username: username.value,
        email: email.value,
        senha: senha.value,
        linguagensFavoritas: linguagensSelecionadas,
    };

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    localStorage.setItem("usuarios", JSON.stringify([...usuarios, novoUsuario]));
};

const handleSubmit = (event) => {
    event.preventDefault();
    validacaoUsername();
    validacaoEmail();
    validacaoSenha();
    validacaoConfirmarSenha();

    const camposValidos = form.querySelectorAll(".conteudoDoFormulario:not(.error)").length === 4;

    if (camposValidos) {
        salvarUsuarioNoLocalStorage();
        alert("Cadastrado com sucesso!");
        window.location.href = "/pages/login.html";
    }
};

const adicionarEventosDeValidacao = () => {
    email.addEventListener("blur", validacaoEmail);
    username.addEventListener("blur", validacaoUsername);
    senha.addEventListener("blur", () => {
        validacaoSenha();
        validacaoConfirmarSenha();
    });
    senhaConfirmacao.addEventListener("blur", validacaoConfirmarSenha);
};

form.addEventListener("submit", handleSubmit);

adicionarEventosDeValidacao();
