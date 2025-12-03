function generateTournamentID() {
  let id = "";
  for (let i = 0; i < 8; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
}

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("tournament-id").value = generateTournamentID();
});
