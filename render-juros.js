function renderJuros() {
    const numero = document.getElementById("numero").value;
    const taxa = parseFloat(document.getElementById("taxa").value);
    const mensagem = document.getElementById("mensagem");
    let contas = getContas();
    const conta = contas.find(c => c.numero === numero && c.tipo === "POUPANCA");
  
    if (conta) {
      const juros = conta.saldo * (taxa / 100);
      conta.saldo += juros;
      conta.juros = (conta.juros || 0) + juros; // Acumula os juros aplicados
      setContas(contas);
  
      mensagem.innerHTML = `📈 Juros aplicados com sucesso!<br>
                            Conta: ${conta.numero}<br>
                            Titular: ${conta.titular.nome}<br>
                            Juros: R$ ${juros.toFixed(2)}<br>
                            Novo Saldo: R$ ${conta.saldo.toFixed(2)}`;
      mensagem.style.color = "green";
    } else {
      mensagem.innerHTML = "❌ Conta poupança não encontrada.";
      mensagem.style.color = "red";
    }
  }
  