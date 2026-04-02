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
  const PREVIEW = 2; // сколько матчей показывать по умолчанию

  if (!teamMatches.length) {
    matchesEl.innerHTML = `<div class="team-matches-empty">Матчей пока нет</div>`;
  } else {

    // Формируем данные по каждому матчу
    const matchData = teamMatches.map(m => {
      const isTeam1 = m.team1 === team.name;
      const ourName = isTeam1 ? m.team1 : m.team2;
      const oppName = isTeam1 ? m.team2 : m.team1;

      let score = m.score || "— : —";
      let isWin = null;
      if (score.includes(":")) {
        const raw = score.replace(/\s/g, "").split(":");
        const our  = parseInt(isTeam1 ? raw[0] : raw[1], 10);
        const they = parseInt(isTeam1 ? raw[1] : raw[0], 10);
        if (!isNaN(our) && !isNaN(they)) isWin = our > they;
        if (!isTeam1) score = raw[1] + ":" + raw[0];
      }

      const oppTeam = DATABASE.teams.find(t => t.name === oppName);
      const oppHtml = oppTeam
        ? `<a href="team.html?team=${encodeURIComponent(oppTeam.id)}" class="match-team-link">${oppName}</a>`
        : `<span class="match-team-plain">${oppName}</span>`;

      const mapsHtml = (m.maps || [])
        .map(mp => `<span class="match-map-item">${mp}</span>`)
        .join("");

      const resultBadge = isWin === null ? ""
        : isWin
          ? `<span class="match-result win">Победа</span>`
          : `<span class="match-result loss">Поражение</span>`;

      return { ourName, oppHtml, score, isWin, resultBadge, mapsHtml,
               date: m.date || "", format: m.format || "" };
    });

    // Рендерим карточки
    const cardsHtml = matchData.map((d, i) => {
      const hidden = i >= PREVIEW ? "match-card-hidden" : "";
      return `
        <div class="match-card ${hidden}">
          <div class="match-top">
            <span>${d.date} · ${d.format}</span>
            ${d.resultBadge}
          </div>
          <div class="match-body">
            <div class="match-team">${d.ourName}</div>
            <div class="match-score">${d.score}</div>
            <div class="match-team r">${d.oppHtml}</div>
          </div>
          ${d.mapsHtml ? `<div class="match-maps">${d.mapsHtml}</div>` : ""}
        </div>`;
    }).join("");

    // Кнопка «Показать все» — только если матчей > PREVIEW
    const needToggle = matchData.length > PREVIEW;
    const toggleBtn  = needToggle ? `
      <button class="matches-toggle-btn" id="matches-toggle">
        <i class="matches-toggle-arrow">↑</i>
        <span class="toggle-text">Показать все (${matchData.length})</span>
      </button>` : "";

    // SVG-график формы
    const formHtml = buildFormChart(matchData);

    matchesEl.innerHTML = `
      <div class="team-matches-list matches-collapsed" id="matches-list-inner">
        ${cardsHtml}
      </div>
      ${toggleBtn}
      ${formHtml}
    `;

    // Логика кнопки
    if (needToggle) {
      const btn   = document.getElementById("matches-toggle");
      const list  = document.getElementById("matches-list-inner");
      let expanded = false;

      btn.addEventListener("click", () => {
        expanded = !expanded;
        if (expanded) {
          list.classList.remove("matches-collapsed");
          btn.classList.add("expanded");
          btn.querySelector(".toggle-text").textContent = "Свернуть";
        } else {
          list.classList.add("matches-collapsed");
          btn.classList.remove("expanded");
          btn.querySelector(".toggle-text").textContent =
            `Показать все (${matchData.length})`;
        }
      });
    }
  }

  // ── Поинты команды (авто через VOEX engine) ───────────────
  const { finalMap, rankMap, bonusActive } = VOEX.buildRankings();
  const currentPoints  = finalMap.get(team.name) ?? 0;
  const currentRank    = rankMap.get(team.name) ?? "—";
  const pointsBadgeEl  = document.getElementById("team-points-badge");
  pointsBadgeEl.innerHTML = `
    <div class="team-points-badge">
      <span class="team-points-badge-label">Очки</span>
      <span>${currentPoints} pts</span>
      <span class="team-points-badge-label" style="margin-left:8px">Ранг</span>
      <span>#${currentRank}</span>
    </div>`;

  // ── SVG-график поинтов (+25 победа / -25 поражение) ────
  function buildFormChart(data) {
    const results = data.filter(d => d.isWin !== null);

    if (results.length === 0) {
      return `<div class="form-chart-wrap">
        <div class="form-chart-header">
          <span class="form-chart-label">График поинтов</span>
        </div>
        <div class="form-chart-no-data">Нет данных для графика</div>
      </div>`;
    }

    // Используем реальные очки из engine (с учётом бонуса за ранг)
    // VOEX.matchPoints возвращает [{match, pts, bonus, result}] в порядке матчей
    const { rankMap: tempRank, bonusActive: ba } = VOEX.buildRankings();
    const enginePts = VOEX.matchPoints(team.name, tempRank, ba);

    // Накапливаем поинты: точка 0 = старт (0)
    const pts = [0];
    enginePts.forEach(ep => {
      pts.push(pts[pts.length - 1] + ep.pts);
    });

    const minVal = Math.min(...pts);
    const maxVal = Math.max(...pts);
    const yMin   = Math.min(0, Math.floor(minVal / 25) * 25);
    const yMax   = Math.max(50, Math.ceil(maxVal / 25) * 25 + 25);
    const yRange = yMax - yMin;

    // Шаг тиков
    const tickStep = yRange <= 150 ? 25 : yRange <= 300 ? 50 : 100;
    const yTicks = [];
    for (let v = 0; v <= yMax; v += tickStep) yTicks.push(v);
    if (yMin < 0) {
      for (let v = -tickStep; v >= yMin; v -= tickStep) yTicks.push(v);
    }

    const W = 420, H = 120;
    const PAD_L = 38, PAD_R = 10, PAD_T = 10, PAD_B = 14;
    const innerW = W - PAD_L - PAD_R;
    const innerH = H - PAD_T - PAD_B;

    const toX = i  => PAD_L + (i / Math.max(pts.length - 1, 1)) * innerW;
    const toY = v  => PAD_T + innerH - ((v - yMin) / yRange) * innerH;

    const chartPoints = pts.map((v, i) => ({ x: toX(i), y: toY(v), v }));

    // Smooth bezier path
    const pathD = chartPoints.reduce((acc, p, i) => {
      if (i === 0) return `M${p.x.toFixed(1)},${p.y.toFixed(1)}`;
      const prev = chartPoints[i - 1];
      const cpx  = (prev.x + p.x) / 2;
      return `${acc} C${cpx.toFixed(1)},${prev.y.toFixed(1)} ${cpx.toFixed(1)},${p.y.toFixed(1)} ${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    }, "");

    const lastP  = chartPoints[chartPoints.length - 1];
    const firstP = chartPoints[0];
    const zy     = toY(0).toFixed(1);
    const areaD  = `${pathD} L${lastP.x.toFixed(1)},${zy} L${firstP.x.toFixed(1)},${zy} Z`;

    const finalPts  = pts[pts.length - 1];
    const lineColor = finalPts >= 0 ? "#2a9d5c" : "#d63e2a";
    const areaColor = lineColor;

    // Grid + Y labels
    const gridLines = yTicks.map(v => {
      const gy = toY(v).toFixed(1);
      const isZero = v === 0;
      return `<line x1="${PAD_L}" y1="${gy}" x2="${W - PAD_R}" y2="${gy}" stroke="${isZero ? "var(--muted)" : "var(--border)"}" stroke-width="${isZero ? 1 : 0.6}" stroke-dasharray="${isZero ? "" : "3 3"}"/>`;
    }).join("");

    const yLabels = yTicks.map(v => {
      const gy = toY(v).toFixed(1);
      return `<text x="${PAD_L - 5}" y="${gy}" dy="4" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="9" fill="var(--muted)">${v}</text>`;
    }).join("");

    // Dots — только за матчи (i=1..n)
    const dotsHtml = chartPoints.slice(1).map((p, i) => {
      const win   = results[i].isWin;
      const color = win ? "#2a9d5c" : "#d63e2a";
      const delay = (0.4 + i * 0.07).toFixed(2);
      return `<circle class="form-chart-dot" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="${color}" stroke="${color}" stroke-width="1.5" fill-opacity="0.9" style="animation-delay:${delay}s"/>`;
    }).join("");

    const gradId = "ptGrad";
    const ptsLabel = (finalPts >= 0 ? "+" : "") + finalPts + " pts";

    return `
      <div class="form-chart-wrap">
        <div class="form-chart-header">
          <span class="form-chart-label">График поинтов</span>
          <span class="form-chart-cur">${ptsLabel}</span>
        </div>
        <svg class="form-chart-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${areaColor}" stop-opacity="0.2"/>
              <stop offset="100%" stop-color="${areaColor}" stop-opacity="0.02"/>
            </linearGradient>
          </defs>
          ${gridLines}
          ${yLabels}
          <path class="form-chart-area" d="${areaD}" fill="url(#${gradId})"/>
          <path class="form-chart-line" d="${pathD}" stroke="${lineColor}"/>
          ${dotsHtml}
        </svg>
      </div>`;
  }
}
