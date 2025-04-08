// ================================
// Persistência de contas
// ================================
let contas = JSON.parse(localStorage.getItem("contas")) || [];
let usuarioLogado = localStorage.getItem("usuarioLogado") === "true";

function setContas(novasContas) {
  contas = novasContas;
  localStorage.setItem("contas", JSON.stringify(contas));
}

function getContas() {
  return JSON.parse(localStorage.getItem("contas")) || [];
}

// ================================
// Login
// ================================
function login() {
  const loginInput = document.getElementById("login");
  const senhaInput = document.getElementById("senha");

  if (!loginInput || !senhaInput) return; // Evita erro se não estiver na página de login

  const login = loginInput.value;
  const senha = senhaInput.value;

  if (login === "admin" && senha === "admin") {
    usuarioLogado = true;
    localStorage.setItem("usuarioLogado", "true");
    window.location.href = "menu.html";
  } else {
    alert("Login ou senha incorretos!");
    loginInput.value = "";
    senhaInput.value = "";
    loginInput.focus();
  }
}

// ================================
// Sair
// ================================
function sair() {
  localStorage.removeItem("usuarioLogado");
  usuarioLogado = false;
  window.location.href = "login.html"; // Redireciona para login.html
}

// ================================
// Utilitários
// ================================
function mostrarSaida(texto) {
  const output = document.getElementById("output");
  if (output) output.textContent = texto;
}

// ================================
// Verificação de login nas páginas protegidas
// ================================
function verificarLogin() {
  if (!usuarioLogado) {
    alert("Você precisa estar logado para acessar esta página.");
    window.location.href = "login.html";
  }
}
function sair() {
  localStorage.removeItem("usuarioLogado");
  usuarioLogado = false;
  window.location.href = "login.html"; // volta pra tela de login
}

