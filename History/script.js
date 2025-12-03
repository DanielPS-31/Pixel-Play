function AllGames() {
    document.getElementById("CsRow").style.display = "flex";
    document.getElementById("VavaRow").style.display = "flex";
    document.getElementById("LolRow").style.display = "flex";

}


function Cs2() {

    document.getElementById("CsRow").style.display = "flex";
    document.getElementById("VavaRow").style.display = "none";
    document.getElementById("LolRow").style.display = "none";
    
}


function Valorant() {

    document.getElementById("VavaRow").style.display = "flex";
    document.getElementById("CsRow").style.display = "none";
    document.getElementById("LolRow").style.display = "none";

}


function Lol() {

    document.getElementById("LolRow").style.display = "flex";
    document.getElementById("CsRow").style.display = "none";
    document.getElementById("VavaRow").style.display = "none";
}