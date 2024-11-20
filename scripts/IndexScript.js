window.onload = () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  
  if (!usuarioLogado) {
    window.location.href = "/pages/login.html";
    return;
  }

  document.getElementById("usernameDisplay").textContent = usuarioLogado.username;
  document.getElementById("emailDisplay").textContent = usuarioLogado.email;

  var linguas = usuarioLogado.linguagensFavoritas || [];
  
  document.getElementById("linguagensDisplay").textContent = linguas.length > 0 ? linguas.join(", ") : "Nenhuma linguagem favorita selecionada.";
  
  const container = document.getElementById("containerImagem");
  linguas.forEach(lingua => {
    const imagem = document.createElement('img');
    imagem.src = `/styles/imagens/${lingua}.png`
    imagem.style = "width: 133px; height: 133px; padding: 5px;"
    container.appendChild(imagem);
  });
  if(linguas.length == 0){
    const imagem = document.createElement('img');
    imagem.src = `/styles/imagens/Negativo.jpg`
    imagem.style = "width: 133px; height: 133px; padding: 5px;"
    container.appendChild(imagem);
  }

  document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "/pages/login.html";
  });
};
