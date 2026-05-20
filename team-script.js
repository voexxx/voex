// Получить ID команды из URL
function getTeamFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('team');
}

// Инициализация страницы команды
function initTeamPage() {
  const teamId = getTeamFromUrl();
  
  if (!teamId) {
    showError('Команда не найдена');
    return;
  }

  const team = getTeamById(teamId);
  
  if (!team) {
    showError('Команда не найдена в базе данных');
    return;
  }

  renderTeamHero(team);
  renderTeamPlayers(team);
  renderTeamAchievements(team);
  renderTeamStats(team);
  renderTeamMatches(team);
}

// Показать ошибку
function showError(message) {
  const page = document.querySelector('.team-page');
  if (page) {
    page.innerHTML = `<div style="padding: 60px 32px; text-align: center; color: var(--muted);">${message}</div>`;
  }
}

// Рендер хедера команды
function renderTeamHero(team) {
  const logoImg = document.getElementById('team-logo-img');
  const logoPlaceholder = document.getElementById('team-logo-placeholder');
  const teamName = document.getElementById('team-name');
  const teamMeta = document.getElementById('team-meta');
  const teamTelegram = document.getElementById('team-telegram');

  // Логотип команды
  const logoPath = `logo/${encodeURIComponent(team.id)}.jpg`;
  logoImg.src = logoPath;
  logoImg.onerror = function() {
    logoImg.style.display = 'none';
    logoPlaceholder.style.display = 'block';
  };
  logoImg.onload = function() {
    logoPlaceholder.style.display = 'none';
  };

  // Основная информация
  teamName.textContent = team.name;
  teamMeta.textContent = `${team.meta} • ${team.region}`;
  teamTelegram.href = team.telegram;
  teamTelegram.target = '_blank';
}

// Рендер состава команды
function renderTeamPlayers(team) {
  const playersContainer = document.getElementById('team-players');
  
  if (!team.players || team.players.length === 0) {
    playersContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--muted);">Игроки отсутствуют</div>';
    return;
  }

  playersContainer.innerHTML = team.players
    .filter(p => p && p.trim())
    .map(player => `
      <div class="player-card">
        <div class="player-name">${player}</div>
      </div>
    `)
    .join('');
}

// Рендер достижений
function renderTeamAchievements(team) {
  const achievementsContainer = document.getElementById('team-achievements');
  
  if (!team.achievements || team.achievements.length === 0) {
    achievementsContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--muted); font-size: 13px;">Нет достижений</div>';
    return;
  }

  achievementsContainer.innerHTML = team.achievements
    .map(ach => `
      <div class="achievement-item">${ach}</div>
    `)
    .join('');
}

// Рендер статистики
function renderTeamStats(team) {
  const { finalMap, rankMap } = VOEX.buildRankings();
  const stats = VOEX.getTeamStats(team.name);
  const rank = rankMap.get(team.name) ?? '—';
  const pts = finalMap.get(team.name) ?? 0;

  const statsContainer = document.getElementById('team-stats');
  
  statsContainer.innerHTML = `
    <div class="stat-box">
      <div class="stat-label">Сыграно матчей</div>
      <div class="stat-value">${stats.total}</div>
    </div>
    <div class="stat-box">
      <div class="stat-label">Побед</div>
      <div class="stat-value" style="color: #15803d;">${stats.wins}</div>
    </div>
    <div class="stat-box">
      <div class="stat-label">Поражений</div>
      <div class="stat-value" style="color: #dc2626;">${stats.losses}</div>
    </div>
    <div class="stat-box">
      <div class="stat-label">Win Rate</div>
      <div class="stat-value">${stats.winrate}%</div>
    </div>
    <div class="stat-box">
      <div class="stat-label">Место в рейтинге</div>
      <div class="stat-value">#${rank}</div>
    </div>
    <div class="stat-box">
      <div class="stat-label">Очки</div>
      <div class="stat-value">${pts}</div>
    </div>
  `;
}

// Рендер матчей с логотипами и кликабельными ссылками
function renderTeamMatches(team) {
  const matches = getTeamMatches(team.name);
  const matchesContainer = document.getElementById('team-matches');

  if (matches.length === 0) {
    matchesContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--muted); font-size: 13px;">Матчи отсутствуют</div>';
    return;
  }

  matchesContainer.innerHTML = matches
    .reverse()
    .map(m => {
      const opponent = m.team1 === team.name ? m.team2 : m.team1;
      const opponentTeam = getTeamById(opponent);
      
      const isWin = (m.team1 === team.name && parseInt(m.score.split(':')[0]) > parseInt(m.score.split(':')[1])) ||
                    (m.team2 === team.name && parseInt(m.score.split(':')[1]) > parseInt(m.score.split(':')[0]));

      const opponentTeamId = opponentTeam ? encodeURIComponent(opponentTeam.id) : '';
      const opponentLogoPath = opponentTeam ? `logo/${opponentTeamId}.jpg` : '';

      return `
        <div class="match-card" style="margin-bottom: 8px;">
          <div class="match-top">
            <span>${m.date || '—'}</span>
            <span style="color: ${isWin ? '#15803d' : '#dc2626'}; font-weight: 500;">
              ${isWin ? '✓ Победа' : '✗ Поражение'}
            </span>
          </div>
          <div class="match-body">
            <div class="match-team">
              <div class="match-team-logo">
                <img src="${opponentLogoPath}" alt="${opponent}" onerror="this.style.display='none'" style="width:100%; height:100%; object-fit:contain;">
              </div>
              ${opponentTeam ? 
                `<a href="team.html?team=${opponentTeamId}" class="match-team-link">${opponent}</a>` 
                : `<span class="match-team-plain">${opponent}</span>`
              }
            </div>
            <div class="match-score">${m.score || '—:—'}</div>
            <div class="match-team r">
              <span style="font-weight: 500;">VS</span>
            </div>
          </div>
          <div class="match-maps">
            ${(m.maps || [])
              .filter(mp => mp && mp.trim() && mp !== '-')
              .map(mp => `<span class="match-map-item">${mp}</span>`)
              .join('')
            }
          </div>
        </div>
      `;
    })
    .join('');
}

// Запустить при загрузке
document.addEventListener('DOMContentLoaded', initTeamPage);