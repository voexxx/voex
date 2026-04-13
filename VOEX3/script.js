function render() {

  // Новости
  const newsEl = document.getElementById('news-list');
  if (newsEl) {
    newsEl.innerHTML = DATABASE.news.map(n => `
      <article class="news-card ${n.featured ? 'featured' : ''}">
        <div class="news-card-top">
          <span>${n.cat}</span>
          <span>${n.date}</span>
        </div>
        <h2 class="news-title">${n.title}</h2>
        <p>${n.desc}</p>
      </article>
    `).join('');
  }

  // Команды (СОРТИРОВКА)
  const teamsEl = document.getElementById('teams-list');
  if (teamsEl) {

    const sortedTeams = [...DATABASE.teams].sort((a, b) => Number(a.rank) - Number(b.rank));

    teamsEl.innerHTML = sortedTeams.map(t => `
      <a href="team.html?team=${t.id}" class="team-card">
        <div class="team-rank">${t.rank}</div>
        <div class="team-info">
          <div class="team-name">${t.name}</div>
          <div class="team-meta">${t.meta}</div>
        </div>
        <div class="team-badge">${t.badge}</div>
      </a>
    `).join('');
  }

  // Матчи
  const matchesEl = document.getElementById('matches-list');
  if (matchesEl) {
    matchesEl.innerHTML = DATABASE.matches.map(m => `
      <div class="match-card">
        <div class="match-top">
          <span>${m.event}</span>
          ${m.live ? '<span class="badge-live">LIVE</span>' : ''}
        </div>
        <div class="match-format">${m.format}</div>
        <div class="match-body">
          <div class="match-team">${m.t1}</div>
          <div class="match-score">${m.score}</div>
          <div class="match-team r">${m.t2}</div>
        </div>
        <div class="match-maps">
          ${m.maps.map(mp => `${mp.name}: ${mp.score}`).join(" | ")}
        </div>
      </div>
    `).join('');
  }
}

function show(id, el) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  el.classList.add('active');
}

render();
