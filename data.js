const DATABASE = {
  news: [
    {
      id: 1,
      cat: "Анонс",
      date: "10 АПР 2026",
      title: "VOEX NEWS запускает рейтинг команд",
      desc: "Теперь вы можете следить за результатами матчей и положением команд в реальном времени.",
      content: "Полный текст новости будет здесь. VOEX NEWS запускает автоматический рейтинг команд по CS2. Система считает очки за каждую победу и определяет лучшие команды сезона.",
      image: "1.jpg",
      featured: true
    },
    {
      id: 2,
      cat: "Результат",
      date: "14 АПР 2026",
      title: "Blood Owners побеждают BlaiZ в финале",
      desc: "Напряженный поединок завершился победой Blood Owners со счетом 2:0.",
      content: "На картах Overpass и Inferno команда Blood Owners продемонстрировала превосходную игру. MVP матча – lwftaze с невероятной статистикой.",
      image: "2.jpg",
      featured: false
    },
    {
      id: 3,
      cat: "Трансфер",
      date: "20 АПР 2026",
      title: "Lumen Novara усиливает состав",
      desc: "Команда пополнилась опытным игроком с предыдущего сезона.",
      content: "Новый игрок готов помочь команде бороться за чемпионство.",
      image: null,
      featured: false
    }
  ],

  teams: [
    {
      id: "Ventus Axi",
      name: "Ventus Axi",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/veaxteam",
      players: ["m0nday", "Yud0qq", "v1ns", "SaQik444", "deadend"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Burmalda",
      name: "Burmalda",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/burmaldak1",
      players: ["V1zer", "Wackzzy", "Soplenok", "dexperon", "LatypOFF"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Asteria Black",
      name: "Asteria Black",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/asteriateam1",
      players: ["MoWee", "s0lkes", "aiwqq", "FR1ZYY", "Dosia"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Team61",
      name: "Team61",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/teamcs61",
      players: ["kyrlin", "Altreezz", "Kurok1sh1", "lov3zzy", "farrrr"],
      achievements: [],
      region: "RU"
    },
    {
      id: "MVTeam",
      name: "MVTeam",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/MVTeamcs",
      players: ["m0nst0r", "Dqzz", "Alalkai", "RAVEN", "Topy"],
      achievements: ["RIEM RIO - 1 место", "Aventus Cup - 3-4 место", "Starladder - 3 место"],
      region: "RU"
    },
    {
      id: "Lumen Novara",
      name: "Lumen Novara",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/LUNAtcs2",
      players: ["sh3f", "X1DO", "neetsky", "north", "shiy"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Team Primus",
      name: "Team Primus",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/teamprimuscs2",
      players: ["novaprospekt", "gsmod04", "ggg", "kuro", "swokinz"],
      achievements: [],
      region: "RU"
    },
    {
      id: "BCW TEAM",
      name: "BCW TEAM",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/BCWTEAM",
      players: ["z3pp", "el1v1o", "flew", "vut1an", "rinex"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Team Silvers",
      name: "Team Silvers",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/team_silvers",
      players: ["ZyuZya", "timaerror", "Kasumi", "Z3roX02", "Bunar"],
      achievements: ["2-е место Aventus Cup", "8-4 место IPE Major"],
      region: "RU"
    },
    {
      id: "Team Silvers Academy",
      name: "Team Silvers Academy",
      meta: "FACEIT LVL 4",
      telegram: "https://t.me/team_silvers",
      players: ["n1ght", "fantabym", "guzzy", "gili3cs", "Ehone1j"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Blood Owners",
      name: "Blood Owners",
      meta: "FACEIT LVL 7",
      telegram: "https://t.me/BloodOwnersCS",
      players: ["Cry", "komuqi", "mAVR1K", "Semen41K", "lwftaze"],
      achievements: ["Reload Cup - 3 место", "CSLT Clash 2026 - 1 место"],
      region: "RU"
    },
    {
      id: "Exot Team",
      name: "Exot Team",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/EXOOTTEAM",
      players: ["VARNEX", "VSnipeX", "Skyooo", "Pr0f1d", "Yuki"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Team Expoo",
      name: "Team Expoo",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/ExpooTeam",
      players: ["shintrix", "zelofa1n", "wedding", "sw1k", "NEXT_TIME"],
      achievements: ["3-4 место BLASTY OPEN WINTER", "2-е место BLASTY PRO LEAGUE 2"],
      region: "RU"
    },
    {
      id: "SunCry",
      name: "SunCry",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/suncryesport",
      players: ["Romario", "Shadow", "Xm1ndY", "Beaut1full", "Vinrise"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Barebuh Team",
      name: "Barebuh Team",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/barebuhteam",
      players: ["aori", "r3kn", "Goidmen", "blessedrecode", "Leha epta"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Warm Ray Team",
      name: "Warm Ray Team",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/Team_WarmRay",
      players: ["Blex98", "hayzen", "Propan1", "s1baa", "_kiryyy666"],
      achievements: [],
      region: "RU"
    },
    {
      id: "HYDRA eSports",
      name: "HYDRA eSports",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/HYDRAeSportsCS",
      players: ["st0nks", "1nference", "z1pqt", "Lapatasion", "Rawlod"],
      achievements: [],
      region: "RU"
    },
    {
      id: "R8G",
      name: "R8G",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/r8gem",
      players: ["Kickpo", "tragedy", "marcus", "Elo>girl", "Yasuo"],
      achievements: [],
      region: "RU"
    },
    {
      id: "BlaiZ",
      name: "BlaiZ",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/blaiZEsports",
      players: ["v1zer", "twelve666", "LeviT", "1mmortal", "s1ntroo666"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Phantom eSports",
      name: "Phantom eSports",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/phantomespt",
      players: ["dextrometrophan", "DJ", "wuthename", "hearteater", "xleb666"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Shadow Team",
      name: "Shadow Team",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/shadowcs2",
      players: ["1dkey", "lega4y", "bl1tzz", "auqren", "alviss"],
      achievements: [],
      region: "RU"
    },
    {
      id: "Owles Team",
      name: "Owles Team",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/OwlesTeam",
      players: ["v2doO", "HoRzy", "fl1d", "suprime", "lazy"],
      achievements: [],
      region: "RU"
    },
    {
      id: "WR Prodigy",
      name: "WR Prodigy",
      meta: "FACEIT LVL 4",
      telegram: "https://t.me/WarmRayAcademy",
      players: ["Nitrovsky", "Yakst0", "ezips", "Hola", "Onix"],
      achievements: [],
      region: "RU"
    },
    {
      id: "SAS eSports",
      name: "SAS eSports",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/sasesposrtss",
      players: ["Sasuke Muchaed", "22peek", "Onlyyy_3", "diklan22", "marshmello"],
      achievements: [],
      region: "RU"
    }
  ],

  matches: [
    { id: 1, team1: "BlaiZ", team2: "Team61", score: "1:0", date: "10 АПР", format: "BO1", maps: ["Inferno"] },
    { id: 2, team1: "Lumen Novara", team2: "SunCry", score: "2:0", date: "11 АПР", format: "BO3", maps: ["Ancient", "Nuke"] },
    { id: 3, team1: "Blood Owners", team2: "Team Expoo", score: "2:0", date: "11 АПР", format: "BO3", maps: ["Mirage", "Overpass"] },
    { id: 4, team1: "R8G", team2: "Burmalda", score: "1:0", date: "12 АПР", format: "BO1", maps: ["Dust2"] },
    { id: 5, team1: "Phantom eSports", team2: "MVTeam", score: "2:0", date: "13 АПР", format: "BO3", maps: ["Ancient", "Inferno"] },
    { id: 6, team1: "Ventus Axi", team2: "HYDRA eSports", score: "2:0", date: "13 АПР", format: "BO3", maps: ["Anubis", "Mirage"] },
    { id: 7, team1: "Warm Ray Team", team2: "Exot Team", score: "2:0", date: "14 АПР", format: "BO3", maps: ["Nuke", "Overpass"] },
    { id: 8, team1: "Lumen Novara", team2: "Burmalda", score: "1:0", date: "14 АПР", format: "BO1", maps: ["Dust2"] },
    { id: 9, team1: "Team Expoo", team2: "WR Prodigy", score: "1:0", date: "15 АПР", format: "BO1", maps: ["Mirage"] },
    { id: 10, team1: "Phantom eSports", team2: "Team Silvers", score: "1:0", date: "15 АПР", format: "BO1", maps: ["Inferno"] },
    { id: 11, team1: "BCW TEAM", team2: "SAS eSports", score: "2:1", date: "16 АПР", format: "BO3", maps: ["Dust2", "Ancient", "Nuke"] },
    { id: 12, team1: "Blood Owners", team2: "BlaiZ", score: "2:0", date: "17 АПР", format: "BO3", maps: ["Overpass", "Inferno"] },
    { id: 13, team1: "SunCry", team2: "R8G", score: "0:2", date: "18 АПР", format: "BO3", maps: ["Mirage", "Anubis"] },
    { id: 14, team1: "Ventus Axi", team2: "Owles Team", score: "1:0", date: "19 АПР", format: "BO1", maps: ["Dust2"] },
    { id: 15, team1: "MVTeam", team2: "Exot Team", score: "0:2", date: "20 АПР", format: "BO3", maps: ["Ancient", "Inferno"] },
    { id: 16, team1: "Warm Ray Team", team2: "Team Silvers", score: "2:0", date: "21 АПР", format: "BO3", maps: ["Mirage", "Nuke"] },
    { id: 17, team1: "Lumen Novara", team2: "Team Primus", score: "0:1", date: "22 АПР", format: "BO1", maps: ["Overpass"] },
    { id: 18, team1: "HYDRA eSports", team2: "Barebuh Team", score: "2:0", date: "23 АПР", format: "BO3", maps: ["Anubis", "Dust2"] },
    { id: 19, team1: "BCW TEAM", team2: "SunCry", score: "2:1", date: "24 АПР", format: "BO3", maps: ["Inferno", "Mirage", "Nuke"] },
    { id: 20, team1: "Shadow Team", team2: "R8G", score: "1:0", date: "25 АПР", format: "BO1", maps: ["Dust2"] },
    { id: 21, team1: "Ventus Axi", team2: "Blood Owners", score: "0:2", date: "26 АПР", format: "BO3", maps: ["Nuke", "Overpass"] },
    { id: 22, team1: "Team Expoo", team2: "Phantom eSports", score: "1:2", date: "27 АПР", format: "BO3", maps: ["Dust2", "Ancient", "Mirage"] },
  ],

  transfers: [
    {
      id: 1,
      player: "sh3f",
      from: "Asteria Black",
      to: "Lumen Novara",
      date: "08 АПР",
      type: "join"
    },
    {
      id: 2,
      player: "V1zer",
      from: "Burmalda",
      to: "BlaiZ",
      date: "12 АПР",
      type: "join"
    },
    {
      id: 3,
      player: "m0nday",
      from: "Ventus Axi",
      to: "Team Primus",
      date: "18 АПР",
      type: "join"
    }
  ]
};

// ============ UTILITY FUNCTIONS ============
function getNewsById(newsId) {
  return DATABASE.news.find(n => n.id === parseInt(newsId));
}

function getTeamById(teamId) {
  return DATABASE.teams.find(t => t.id === decodeURIComponent(teamId));
}

function getTeamMatches(teamName) {
  return DATABASE.matches.filter(m => m.team1 === teamName || m.team2 === teamName);
}

function getRecentNews(limit = 5) {
  return DATABASE.news.slice(0, limit);
}

function getTeamTransfers(teamName) {
  return DATABASE.transfers.filter(t => t.from === teamName || t.to === teamName);
}