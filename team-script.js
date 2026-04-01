const params = new URLSearchParams(window.location.search);
const teamId  = decodeURIComponent(params.get("team") || "");
const team    = DATABASE.teams.find(t => t.id === teamId);

if (!team) {
  document.querySelector(".team-page").innerHTML = `
    <h1 style="font-size:26px;font-weight:800;margin-bottom:20px;">Команда не найдена</h1>
    <a href="index.html" class="back-btn">← Назад</a>
  `;
} else {
  document.title = "VOEX NEWS — " + team.name;
  document.getElementById("team-name").textContent = team.name;

  // ── Игроки ─────────────────────────────────────────────
  const validPlayers = (team.players || []).filter(p => p && p.trim());
  document.getElementById("team-players").innerHTML = validPlayers.map(p => `
    <div class="player-slot">
      <div class="player-avatar"></div>
      <div class="player-name">${p}</div>
    </div>
  `).join("");

  // ── Достижения ─────────────────────────────────────────
  const achEl = document.getElementById("team-achievements");
  achEl.innerHTML = (team.achievements && team.achievements.length)
    ? team.achievements.map(a => `<li>${a}</li>`).join("")
    : `<li class="info-empty">Достижений пока нет</li>`;

  // ── Остальные игроки ───────────────────────────────────
  const validOther = (team.otherPlayers || []).filter(p => p && p.trim());
  document.getElementById("team-other").innerHTML = validOther.length
    ? validOther.map(p => `<li>${p}</li>`).join("")
    : `<li class="info-empty">Нет данных</li>`;

  // ── Матчи команды (FIX #5) ─────────────────────────────
  // Матч добавляется в data.js один раз:
  //   { id:2, team1:"Burmalda", team2:"MVTeam", score:"2:1",
  //     date:"28 МАР", format:"BO3", maps:["Mirage 13:8","Nuke 10:13"] }
  // Появляется на страницах обеих команд автоматически.
  // Счёт переворачивается если текущая команда — team2.

  const teamMatches = (DATABASE.matches || []).filter(
    m => m.team1 === team.name || m.team2 === team.name
  );

  const matchesEl = document.getElementById("team-matches");

  if (!teamMatches.length) {
    matchesEl.innerHTML = `<div class="team-matches-empty">Матчей пока нет</div>`;
  } else {
    matchesEl.innerHTML = teamMatches.map(m => {
      const isTeam1 = m.team1 === team.name;
      const ourName = isTeam1 ? m.team1 : m.team2;
      const oppName = isTeam1 ? m.team2 : m.team1;

      // FIX: переворачиваем счёт для team2
      // "2:0" у team1 → "0:2" у team2
      let score = m.score || "— : —";
      if (!isTeam1 && score.includes(":")) {
        const p = score.split(":");
        score = p[1].trim() + ":" + p[0].trim();
      }

      // Ссылка на противника
      const oppTeam = DATABASE.teams.find(t => t.name === oppName);
      const oppHtml = oppTeam
        ? `<a href="team.html?team=${encodeURIComponent(oppTeam.id)}" class="match-team-link">${oppName}</a>`
        : `<span class="match-team-plain">${oppName}</span>`;

      const mapsHtml = (m.maps || [])
        .map(mp => `<span class="match-map-item">${mp}</span>`)
        .join("");

      return `
        <div class="match-card">
          <div class="match-top">
            <span>${m.date || ""}</span>
            <span>${m.format || ""}</span>
          </div>
          <div class="match-body">
            <div class="match-team">${ourName}</div>
            <div class="match-score">${score}</div>
            <div class="match-team r">${oppHtml}</div>
          </div>
          ${mapsHtml ? `<div class="match-maps">${mapsHtml}</div>` : ""}
        </div>
      `;
    }).join("");
  }
}
