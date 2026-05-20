// ============================================================
//  VOEX SCRIPT v2.0 — Основной скрипт для управления сайтом
// ============================================================

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  setupNavigation();
  renderContent();
  setupObservers();
}

// ════════════ УПРАВЛЕНИЕ НАВИГАЦИЕЙ ════════════
function setupNavigation() {
  const navButtons = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');

  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = btn.dataset.page;
      switchPage(pageId);
    });
  });

  // Восстановление последней открытой страницы
  const savedPage = sessionStorage.getItem('activePage') || 'landing';
  if (document.getElementById(savedPage)) {
    switchPage(savedPage);
  }

  // Специальные кнопки
  const gotoNews = document.getElementById('goto-news');
  const gotoRating = document.getElementById('goto-rating');
  const logoHome = document.getElementById('logo-home');

  if (gotoNews) {
    gotoNews.addEventListener('click', (e) => {
      e.preventDefault();
      switchPage('news-section');
    });
  }

  if (gotoRating) {
    gotoRating.addEventListener('click', (e) => {
      e.preventDefault();
      switchPage('teams-section');
    });
  }

  if (logoHome) {
    logoHome.addEventListener('click', (e) => {
      e.preventDefault();
      switchPage('landing');
    });
  }
}

function switchPage(pageId) {
  const sections = document.querySelectorAll('.page-section');
  const navButtons = document.querySelectorAll('.nav-link');

  sections.forEach(sec => {
    sec.classList.toggle('active', sec.id === pageId);
  });

  navButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === pageId);
  });

  sessionStorage.setItem('activePage', pageId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ════════════ РЕНДЕРИНГ КОНТЕНТА ════════════
function renderContent() {
  renderStats();
  renderTeamsPreview();
  renderNews();
  renderTeams();
  renderMatches();
  renderTransfers();
}

function renderStats() {
  const statTeams = document.getElementById('stat-teams');
  const statMatches = document.getElementById('stat-matches');

  if (statTeams) statTeams.textContent = DATABASE.teams.length;
  if (statMatches) statMatches.textContent = DATABASE.matches.length;
}

function renderTeamsPreview() {
  const container = document.getElementById('teams-preview');
  if (!container) return;

  const { finalMap, rankMap, finalSorted } = VOEX.buildRankings();
  const top8 = finalSorted.slice(0, 8);

  container.innerHTML = top8.map(t => {
    const pts = finalMap.get(t.name) ?? 0;
    const rank = rankMap.get(t.name) ?? "—";
    const safeId = encodeURIComponent(t.id);

    return `
      <a href="team.html?team=${safeId}" class="team-preview-card">
        <div class="team-preview-logo">
          <img src="logo/${safeId}.jpg" alt="${t.name}" onerror="this.style.display='none'">
        </div>
        <div>
          <div class="team-preview-name">#${rank} ${t.name}</div>
          <div class="team-preview-pts">${pts} pts</div>
        </div>
      </a>
    `;
  }).join('');
}

function renderNews() {
  const container = document.getElementById('news-list');
  if (!container) return;

  const news = DATABASE.news.filter(n => n.title);

  if (news.length === 0) {
    container.innerHTML = '<div class="news-empty">Новостей пока нет</div>';
    return;
  }

  container.innerHTML = news.map((n, idx) => `
    <a href="news.html?id=${n.id}" class="news-card ${n.featured ? 'featured' : ''}">
      <div class="news-card-top">
        <span class="news-cat">${n.cat || 'Новость'}</span>
        <span>${n.date || ''}</span>
      </div>
      <div class="news-title">${n.title}</div>
      <p>${n.desc || ''}</p>
    </a>
  `).join('');

  // Стаггерированная анимация
  document.querySelectorAll('#news-list .news-card').forEach((el, idx) => {
    el.style.animationDelay = `${idx * 0.04}s`;
  });
}

function renderTeams() {
  const container = document.getElementById('teams-list');
  if (!container) return;

  const { finalMap, rankMap, finalSorted } = VOEX.buildRankings();

  container.innerHTML = finalSorted.map((t, i) => {
    const rank = rankMap.get(t.name) ?? (i + 1);
    const pts = finalMap.get(t.name) ?? 0;
    const safeId = encodeURIComponent(t.id);

    return `
      <a href="team.html?team=${safeId}" class="team-card">
        <div class="team-rank">${rank}</div>
        <div class="team-logo">
          <img src="logo/${safeId}.jpg" alt="${t.name}" onerror="this.style.display='none'">
        </div>
        <div class="team-info">
          <div class="team-name">${t.name}</div>
          <div class="team-meta">${t.meta}</div>
        </div>
        <div class="team-points">${pts} pts</div>
      </a>
    `;
  }).join('');

  // Стаггерированная анимация
  document.querySelectorAll('#teams-list .team-card').forEach((el, idx) => {
    el.style.animationDelay = `${idx * 0.03}s`;
  });
}

function renderMatches() {
  const container = document.getElementById('matches-list');
  if (!container) return;

  const matches = DATABASE.matches;

  if (matches.length === 0) {
    container.innerHTML = '<div class="news-empty">Матчей пока нет</div>';
    return;
  }

  container.innerHTML = [...matches].reverse().map((m, idx) => {
    const team1 = getTeamById(m.team1) || { name: m.team1, id: m.team1 };
    const team2 = getTeamById(m.team2) || { name: m.team2, id: m.team2 };

    return `
      <div class="match-card">
        <div class="match-top">
          <span>${m.date || ''}</span>
          <span>${m.format || ''}</span>
        </div>
        <div class="match-body">
          <div class="match-team">
            <div class="match-team-logo">
              <img src="logo/${encodeURIComponent(team1.id)}.jpg" alt="${m.team1}" onerror="this.style.display='none'">
            </div>
            <a href="team.html?team=${encodeURIComponent(team1.id)}" class="match-team-link">${m.team1}</a>
          </div>
          <div class="match-score">${m.score || '—:—'}</div>
          <div class="match-team r">
            <a href="team.html?team=${encodeURIComponent(team2.id)}" class="match-team-link">${m.team2}</a>
            <div class="match-team-logo">
              <img src="logo/${encodeURIComponent(team2.id)}.jpg" alt="${m.team2}" onerror="this.style.display='none'">
            </div>
          </div>
        </div>
        <div class="match-maps">
          ${(m.maps || []).filter(mp => mp && mp.trim() && mp !== '-').map(mp => `<span class="match-map-item">${mp}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Стаггерированная анимация
  document.querySelectorAll('#matches-list .match-card').forEach((el, idx) => {
    el.style.animationDelay = `${idx * 0.04}s`;
  });
}

function renderTransfers() {
  const container = document.getElementById('transfers-list');
  if (!container) return;

  const transfers = DATABASE.transfers || [];

  if (transfers.length === 0) {
    container.innerHTML = '<div class="news-empty">Трансферов пока нет</div>';
    return;
  }

  const typeLabel = {
    join: { text: 'Переход', cls: 'tf-join' },
    leave: { text: 'Уход', cls: 'tf-leave' },
    loan: { text: 'Аренда', cls: 'tf-loan' },
    free: { text: 'Свободный', cls: 'tf-free' }
  };

  container.innerHTML = [...transfers].sort((a, b) => b.id - a.id).map((t, idx) => {
    const tl = typeLabel[t.type] || { text: t.type, cls: 'tf-join' };
    const fromTeam = getTeamById(t.from);
    const toTeam = getTeamById(t.to);

    const fromLink = fromTeam
      ? `<a href="team.html?team=${encodeURIComponent(fromTeam.id)}" class="tf-team-link">${t.from}</a>`
      : `<span class="tf-team-plain">${t.from}</span>`;

    const toLink = toTeam
      ? `<a href="team.html?team=${encodeURIComponent(toTeam.id)}" class="tf-team-link">${t.to}</a>`
      : `<span class="tf-team-plain">${t.to}</span>`;

    return `
      <div class="transfer-card">
        <div class="transfer-meta">
          <span class="transfer-date">${t.date || ''}</span>
          <span class="transfer-type ${tl.cls}">${tl.text}</span>
        </div>
        <div class="transfer-body">
          <span class="transfer-player">${t.player}</span>
          <div class="transfer-route">${fromLink}<span class="transfer-arrow">→</span>${toLink}</div>
        </div>
      </div>
    `;
  }).join('');

  // Стаггерированная анимация
  document.querySelectorAll('#transfers-list .transfer-card').forEach((el, idx) => {
    el.style.animationDelay = `${idx * 0.04}s`;
  });
}

// ════════════ INTERSECTION OBSERVER ════════════
function setupObservers() {
  const revealSections = document.querySelectorAll('.reveal-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealSections.forEach(section => {
    observer.observe(section);
  });
}

// ════════════ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ════════════
function getTeamById(teamId) {
  return DATABASE.teams.find(t => t.id === teamId);
}