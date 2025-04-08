function transferir() {
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const valor = parseFloat(document.getElementById("valor").value);
    let contas = getContas();
    const contaOrigem = contas.find(c => c.numero === origem);
    const contaDestino = contas.find(c => c.numero === destino);
    const resumo = document.getElementById("resumo");
  
    if (contaOrigem && contaDestino) {
      if (contaOrigem.saldo >= valor) {
        contaOrigem.saldo -= valor;
        contaDestino.saldo += valor;
        setContas(contas);
  
        resumo.innerHTML = `
          <div class="resumo-transferencia">
            <h3>Transferência Realizada com Sucesso!</h3>
            <p><span>De:</span> ${contaOrigem.numero} - ${contaOrigem.titular.nome}</p>
            <p><span>Para:</span> ${contaDestino.numero} - ${contaDestino.titular.nome}</p>
            <p><span>Valor:</span> R$ ${valor.toFixed(2)}</p>
            <p><span>Saldo Atual da Conta de Origem:</span> R$ ${contaOrigem.saldo.toFixed(2)}</p>
            <p><span>Saldo Atual da Conta de Destino:</span> R$ ${contaDestino.saldo.toFixed(2)}</p>
          </div>
        `;
      } else {
        resumo.innerHTML = `<p style="color: red; margin-top: 1rem;">Saldo insuficiente na conta de origem.</p>`;
      }
    } else {
      resumo.innerHTML = `<p style="color: red; margin-top: 1rem;">Conta de origem ou destino não encontrada.</p>`;
    }
  }
  