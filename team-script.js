const params = new URLSearchParams(window.location.search);
const teamId = decodeURIComponent(params.get("team") || "");
const team = DATABASE.teams.find(t => t.id === teamId);

if (!team) {
  document.querySelector(".team-page").innerHTML = `
    <h1 style="font-size:26px;font-weight:800;margin-bottom:20px;">Команда не найдена</h1>
    <a href="index.html" class="back-btn">← Назад</a>
  `;
} else {
  document.title = "VOEX NEWS — " + team.name;
  document.getElementById("team-name").textContent = team.name;

  // ── Игроки ──────────────────────────────────────────────
  const validPlayers = (team.players || []).filter(p => p && p.trim() !== "");
  document.getElementById("team-players").innerHTML = validPlayers.map(p => `
    <div class="player-slot">
      <div class="player-avatar"></div>
      <div class="player-name">${p}</div>
    </div>
  `).join("");

  // ── Достижения ──────────────────────────────────────────
  const achEl = document.getElementById("team-achievements");
  if (team.achievements && team.achievements.length > 0) {
    achEl.innerHTML = team.achievements.map(a => `<li>${a}</li>`).join("");
  } else {
    achEl.innerHTML = `<li class="info-empty">Достижений пока нет</li>`;
  }

  // ── Остальные игроки ────────────────────────────────────
  const validOther = (team.otherPlayers || []).filter(p => p && p.trim() !== "");
  const otherEl = document.getElementById("team-other");
  if (validOther.length > 0) {
    otherEl.innerHTML = validOther.map(p => `<li>${p}</li>`).join("");
  } else {
    otherEl.innerHTML = `<li class="info-empty">Нет данных</li>`;
  }

  // ── Матчи команды (авто по team1/team2 в data.js) ───────
  //
  // Как добавлять матч в data.js:
  //   { id: 2, team1: "Burmalda", team2: "MVTeam", score: "2:1",
  //     date: "28 МАР", format: "BO3", maps: ["Mirage 13:8", "Nuke 10:13", "Inferno 13:11"] }
  //
  // Матч появится автоматически на страницах обеих команд.

  const teamMatches = (DATABASE.matches || []).filter(
    m => m.team1 === team.name || m.team2 === team.name
  );

  const matchesEl = document.getElementById("team-matches");

  if (teamMatches.length > 0) {
    matchesEl.innerHTML = teamMatches.map(m => {
      // Определяем, за кого «мы» и за кого «они»
      const isTeam1 = m.team1 === team.name;
      const ourName  = isTeam1 ? m.team1 : m.team2;
      const oppName  = isTeam1 ? m.team2 : m.team1;

      // Ссылка на страницу противника
      const oppTeam = DATABASE.teams.find(t => t.name === oppName);
      const oppLink = oppTeam
        ? `<a href="team.html?team=${encodeURIComponent(oppTeam.id)}" class="match-team-link">${oppName}</a>`
        : `<span>${oppName}</span>`;

      const score = m.score || "— : —";

      const maps = (m.maps || []).map(mp =>
        `<span class="match-map-item">${mp}</span>`
      ).join("");

      return `
        <div class="match-card">
          <div class="match-top">
            <span>${m.date || ""} · ${m.format || ""}</span>
          </div>
          <div class="match-body">
            <div class="match-team">${ourName}</div>
            <div class="match-score">${score}</div>
            <div class="match-team r">${oppLink}</div>
          </div>
          ${maps ? `<div class="match-maps">${maps}</div>` : ""}
        </div>
      `;
    }).join("");
  } else {
    matchesEl.innerHTML = `<div class="team-matches-empty">Матчей пока нет</div>`;
  }
}
