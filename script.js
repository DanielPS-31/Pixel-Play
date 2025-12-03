let Usuario = " ";
let a, b, c;

function Entrar() {
  window.location.href = "./Login/Login.html";
}

function Criar() {
  window.location.href = "./Login/Create.html";
}

function Join_Screen() {
  window.location.href = "../Join/Join.html";
}

function History_Screen() {
  window.location.href = "../History/History.html";
}

function getRandom1to8() {
  return Math.floor(Math.random() * 8) + 1;
}

function Logout() {
  for (let i = 0; i <= localStorage.length; i++) {
    let id = localStorage.key(i);
    let dados = localStorage.getItem(id);
    var users = JSON.parse(dados);
    if (users.Status_ == "Ativo") {
      var chave = id;
      var email = users.Email_;
      var password = users.Password_;
      var status = "Desativado";
      var usuario = {
        Username_: users.Username_,
        Email_: email,
        Password_: password,
        Status_: status,
      };

      localStorage.setItem(chave, JSON.stringify(usuario));
      window.location.href = "../Login/Login.html";
      return false;
    }
  }
}

async function iniciarLoop() {
    while (true) {
        await gerarNumeros();
        
        document.getElementById("Hero-Game01").style.backgroundImage =
      "url('/Imgs/Hero-Games/Hero" + a + ".svg')";
        document.getElementById("Hero-Game02").style.backgroundImage =
      "url('/Imgs/Hero-Games/Hero" + b + ".svg')";
        document.getElementById("Hero-Game03").style.backgroundImage =
      "url('/Imgs/Hero-Games/Hero" + c + ".svg')";

        await new Promise(resolve => setTimeout(resolve, 5000)); // 10 segundos
    }
}

async function gerarNumeros() {
    do {
      a = getRandom1to8();
      b = getRandom1to8();
      c = getRandom1to8();
    } while (a === b || a === c || b === c);
}


window.onload = function () {
  let CurrentPage = window.location.pathname;

  if (CurrentPage == "Pixel-Play/index.html" || CurrentPage == "/index.html") {

    iniciarLoop();

  }

  let j = 0;

  for (j = 0; j <= localStorage.length; j++) {
    let id = localStorage.key(j);
    let dados = localStorage.getItem(id);
    var users = JSON.parse(dados);

    if (users) {
      if (users.Status_ == "Ativo") {
        Usuario = users.Username_;
        const Welcome = document.getElementById("Welcome-User");

        if (Welcome) {
          Welcome.innerHTML = Usuario + ", Bem vindo ao Menu!";
        }

        return false;
      }
    }
  }

  if (j > this.localStorage.length) {
    /* TIRA A BARRA PARA O GITHUB && E COLOCAR BARRA PARA LSEVER*/
    if (
      CurrentPage == "Pixel-Play/index.html" ||
      CurrentPage == "/index.html"
    ) {
      return false;
    }

    window.location.href = "../Login/Login.html";
  }
};

function BlueTeam() {
  
  document.getElementById("PlayerBlue").innerHTML = Usuario;
}
