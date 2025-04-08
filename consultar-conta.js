function consultarConta() {
    const numero = document.getElementById("numero").value;
    const contas = getContas();
    const conta = contas.find(c => c.numero === numero);
    const resultado = document.getElementById("resultado");
  
    if (conta) {
      resultado.innerHTML = `
        <div class="card">
          <p><span>Conta:</span> ${conta.numero}</p>
          <p><span>Agência:</span> ${conta.agencia}</p>
          <p><span>Tipo:</span> ${conta.tipo}</p>
          <p><span>Saldo:</span> R$ ${conta.saldo.toFixed(2)}</p>
          <hr/>
          <p><span>Nome:</span> ${conta.titular.nome}</p>
          <p><span>CPF:</span> ${conta.titular.cpf}</p>
          <p><span>Endereço:</span> ${conta.titular.endereco}</p>
          <p><span>Telefone:</span> ${conta.titular.telefone}</p>
        </div>
      `;
    } else {
      resultado.innerHTML = "<p style='margin-top:1rem;color:red;'>Conta não encontrada.</p>";
    }
  }
  