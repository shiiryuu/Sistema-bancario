if (!localStorage.getItem("contas")) {
    localStorage.setItem("contas", JSON.stringify([]));
  }
  
  function fazerLogin() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
  
    if (login === "admin" && senha === "admin") {
      window.location.href = "menu.html";
    } else {
      alert("Login ou senha incorretos!");
      document.getElementById("login").value = "";
      document.getElementById("senha").value = "";
      document.getElementById("login").focus();
    }
  }
  
  function getContas() {
    return JSON.parse(localStorage.getItem("contas")) || [];
  }
  
  function setContas(contas) {
    localStorage.setItem("contas", JSON.stringify(contas));
  }

  