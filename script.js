let Usuario = " ";

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

function Logout(){
    
    
    for (let i = 0; i <= localStorage.length; i++) {
    let id = localStorage.key(i);
    let dados = localStorage.getItem(id);
    var users = JSON.parse(dados);
    if(users.Status_=="Ativo"){
        var chave = id;
        var email = users.Email_;
        var password = users.Password_;
        var status = "Desativado";
        var usuario ={
            Username_ : users.Username_,
            Email_ : email,
            Password_ : password,
            Status_ : status
                     };
    
        localStorage.setItem( chave, JSON.stringify(usuario));
        window.location.href = "../Login/Login.html";
        return false;
    }
}

}

window.onload = function(){


    let CurrentPage = window.location.pathname;

    let j=0;

    for (j = 0; j <= localStorage.length; j++) {

        let id = localStorage.key(j);
        let dados = localStorage.getItem(id);
        var users = JSON.parse(dados);
        
        if (users) {

            if(users.Status_ == "Ativo"){
            Usuario = users.Username_
            const Welcome = document.getElementById("Welcome-User");
            
            if (Welcome) {
                Welcome.innerHTML = Usuario + ", Bem vindo ao Menu!";  
            }


            return false;
        }

        }

    
    }

        if(j>this.localStorage.length){

            

            if (CurrentPage == "index.html") {
                return false;
            }

            window.location.href = "./Login/Login.html";
        }

}


