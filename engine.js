// ============================================================
//  VOEX ENGINE v2.0 — автоматический расчёт очков и рейтинга
//
//  Правила:
//  • +25 за победу, 0 за поражение (очки не падают ниже 0)
//  • Доп. бонус +10 за победу над командой на 5+ мест выше
//  • Ранг = место по итоговым очкам (больше очков = выше)
// ============================================================

(function () {

  // ── Константы ─────────────────────────────────────────────
  const PTS_WIN        = 25;   // очки за победу
  const PTS_LOSS       = 0;    // очки за поражение
  const BONUS_WIN      = 10;   // бонус за победу над топовой командой
  const BONUS_THRESH   = 3;    // сколько команд должны набрать 100+ очков
  const BONUS_PTS_REQ  = 100;  // порог очков для включения бонусной системы

  // ── Утилита: результат матча для команды ──────────────────
  // +1 = победа, -1 = поражение, 0 = неизвестно
  function matchResult(match, teamName) {
    const isTeam1 = match.team1 === teamName;
    const raw = (match.score || "").replace(/\s/g, "");
    
    if (!raw.includes(":")) return 0;
    
    const parts = raw.split(":");
    const a = parseInt(parts[0], 10);
    const b = parseInt(parts[1], 10);
    
    if (isNaN(a) || isNaN(b)) return 0;
    
    const our = isTeam1 ? a : b;
    const they = isTeam1 ? b : a;
    
    if (our > they) return 1;
    if (they > our) return -1;
    return 0;
  }

  // ── Шаг 1: базовые очки без бонуса
  function calcBasePoints(teamName) {
    let pts = 0;
    (DATABASE.matches || []).forEach(m => {
      if (m.team1 !== teamName && m.team2 !== teamName) return;
      const r = matchResult(m, teamName);
      if (r === 1) pts += PTS_WIN;
    });
    return Math.max(0, pts);
  }

  // ── Шаг 2: проверка активности бонусной системы
  function bonusSystemActive(baseMap) {
    let count = 0;
    baseMap.forEach(pts => {
      if (pts >= BONUS_PTS_REQ) count++;
    });
    return count >= BONUS_THRESH;
  }

  // ── Шаг 3: полные очки с бонусом
  function calcPoints(teamName, tempRankMap, bonusActive) {
    let pts = 0;
    (DATABASE.matches || []).forEach(m => {
      if (m.team1 !== teamName && m.team2 !== teamName) return;
      const r = matchResult(m, teamName);
      if (r === 0) return;

      if (r === 1) {
        let gain = PTS_WIN;
        if (bonusActive) {
          const oppName = m.team1 === teamName ? m.team2 : m.team1;
          const myRank = tempRankMap.get(teamName) ?? 999;
          const oppRank = tempRankMap.get(oppName) ?? null;
          
          if (oppRank !== null && (myRank - oppRank) >= 5) {
            gain += BONUS_WIN;
          }
        }
        pts += gain;
      }
    });
    return Math.max(0, pts);
  }

  // ── Шаг 4: финальная таблица
  function buildRankings() {
    const teams = DATABASE.teams || [];

    // Базовые очки
    const baseMap = new Map();
    teams.forEach(t => {
      baseMap.set(t.name, calcBasePoints(t.name));
    });

    // Проверка активности бонуса
    const bonusActive = bonusSystemActive(baseMap);

    // Предварительный ранг
    const tempSorted = [...teams].sort((a, b) =>
      (baseMap.get(b.name) ?? 0) - (baseMap.get(a.name) ?? 0)
    );
    
    const tempRankMap = new Map();
    tempSorted.forEach((t, i) => {
      tempRankMap.set(t.name, i + 1);
    });

    // Финальные очки
    const finalMap = new Map();
    teams.forEach(t => {
      finalMap.set(t.name, calcPoints(t.name, tempRankMap, bonusActive));
    });

    // Финальный ранг
    const finalSorted = [...teams].sort((a, b) =>
      (finalMap.get(b.name) ?? 0) - (finalMap.get(a.name) ?? 0)
    );
    
    const rankMap = new Map();
    finalSorted.forEach((t, i) => {
      rankMap.set(t.name, i + 1);
    });

    return {
      finalMap,
      rankMap,
      finalSorted,
      bonusActive,
      baseMap
    };
  }

  // ── Шаг 5: очки по матчам для графика
  function matchPoints(teamName, tempRankMap, bonusActive) {
    const out = [];
    (DATABASE.matches || []).forEach(m => {
      if (m.team1 !== teamName && m.team2 !== teamName) return;
      const r = matchResult(m, teamName);
      if (r === 0) return;

      let pts = 0;
      let bonus = 0;

      if (r === 1) {
        pts = PTS_WIN;
        if (bonusActive) {
          const oppName = m.team1 === teamName ? m.team2 : m.team1;
          const myRank = tempRankMap.get(teamName) ?? 999;
          const oppRank = tempRankMap.get(oppName) ?? null;
          
          if (oppRank !== null && (myRank - oppRank) >= 5) {
            bonus = BONUS_WIN;
            pts += bonus;
          }
        }
      }

      out.push({ match: m, pts, bonus, result: r });
    });
    return out;
  }

  // ── Получить статистику команды
  function getTeamStats(teamName) {
    const matches = (DATABASE.matches || []).filter(
      m => m.team1 === teamName || m.team2 === teamName
    );
    
    let wins = 0, losses = 0;
    
    matches.forEach(m => {
      const result = matchResult(m, teamName);
      if (result === 1) wins++;
      if (result === -1) losses++;
    });
    
    const winrate = matches.length > 0 
      ? ((wins / matches.length) * 100).toFixed(1)
      : 0;
    
    return { wins, losses, winrate, total: matches.length };
  }

  // ── Экспорт
  window.VOEX = {
    buildRankings,
    matchPoints,
    matchResult,
    getTeamStats,
    PTS_WIN,
    PTS_LOSS,
    BONUS_WIN,
    BONUS_THRESH,
    BONUS_PTS_REQ,
  };

})();