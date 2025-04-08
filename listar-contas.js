function listar() {
    const contas = getContas();
    const listaAtivas = document.getElementById("lista-ativas");
    const listaRemovidas = document.getElementById("lista-removidas");
    listaAtivas.innerHTML = "";
    listaRemovidas.innerHTML = "";
  
    if (contas.length === 0) {
      listaAtivas.innerHTML = "<p>Nenhuma conta cadastrada.</p>";
      return;
    }
  
    contas.forEach((c, index) => {
      const card = document.createElement("div");
      card.className = "conta-card";
  
      const info = document.createElement("div");
      info.className = "conta-info";
      info.innerHTML = `
        <strong>Conta:</strong> ${c.numero} <br>
        <strong>Titular:</strong> ${c.titular.nome} <br>
        <strong>Saldo:</strong> R$ ${c.saldo.toFixed(2)} <br>
        <strong>Juros:</strong> R$ ${(c.juros || 0).toFixed(2)} <br>
        <span class="conta-status">Status: ${c.removida ? "Removida" : "Ativa"}</span>
      `;
  
      const actions = document.createElement("div");
  
      if (c.removida) {
        const btnReativar = document.createElement("button");
        btnReativar.className = "btn-reativar";
        btnReativar.textContent = "Reativar Conta";
        btnReativar.onclick = () => {
          contas[index].removida = false;
          setContas(contas);
          listar();
        };
        actions.appendChild(btnReativar);
        card.appendChild(info);
        card.appendChild(actions);
        listaRemovidas.appendChild(card);
      } else {
        const btnRemover = document.createElement("button");
        btnRemover.className = "btn-remover";
        btnRemover.textContent = "Remover Conta";
        btnRemover.onclick = () => {
          contas[index].removida = true;
          setContas(contas);
          listar();
        };
        actions.appendChild(btnRemover);
        card.appendChild(info);
        card.appendChild(actions);
        listaAtivas.appendChild(card);
      }
    });
  }
  
  window.onload = listar;
  