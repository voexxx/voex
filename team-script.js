const params = new URLSearchParams(window.location.search);
const teamId = decodeURIComponent(params.get("team") || "");

const team = DATABASE.teams.find(t => t.id === teamId);

if (!team) {
  document.querySelector(".team-page").innerHTML = `
    <h1 style="font-size:28px;font-weight:800;margin-bottom:20px;">Команда не найдена</h1>
    <a href="index.html" class="back-btn">← Назад</a>
  `;
} else {
  document.title = `VOEX NEWS — ${team.name}`;
  document.getElementById("team-name").textContent = team.name;

  // Players
  const playersEl = document.getElementById("team-players");
  const validPlayers = team.players.filter(p => p && p.trim() !== "");
  playersEl.innerHTML = validPlayers.map(p => `
    <div class="player-slot">
      <div class="player-avatar"></div>
      <div class="player-name">${p}</div>
    </div>
  `).join("");

  // Achievements
  const achEl = document.getElementById("team-achievements");
  if (team.achievements && team.achievements.length > 0) {
    achEl.innerHTML = team.achievements.map(a => `<li>${a}</li>`).join("");
  } else {
    achEl.innerHTML = `<li class="info-empty">Достижений пока нет</li>`;
  }

  // Other players
  const otherEl = document.getElementById("team-other");
  const validOther = (team.otherPlayers || []).filter(p => p && p.trim() !== "");
  if (validOther.length > 0) {
    otherEl.innerHTML = validOther.map(p => `<li>${p}</li>`).join("");
  } else {
    otherEl.innerHTML = `<li class="info-empty">Нет данных</li>`;
  }
}
