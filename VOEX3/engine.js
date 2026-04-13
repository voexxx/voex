// ============================================================
//  VOEX ENGINE — автоматический расчёт очков и рейтинга
//
//  Правила:
//  • +25 за победу, 0 за поражение (очки не падают ниже 0)
//  • Доп. бонус +10 за победу над командой на 5+ мест выше —
//    ТОЛЬКО если хотя бы 3 команды уже набрали 100+ очков
//  • Ранг = место по итоговым очкам (больше очков = выше)
// ============================================================

(function () {

  // ── Константы ─────────────────────────────────────────────
  const PTS_WIN        = 25;   // очки за победу
  const PTS_LOSS       =  0;   // очки за поражение (пол = 0, не минус)
  const BONUS_WIN      = 10;   // бонус за победу над командой на 5+ мест выше
  const BONUS_THRESH   =  3;   // сколько команд должны набрать 100+ очков
  const BONUS_PTS_REQ  = 100;  // порог очков для включения бонусной системы

  // ── Утилита: результат матча для команды ──────────────────
  // +1 = победа, -1 = поражение, 0 = неизвестно
  function matchResult(match, teamName) {
    const isTeam1 = match.team1 === teamName;
    const raw     = (match.score || "").replace(/\s/g, "");
    if (!raw.includes(":")) return 0;
    const [a, b] = raw.split(":").map(Number);
    if (isNaN(a) || isNaN(b)) return 0;
    const our  = isTeam1 ? a : b;
    const they = isTeam1 ? b : a;
    if (our > they)  return  1;
    if (they > our)  return -1;
    return 0;
  }

  // ── Шаг 1: базовые очки без бонуса (только +25/0, пол=0) ─
  // Идём по матчам последовательно, текущий баланс не может упасть ниже 0
  function calcBasePoints(teamName) {
    let pts = 0;
    (DATABASE.matches || []).forEach(m => {
      if (m.team1 !== teamName && m.team2 !== teamName) return;
      const r = matchResult(m, teamName);
      if (r === 1)       pts += PTS_WIN;
      // r === -1 → +0, pts остаётся, никогда не уходит ниже 0
    });
    return pts; // уже >= 0 (т.к. мы никогда не вычитаем)
  }

  // ── Шаг 2: проверка — включена ли бонусная система ────────
  // Бонусы активны только если 3+ команды набрали 100+ базовых очков
  function bonusSystemActive(baseMap) {
    let count = 0;
    baseMap.forEach(pts => { if (pts >= BONUS_PTS_REQ) count++; });
    return count >= BONUS_THRESH;
  }

  // ── Шаг 3: полные очки с бонусом ──────────────────────────
  // Идём по матчам последовательно.
  // При каждой победе проверяем бонус (если система активна).
  // Пол = 0 (баланс никогда не опускается ниже нуля).
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
          const myRank  = tempRankMap.get(teamName) ?? 999;
          const oppRank = tempRankMap.get(oppName)  ?? null;
          // Бонус если противник в списке и его ранг на 5+ позиций выше
          if (oppRank !== null && (myRank - oppRank) >= 5) {
            gain += BONUS_WIN;
          }
        }
        pts += gain;
      }
      // поражение: ничего не меняем, pts остаётся >= 0
    });
    return pts;
  }

  // ── Шаг 4: финальная таблица ──────────────────────────────
  function buildRankings() {
    const teams = DATABASE.teams || [];

    // 1) Базовые очки — без бонуса
    const baseMap = new Map();
    teams.forEach(t => baseMap.set(t.name, calcBasePoints(t.name)));

    // 2) Проверяем, активна ли бонусная система
    const bonusActive = bonusSystemActive(baseMap);

    // 3) Предварительный ранг по базовым очкам
    const tempSorted = [...teams].sort((a, b) =>
      (baseMap.get(b.name) ?? 0) - (baseMap.get(a.name) ?? 0)
    );
    const tempRankMap = new Map();
    tempSorted.forEach((t, i) => tempRankMap.set(t.name, i + 1));

    // 4) Финальные очки (с бонусом если активен)
    const finalMap = new Map();
    teams.forEach(t => finalMap.set(t.name, calcPoints(t.name, tempRankMap, bonusActive)));

    // 5) Финальный ранг
    const finalSorted = [...teams].sort((a, b) =>
      (finalMap.get(b.name) ?? 0) - (finalMap.get(a.name) ?? 0)
    );
    const rankMap = new Map();
    finalSorted.forEach((t, i) => rankMap.set(t.name, i + 1));

    return { finalMap, rankMap, finalSorted, bonusActive, baseMap };
  }

  // ── Шаг 5: очки по матчам для одной команды ──────────────
  // Используется для графика. Возвращает [{ match, pts, bonus, result }]
  function matchPoints(teamName, tempRankMap, bonusActive) {
    const out = [];
    (DATABASE.matches || []).forEach(m => {
      if (m.team1 !== teamName && m.team2 !== teamName) return;
      const r = matchResult(m, teamName);
      if (r === 0) return;

      let pts   = 0;
      let bonus = 0;

      if (r === 1) {
        pts = PTS_WIN;
        if (bonusActive) {
          const oppName = m.team1 === teamName ? m.team2 : m.team1;
          const myRank  = tempRankMap.get(teamName) ?? 999;
          const oppRank = tempRankMap.get(oppName)  ?? null;
          if (oppRank !== null && (myRank - oppRank) >= 5) {
            bonus = BONUS_WIN;
            pts  += bonus;
          }
        }
      }
      // поражение: pts=0

      out.push({ match: m, pts, bonus, result: r });
    });
    return out;
  }

  // ── Экспорт ───────────────────────────────────────────────
  window.VOEX = {
    buildRankings,
    matchPoints,
    matchResult,
    PTS_WIN,
    PTS_LOSS,
    BONUS_WIN,
    BONUS_THRESH,
    BONUS_PTS_REQ,
  };

})();
