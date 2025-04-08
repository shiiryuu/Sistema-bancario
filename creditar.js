function creditar() {
    const numero = document.getElementById("numero").value;
    const valor = parseFloat(document.getElementById("valor").value);
    let contas = getContas();
    const conta = contas.find(c => c.numero === numero);
    const mensagem = document.getElementById("mensagem");
  
    if (conta) {
      conta.saldo += valor;
      setContas(contas);
  
      const nomeTitular = typeof conta.titular === 'object' ? conta.titular.nome : conta.titular;
  
      mensagem.innerHTML = `💰 Valor creditado com sucesso!<br>
      Conta: ${conta.numero}<br>
      Titular: ${nomeTitular}<br>
      Saldo Atual: R$ ${conta.saldo.toFixed(2)}`;
      mensagem.style.color = "green";
    } else {
      mensagem.innerHTML = "⚠️ Conta não encontrada.";
      mensagem.style.color = "red";
    }
  }
  