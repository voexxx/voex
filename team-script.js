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

  // ── Матчи команды ─────────────────────────────────────
  const teamMatches = (DATABASE.matches || []).filter(
    m => m.team1 === team.name || m.team2 === team.name
  );

  // ── Винрейт ────────────────────────────────────────────
  // Победа:   наш счёт > их счёт (2:0 или 2:1)
  // Поражение: наш счёт < их счёт (0:2 или 1:2)
  const winrateEl = document.getElementById("team-winrate");

  if (teamMatches.length === 0) {
    winrateEl.innerHTML = "";
  } else {
    let wins = 0, losses = 0;

    teamMatches.forEach(m => {
      const isTeam1 = m.team1 === team.name;
      const rawScore = (m.score || "").replace(/\s/g, "");
      if (!rawScore.includes(":")) return;
      const parts = rawScore.split(":");
      const our  = parseInt(isTeam1 ? parts[0] : parts[1], 10);
      const they = parseInt(isTeam1 ? parts[1] : parts[0], 10);
      if (isNaN(our) || isNaN(they)) return;
      if (our > they) wins++;
      else if (they > our) losses++;
    });

    const total = wins + losses;
    const pct   = total > 0 ? Math.round((wins / total) * 100) : 0;

    winrateEl.innerHTML = `
      <div class="winrate-block">
        <div class="winrate-stat">
          <span class="winrate-stat-value win">${wins}</span>
          <span class="winrate-stat-label">Победы</span>
        </div>
        <div class="winrate-stat">
          <span class="winrate-stat-value loss">${losses}</span>
          <span class="winrate-stat-label">Поражения</span>
        </div>
        <div class="winrate-bar-wrap">
          <div class="winrate-bar-label">
            <span>Винрейт</span>
            <span>${pct}%</span>
          </div>
          <div class="winrate-bar">
            <div class="winrate-bar-fill" style="width: ${pct}%"></div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Рендер матчей ─────────────────────────────────────
  const matchesEl = document.getElementById("team-matches");

  if (!teamMatches.length) {
    matchesEl.innerHTML = `<div class="team-matches-empty">Матчей пока нет</div>`;
  } else {
    matchesEl.innerHTML = teamMatches.map(m => {
      const isTeam1 = m.team1 === team.name;
      const ourName = isTeam1 ? m.team1 : m.team2;
      const oppName = isTeam1 ? m.team2 : m.team1;

      // Переворачиваем счёт для team2
      let score = m.score || "— : —";
      let isWin = null;
      if (score.includes(":")) {
        const raw = score.replace(/\s/g, "").split(":");
        const our  = parseInt(isTeam1 ? raw[0] : raw[1], 10);
        const they = parseInt(isTeam1 ? raw[1] : raw[0], 10);
        if (!isNaN(our) && !isNaN(they)) isWin = our > they;
        if (!isTeam1) score = raw[1] + ":" + raw[0];
      }

      const resultBadge = isWin === null ? ""
        : isWin
          ? `<span class="match-result win">Победа</span>`
          : `<span class="match-result loss">Поражение</span>`;

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
            <span>${m.date || ""} · ${m.format || ""}</span>
            ${resultBadge}
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
