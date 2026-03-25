const params = new URLSearchParams(window.location.search);
const teamId = params.get("team");

const team = DATABASE.teams.find(t => t.id === teamId);

if (!team) {
  document.querySelector(".team-page").innerHTML = "<h1>Команда не найдена</h1>";
} else {
  document.getElementById("team-name").textContent = team.name;

  document.getElementById("team-players").innerHTML =
    team.players.map(p => `
      <div class="player-slot">
        <div class="player-avatar"></div>
        <div class="player-name">${p}</div>
      </div>
    `).join("");

  document.getElementById("team-achievements").innerHTML =
    team.achievements.map(a => `<li>${a}</li>`).join("");

  document.getElementById("team-other").innerHTML =
    team.otherPlayers.map(p => `<li>${p}</li>`).join("");
}


