function removerConta() {
    const numero = document.getElementById("numero").value;
    const mensagem = document.getElementById("mensagem");
    const dadosDiv = document.getElementById("dadosConta");
    let contas = getContas();
    const index = contas.findIndex(c => c.numero === numero);
  
    if (index !== -1) {
      const conta = contas[index];
      contas.splice(index, 1);
      setContas(contas);
  
      mensagem.textContent = "Conta removida com sucesso!";
      mensagem.className = "mensagem sucesso";
  
      dadosDiv.innerHTML = `
        <strong>Dados da conta removida:</strong><br>
        <strong>Conta:</strong> ${conta.numero}<br>
        <strong>Nome:</strong> ${conta.titular.nome}<br>
        <strong>Saldo:</strong> R$ ${conta.saldo.toFixed(2)}
      `;
    } else {
      mensagem.textContent = "Conta não encontrada.";
      mensagem.className = "mensagem erro";
      dadosDiv.innerHTML = "";
    }
  }
  