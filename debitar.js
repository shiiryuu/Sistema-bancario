function debitar() {
    const numero = document.getElementById("numero").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const mensagem = document.getElementById("mensagem");
  
    if (!numero || isNaN(valor) || valor <= 0) {
      mensagem.innerText = "⚠️ Preencha corretamente todos os campos.";
      mensagem.style.color = "orange";
      return;
    }
  
    let contas = getContas();
    const conta = contas.find(c => c.numero === numero && !c.removida);
  
    if (conta) {
      if (conta.saldo >= valor) {
        conta.saldo -= valor;
        setContas(contas);
  
        mensagem.innerHTML = `✅ Valor debitado com sucesso!<br>
                              Conta: ${conta.numero}<br>
                              Titular: ${conta.titular.nome}<br>
                              Novo Saldo: R$ ${conta.saldo.toFixed(2)}`;
        mensagem.style.color = "green";
      } else {
        mensagem.innerText = "❌ Saldo insuficiente para débito.";
        mensagem.style.color = "red";
      }
    } else {
      mensagem.innerText = "❌ Conta não encontrada ou removida.";
      mensagem.style.color = "red";
    }
  }
  