function initializeAdmin() {
  let adminExists = false;
  
  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i);
    let dados = localStorage.getItem(id);
    var users = JSON.parse(dados);
    
    if (users.Email_ === "admin@admin.com") {
      adminExists = true;
      break;
    }
  }
  
  if (!adminExists) {
    const adminUser = {
      Username_: "Admin",
      Email_: "@adm",
      Password_: "1234",
      Status_: "Desativado"
    };
    
    localStorage.setItem("admin_default", JSON.stringify(adminUser));
  }
}

window.addEventListener('DOMContentLoaded', initializeAdmin);

function Join() {
  const email2 = document.getElementById("Email2").value;
  const password2 = document.getElementById("Password2").value;
  
  if (email2 == "") {
    return alert("Email vazio!");
  }
  if (password2 == "") {
    return alert("Senha vazia!");
  }

  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i);
    let dados = localStorage.getItem(id);
    var users = JSON.parse(dados);
    
    if (password2 == users.Password_ && email2 == users.Email_) {
      var chave = id;
      var status = "Ativo";
      var usuario = {
        Username_: users.Username_,
        Email_: email2,
        Password_: password2,
        Status_: status
      };
    
      localStorage.setItem(chave, JSON.stringify(usuario));
      
      // Redireciona para tela de admin se for o usuário admin
      if (email2 === "@adm") {
        window.location.href = "../HomeScreenLogged/AdminScreen.html";
      } else {
        window.location.href = "../HomeScreenLogged/HomeScreenLogged.html";
      }
      return false;
    }
  }
  
  alert("Email ou senha incorretos!");
}

function Criar_conta() {
  var chave = localStorage.length;
  chave++;
  const status = "Desativado";
  const username = document.getElementById("Username").value;
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;
  const password2 = document.getElementById("Password3").value;

  if (username == "") {
    return alert("Nome de usuário vazio!");
  }
  if (email == "") {
    return alert("Email vazio!");
  }
  if (password == "") {
    return alert("Senha vazia!");
  }
  if (password == password2) {
    var usuario = {
      Username_: username,
      Email_: email,
      Password_: password,
      Status_: status
    };
    
    localStorage.setItem(chave, JSON.stringify(usuario));

    window.location.href = "../Login/Login.html";
    return;
  } else {
    alert("Confirme sua senha!");
    return;
  }
}

function ShowPassword() {
  var passwords = document.getElementsByClassName("Password");

  for (let i = 0; i < passwords.length; i++) {
    if (passwords[i].type === "password") {
      passwords[i].type = "text";
    } else {
      passwords[i].type = "password";
    }
  }
}