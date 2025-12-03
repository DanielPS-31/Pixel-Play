
const Real_ID = 12345678;



function updateValue() {

    let valor = document.getElementById("ID_Partida").value;
    let button = document.getElementById("Entrar_Torneio");

    if (valor == Real_ID) {

        button.disabled = false;

    } else {

        button.disabled = true;
        
    }


}

