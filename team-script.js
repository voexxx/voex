const params = new URLSearchParams(window.location.search);
const teamId  = decodeURIComponent(params.get("team") || "");
const team    = DATABASE.teams.find(t => t.id === teamId);

// Кнопка «Назад»
const backBtn = document.getElementById("back-btn");
backBtn.href = "index.html";

if (!team) {
  document.querySelector(".team-page").innerHTML = `
    <h1 style="font-size:26px;font-weight:800;margin-bottom:20px;">Команда не найдена</h1>
    <a href="index.html" class="back-btn">← Назад</a>
  `;
} else {
  document.title = "VOEX NEWS — " + team.name;
  document.getElementById("team-name").textContent = team.name;

  // Логотип
  const logoBox = document.getElementById("team-logo-box");
  const safeId = encodeURIComponent(team.id);
  logoBox.innerHTML = `<img src="logo/${safeId}.jpg" alt="${team.name}"
    onerror="this.style.display='none';this.parentElement.innerHTML='<svg class=\\'team-logo-placeholder\\' viewBox=\\'0 0 36 36\\' fill=\\'none\\'><rect x=\\'4\\' y=\\'4\\' width=\\'28\\' height=\\'28\\' rx=\\'6\\' stroke=\\'white\\' stroke-width=\\'2\\' stroke-dasharray=\\'4 3\\'/><path d=\\'M14 22L18 12L22 22M16 19H20\\' stroke=\\'white\\' stroke-width=\\'1.8\\' stroke-linecap=\\'round\\'/></svg>'">`;

  // Telegram
  if (team.telegram) {
    const tgBtn = document.getElementById("team-tg-btn");
    tgBtn.href = team.telegram;
    tgBtn.style.display = "inline-flex";
  }

  // Игроки
  const validPlayers = (team.players || []).filter(p => p && p.trim());
  const silhouettePath = team.silhouette || "sg.png";
  document.getElementById("team-players").innerHTML = validPlayers.map(p => `
    <div class="player-slot">
      <div class="player-avatar" style="background-image: url('${silhouettePath}')"></div>
      <div class="player-name">${p}</div>
    </div>
  `).join("");

  // Достижения
  const achEl = document.getElementById("team-achievements");
  achEl.innerHTML = (team.achievements && team.achievements.length)
    ? team.achievements.map(a => `<li>${a}</li>`).join("")
    : `<li class="info-empty">Достижений пока нет</li>`;

  // Остальные игроки
  const validOther = (team.otherPlayers || []).filter(p => p && p.trim());
  document.getElementById("team-other").innerHTML = validOther.length
    ? validOther.map(p => `<li>${p}</li>`).join("")
    : `<li class="info-empty">Нет данных</li>`;

  // Матчи команды
  const teamMatches = (DATABASE.matches || []).filter(
    m => m.team1 === team.name || m.team2 === team.name
  );

  // Винрейт
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
        <div class="winrate-stat"><span class="winrate-stat-value win">${wins}</span><span class="winrate-stat-label">Победы</span></div>
        <div class="winrate-stat"><span class="winrate-stat-value loss">${losses}</span><span class="winrate-stat-label">Поражения</span></div>
        <div class="winrate-bar-wrap">
          <div class="winrate-bar-label"><span>Винрейт</span><span>${pct}%</span></div>
          <div class="winrate-bar"><div class="winrate-bar-fill" style="width: ${pct}%"></div></div>
        </div>
      </div>`;
  }

  // Рендер матчей
  const matchesEl = document.getElementById("team-matches");
  const PREVIEW = 2;
  if (!teamMatches.length) {
    matchesEl.innerHTML = `<div class="team-matches-empty">Матчей пока нет</div>`;
  } else {
    const matchData = teamMatches.map(m => {
      const isTeam1 = m.team1 === team.name;
      const oppName = isTeam1 ? m.team2 : m.team1;
      let score = m.score || "— : —";
      let isWin = null;
      if (score.includes(":")) {
        const raw = score.replace(/\s/g, "").split(":");
        const our = parseInt(isTeam1 ? raw[0] : raw[1], 10);
        const they = parseInt(isTeam1 ? raw[1] : raw[0], 10);
        if (!isNaN(our) && !isNaN(they)) isWin = our > they;
        if (!isTeam1) score = raw[1] + ":" + raw[0];
      }
      const oppTeam = DATABASE.teams.find(t => t.name === oppName);
      function mLogo(name, id) {
        return `<div class="match-team-logo"><img src="logo/${encodeURIComponent(id || name)}.jpg" alt="${name}" onerror="this.style.display='none'"></div>`;
      }
      const ourLogoHtml = mLogo(team.name, team.id);
      const oppLogoHtml = oppTeam ? mLogo(oppName, oppTeam.id) : mLogo(oppName, oppName);
      const oppLink = oppTeam
        ? `<a href="team.html?team=${encodeURIComponent(oppTeam.id)}" class="match-team-link">${oppName}</a>`
        : `<span class="match-team-plain">${oppName}</span>`;
      const mapsHtml = (m.maps || []).filter(mp => mp && mp.trim()).map(mp => `<span class="match-map-item">${mp}</span>`).join("");
      const resultBadge = isWin === null ? "" : isWin ? `<span class="match-result win">Победа</span>` : `<span class="match-result loss">Поражение</span>`;
      return { ourName: team.name, ourLogoHtml, oppLink, oppLogoHtml, score, isWin, resultBadge, mapsHtml, date: m.date || "", format: m.format || "" };
    });

    const cardsHtml = matchData.map((d, i) => {
      const hidden = i >= PREVIEW ? "match-card-hidden" : "";
      return `
        <div class="match-card ${hidden}">
          <div class="match-top"><span>${d.date} · ${d.format}</span>${d.resultBadge}</div>
          <div class="match-body">
            <div class="match-team">${d.ourLogoHtml}${d.ourName}</div>
            <div class="match-score">${d.score}</div>
            <div class="match-team r">${d.oppLogoHtml}${d.oppLink}</div>
          </div>
          ${d.mapsHtml ? `<div class="match-maps">${d.mapsHtml}</div>` : ""}
        </div>`;
    }).join("");

    const needToggle = matchData.length > PREVIEW;
    const toggleBtn = needToggle ? `
      <button class="matches-toggle-btn" id="matches-toggle">
        <i class="matches-toggle-arrow">↑</i>
        <span class="toggle-text">Показать все (${matchData.length})</span>
      </button>` : "";

    const formHtml = buildFormChart(matchData);
    matchesEl.innerHTML = `<div class="team-matches-list matches-collapsed" id="matches-list-inner">${cardsHtml}</div>${toggleBtn}${formHtml}`;

    if (needToggle) {
      const btn = document.getElementById("matches-toggle");
      const list = document.getElementById("matches-list-inner");
      let expanded = false;
      btn.addEventListener("click", () => {
        expanded = !expanded;
        list.classList.toggle("matches-collapsed", !expanded);
        btn.classList.toggle("expanded", expanded);
        btn.querySelector(".toggle-text").textContent = expanded ? "Свернуть" : `Показать все (${matchData.length})`;
      });
    }
  }

  // Поинты
  const { finalMap, rankMap } = VOEX.buildRankings();
  const currentPoints = finalMap.get(team.name) ?? 0;
  const currentRank = rankMap.get(team.name) ?? "—";
  document.getElementById("team-points-badge").innerHTML = `
    <div class="team-points-badge">
      <span class="team-points-badge-label">Очки</span><span>${currentPoints} pts</span>
      <span class="team-points-badge-label" style="margin-left:8px">Ранг</span><span>#${currentRank}</span>
    </div>`;

  // График
  function buildFormChart(data) {
    const results = data.filter(d => d.isWin !== null);
    if (results.length === 0) return `<div class="form-chart-wrap"><div class="form-chart-header"><span class="form-chart-label">График поинтов</span></div><div class="form-chart-no-data">Нет данных для графика</div></div>`;
    const { rankMap: tempRank, bonusActive: ba } = VOEX.buildRankings();
    const enginePts = VOEX.matchPoints(team.name, tempRank, ba);
    const pts = [0];
    enginePts.forEach(ep => pts.push(pts[pts.length - 1] + ep.pts));
    const minVal = Math.min(...pts), maxVal = Math.max(...pts);
    const yMin = Math.min(0, Math.floor(minVal / 25) * 25), yMax = Math.max(50, Math.ceil(maxVal / 25) * 25 + 25);
    const yRange = yMax - yMin;
    const tickStep = yRange <= 150 ? 25 : yRange <= 300 ? 50 : 100;
    const yTicks = []; for (let v = 0; v <= yMax; v += tickStep) yTicks.push(v); if (yMin < 0) for (let v = -tickStep; v >= yMin; v -= tickStep) yTicks.push(v);
    const W = 420, H = 120, PAD_L = 38, PAD_R = 10, PAD_T = 10, PAD_B = 14;
    const innerW = W - PAD_L - PAD_R, innerH = H - PAD_T - PAD_B;
    const toX = i => PAD_L + (i / Math.max(pts.length - 1, 1)) * innerW;
    const toY = v => PAD_T + innerH - ((v - yMin) / yRange) * innerH;
    const chartPoints = pts.map((v, i) => ({ x: toX(i), y: toY(v), v }));
    const pathD = chartPoints.reduce((acc, p, i) => {
      if (i === 0) return `M${p.x.toFixed(1)},${p.y.toFixed(1)}`;
      const prev = chartPoints[i - 1], cpx = (prev.x + p.x) / 2;
      return `${acc} C${cpx.toFixed(1)},${prev.y.toFixed(1)} ${cpx.toFixed(1)},${p.y.toFixed(1)} ${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    }, "");
    const lastP = chartPoints[chartPoints.length - 1], firstP = chartPoints[0], zy = toY(0).toFixed(1);
    const areaD = `${pathD} L${lastP.x.toFixed(1)},${zy} L${firstP.x.toFixed(1)},${zy} Z`;
    const finalPts = pts[pts.length - 1], lineColor = finalPts >= 0 ? "#2a9d5c" : "#d63e2a";
    const gridLines = yTicks.map(v => {
      const gy = toY(v).toFixed(1), isZero = v === 0;
      return `<line x1="${PAD_L}" y1="${gy}" x2="${W - PAD_R}" y2="${gy}" stroke="${isZero ? "var(--muted)" : "var(--border)"}" stroke-width="${isZero ? 1 : 0.6}" stroke-dasharray="${isZero ? "" : "3 3"}"/>`;
    }).join("");
    const yLabels = yTicks.map(v => `<text x="${PAD_L - 5}" y="${toY(v).toFixed(1)}" dy="4" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="9" fill="var(--muted)">${v}</text>`).join("");
    const dotsHtml = chartPoints.slice(1).map((p, i) => {
      const win = results[i].isWin, color = win ? "#2a9d5c" : "#d63e2a";
      return `<circle class="form-chart-dot" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="${color}" stroke="${color}" stroke-width="1.5" fill-opacity="0.9" style="animation-delay:${(0.4 + i * 0.07).toFixed(2)}s"/>`;
    }).join("");
    const gradId = "ptGrad" + Date.now();
    return `<div class="form-chart-wrap"><div class="form-chart-header"><span class="form-chart-label">График поинтов</span><span class="form-chart-cur">${finalPts >= 0 ? "+" : ""}${finalPts} pts</span></div>
      <svg class="form-chart-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${lineColor}" stop-opacity="0.2"/><stop offset="100%" stop-color="${lineColor}" stop-opacity="0.02"/></linearGradient></defs>
        ${gridLines}${yLabels}
        <path class="form-chart-area" d="${areaD}" fill="url(#${gradId})"/>
        <path class="form-chart-line" d="${pathD}" stroke="${lineColor}"/>
        ${dotsHtml}
      </svg></div>`;
  }
}