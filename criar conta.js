const form = document.getElementById("form-criar-conta");
const mensagem = document.getElementById("mensagem-sucesso");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const contas = getContas();

  const novaConta = {
    numero: document.getElementById("numero").value,
    agencia: document.getElementById("agencia").value,
    tipo: document.getElementById("tipo").value,
    saldo: 0,
    removida: false,
    titular: {
      nome: document.getElementById("nome").value,
      cpf: document.getElementById("cpf").value,
      endereco: document.getElementById("endereco").value,
      telefone: document.getElementById("telefone").value
    }
  };

  contas.push(novaConta);
  setContas(contas);

  mensagem.style.display = "block";
  form.reset();

  setTimeout(() => {
    mensagem.style.display = "none";
  }, 3000);
});
