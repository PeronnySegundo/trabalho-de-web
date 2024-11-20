const form = document.getElementById("formulario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validarFormulario();
});

const campos = [email, senha];

campos.forEach((campo) => {
    campo.addEventListener("blur", () => validarCampo(campo));
});

const validarCampo = (campo) => {
    const campoValue = campo.value;
    let mensagemErro = "";

    switch (campo.id) {
        case "email":
            mensagemErro = campoValue === "" ? "O email não pode ser vazio" : "";
            break;
        case "senha":
            if (campoValue === "") {
                mensagemErro = "A senha não pode ser vazia";
            } else if (campoValue.length < 8) {
                mensagemErro = "A senha deve ter no mínimo 8 caracteres";
            }
            break;
        default:
            break;
    }

    if (mensagemErro) {
        mostrarErro(campo, mensagemErro);
    } else {
        limparErro(campo);
    }
};

const validarFormulario = () => {
    let valido = true;

    campos.forEach((campo) => {
        validarCampo(campo);
        if (campo.parentElement.classList.contains("error")) {
            valido = false;
        }
    });

    if (valido) {
        realizarLogin();
    }
};

const mostrarErro = (campo, mensagem) => {
    const item = campo.parentElement;
    const mensagemDeErro = item.querySelector("a");
    mensagemDeErro.innerText = mensagem;
    item.className = "conteudoDoFormulario error";
};

const limparErro = (campo) => {
    const item = campo.parentElement;
    item.className = "conteudoDoFormulario";
};

const realizarLogin = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

    const usuario = usuarios.find((usuario) => usuario.email === email.value);

    if (usuario !== null && usuario.senha === senha.value) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        alert(`Bem-vindo, ${usuario.username}!`);
        window.location.href = "/pages/index.html";
    } else {
        alert("Email ou senha incorretos!");
    }
};
