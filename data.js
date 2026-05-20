const DATABASE = {
  news: [
    {
      id: 1,
      cat: "Турнир",
      date: "",
      title: "Exot Team побеждает турнир One Last Point Cup",
      desc: "Exot Team уверенно забирают титул, обыграв Phantom eSports в гранд‑финале со счётом 2:1.",
      content: "Exot Team стали победителями One Last Point Cup.В финале команда встретилась с Phantom eSports и показала доминирующую игру",
      image: "1.png",
      featured: true
    },
  ],

  teams: [
    {
      id: "Ventus Axi",
      name: "Ventus Axi",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/veaxteam",
      players: ["m0nday", "sh3f", "Holse", "neetsky", "z0rqe"],
      achievements: [],
      otherPlayers: ["WIzEr 0_o"],
      region: "UA"
    },
    {
      id: "Burmalda",
      name: "Burmalda",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/burmaldak1",
      players: ["V1zer", "Wackzzy", "Soplenok", "dexperon", "LatypOFF"],
      achievements: [],
      otherPlayers: ["haku666"],
      region: "?"
    },
    {
      id: "Asteria Black",
      name: "Asteria Black",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/asteriateam1",
      players: ["MoWee", "s0lkes", "aiwqq", "FR1ZYY", "Dosia"],
      achievements: [],
      otherPlayers: ["samorezz", "Kl1mat"],
      region: "?"
    },
    {
      id: "Team61",
      name: "Team61",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/teamcs61",
      players: ["kyrlin", "Altreezz", "Kurok1sh1", "lov3zzy", "farrrr"],
      achievements: [],
      otherPlayers: ["VaRked666"],
      region: "?"
    },
    {
      id: "MVTeam",
      name: "MVTeam",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/MVTeamcs",
      players: ["m0nst0r", "Dqzz", "Alalkai", "RAVEN", "Topy"],
      achievements: ["RIEM RIO - 1 место", "Aventus Cup - 3-4 место", "Starladder - 3 место"],
      otherPlayers: ["Volcane", "Koku", "S1eep", "S1lent"],
      region: "?"
    },
    {
      id: "Team Primus",
      name: "Team Primus",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/teamprimuscs2",
      players: ["novaprospekt", "gsmod04", "ggg", "kuro", "swokinz"],
      achievements: [],
      otherPlayers: ["Hyp3rs", "Hoopz"],
      region: "?"
    },
    {
      id: "BCW TEAM",
      name: "BCW TEAM",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/BCWTEAM",
      players: ["z3pp", "el1v1o", "flew", "vut1an", "rinex"],
      achievements: [],
      otherPlayers: [],
      region: "?"
    },
    {
      id: "Team Silvers",
      name: "Team Silvers",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/team_silvers",
      players: ["ZyuZya", "timaerror", "Kasumi", "Z3roX02", "Bunar"],
      achievements: ["2-е место Aventus Cup", "8-4 место IPE Major"],
      otherPlayers: ["VkidGames", "ByShine", "rix"],
      region: "?"
    },
    {
      id: "Team Silvers Academy",
      name: "Team Silvers Academy",
      meta: "FACEIT LVL 4",
      telegram: "https://t.me/team_silvers",
      players: ["n1ght", "fantabym", "guzzy", "gili3cs", "Ehone1j"],
      achievements: [],
      otherPlayers: ["b1ndo"],
      region: "?"
    },
    {
      id: "Blood Owners",
      name: "Blood Owners",
      meta: "FACEIT LVL 7",
      telegram: "https://t.me/BloodOwnersCS",
      players: ["Cry", "komuqi", "mAVR1K", "Semen41K", "lwftaze"],
      achievements: ["Reload Cup - 3 место", "CSLT Clash 2026 - 1 место"],
      otherPlayers: ["mesure", "TheKervich", "pilotf14", "Toys"],
      region: "?"
    },
    {
      id: "Exot Team",
      name: "Exot Team",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/EXOOTTEAM",
      players: ["VARNEX", "VSnipeX", "Skyooo", "Pr0f1d", "Yuki"],
      achievements: [],
      otherPlayers: ["magixX_2", "Mramor", "Twix", "Mateo", "After_dark"],
      region: "?"
    },
    {
      id: "Team Expoo",
      name: "Team Expoo",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/ExpooTeam",
      players: ["shintrix", "zelofa1n", "wedding", "sw1k", "NEXT_TIME"],
      achievements: ["3-4 место BLASTY OPEN WINTER", "2-е место BLASTY PRO LEAGUE 2", "3-4 место TABURETKA CUP", "3-4 место RAZE CUP SEASON 5"],
      otherPlayers: ["MDB", "Lord_Elite", "Xandow"],
      region: "?"
    },
    {
      id: "Barebuh Team",
      name: "Barebuh Team",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/barebuhteam",
      players: ["aori", "r3kn", "Goidmen", "blessedrecode", "Leha epta"],
      achievements: [],
      otherPlayers: ["Popo4ka"],
      region: "?"
    },
    {
      id: "Warm Ray Team",
      name: "Warm Ray Team",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/Team_WarmRay",
      players: ["Blex98", "hayzen", "Propan1", "s1baa", "_kiryyy666"],
      achievements: [],
      otherPlayers: [],
      region: "?"
    },
    {
      id: "HYDRA eSports",
      name: "HYDRA eSports",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/HYDRAeSportsCS",
      players: ["st0nks", "1nference", "z1pqt", "Lapatasion", "Rawlod"],
      achievements: [],
      otherPlayers: ["theYELLSS"],
      region: "?"
    },
    {
      id: "R8G",
      name: "R8G",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/r8gem",
      players: ["Kickpo", "tragedy", "marcus", "Elo>girl", "Yasuo"],
      achievements: [],
      otherPlayers: [],
      region: "?"
    },
    {
      id: "BlaiZ",
      name: "BlaiZ",
      meta: "FACEIT LVL 6",
      telegram: "https://t.me/blaiZEsports",
      players: ["v1zer", "twelve666", "LeviT", "1mmortal", "s1ntroo666"],
      achievements: [],
      otherPlayers: [],
      region: "?"
    },
    {
      id: "Phantom eSports",
      name: "Phantom eSports",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/phantomespt",
      players: ["dextrometrophan", "DJ", "wuthename", "hearteater", "xleb666"],
      achievements: [],
      otherPlayers: ["swagger", "Fayno", "ddsnik"],
      region: "?"
    },
    {
      id: "Shadow Team",
      name: "Shadow Team",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/shadowcs2",
      players: ["1dkey", "lega4y", "bl1tzz", "auqren", "alviss"],
      achievements: [],
      otherPlayers: [],
      region: "?"
    },
    {
      id: "Owles Team",
      name: "Owles Team",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/OwlesTeam",
      players: ["v2doO", "HoRzy", "fl1d", "suprime", "lazy"],
      achievements: [],
      otherPlayers: ["doglime"],
      region: "?"
    },
    {
      id: "WR Prodigy",
      name: "WR Prodigy",
      meta: "FACEIT LVL 4",
      telegram: "https://t.me/WarmRayAcademy",
      players: ["Nitrovsky", "Yakst0", "ezips", "Hola", "Onix"],
      achievements: [],
      otherPlayers: [],
      region: "?"
    },
    {
      id: "SAS eSports",
      name: "SAS eSports",
      meta: "FACEIT LVL 5",
      telegram: "https://t.me/sasesposrtss",
      players: ["Sasuke Muchaed", "22peek", "Onlyyy_3", "diklan22", "marshmello"],
      achievements: [],
      otherPlayers: ["broski"],
      region: "?"
    }
  ],

  matches: [
    { id: 1, team1: "BlaiZ", team2: "White Team", score: "1:0", date: "10 АПР", format: "BO1", maps: ["-"] },
    { id: 2, team1: "Lumen Novara", team2: "SunCry", score: "2:0", date: "11 АПР", format: "BO3", maps: ["Ancient 13:8", "Nuke 13:1"] },
    { id: 3, team1: "Blood Owners", team2: "Team Expoo", score: "2:0", date: "11 АПР", format: "BO3", maps: ["Неизвестно"] },
    { id: 4, team1: "R8G", team2: "Burmalda", score: "1:0", date: "12 АПР", format: "BO1", maps: ["-"] },
    { id: 5, team1: "Phantom eSports", team2: "MVTeam", score: "2:0", date: "13 АПР", format: "BO3", maps: ["Неизвестно"] },
    { id: 6, team1: "Ventus Axi", team2: "HYDRA eSports", score: "2:0", date: "13 АПР", format: "BO3", maps: ["Неизвестно"] },
    { id: 7, team1: "Warm Ray Team", team2: "Phantom Academy", score: "2:0", date: "14 АПР", format: "BO3", maps: ["Неизвестно"] },
    { id: 8, team1: "Lumen Novara", team2: "Burmalda", score: "1:0", date: "14 АПР", format: "BO1", maps: ["BO1"] },
    { id: 9, team1: "Team Expoo", team2: "Burmalda", score: "1:0", date: "14 АПР", format: "BO1", maps: ["BO1"] },
    { id: 10, team1: "Phantom eSports", team2: "Burmalda", score: "1:0", date: "15 АПР", format: "BO1", maps: ["BO1"] },
    { id: 11, team1: "BCW TEAM", team2: "", score: "1:0", date: "15 АПР", format: "BO3", maps: ["Бонус"] },
    { id: 12, team1: "Blood Owners", team2: "BlaiZ", score: "2:0", date: "17 АПР", format: "BO3", maps: ["Overpass 13:8", "Inferno 13:5"] },
    { id: 13, team1: "SunCry", team2: "R8G", score: "0:2", date: "18 АПР", format: "BO3", maps: [""] },
    { id: 14, team1: "Ventus Axi", team2: "Phantom Academy", score: "1:0", date: "19 АПР", format: "BO1", maps: ["BO1"] },
    { id: 15, team1: "Phantom eSports", team2: "BCW TEAM", score: "2:0", date: "20 АПР", format: "BO3", maps: ["-"] },
    { id: 16, team1: "WR Prodigy", team2: "Phantom eSports", score: "0:2", date: "21 АПР", format: "BO3", maps: ["-"] },
    { id: 17, team1: "MVTeam", team2: "", score: "1:0", date: "22 АПР", format: "BO3", maps: ["Бонус"] },
    { id: 18, team1: "Exot Team", team2: "MVTeam", score: "2:0", date: "23 АПР", format: "BO3", maps: ["Ancient 13:11", "Anubis 13:8"] },
    { id: 19, team1: "Exot Team", team2: "SunCry", score: "2:0", date: "24 АПР", format: "BO3", maps: [""] },
    { id: 20, team1: "HYDRA eSports", team2: "Warm Ray Team", score: "1:0", date: "25 АПР", format: "BO3", maps: ["BO1"] },
    { id: 21, team1: "Ventus Axi", team2: "Warm Ray Team", score: "0:2", date: "26 АПР", format: "BO3", maps: [""] },
    { id: 22, team1: "Ventus Axi", team2: "Blood Owners", score: "2:0", date: "27 АПР", format: "BO3", maps: [""] },
    { id: 23, team1: "Exot Team", team2: "WR Prodigy", score: "2:0", date: "28 АПР", format: "BO3", maps: [""] },
    { id: 24, team1: "Lumen Novara", team2: "MVTeam", score: "0:2", date: "29 АПР", format: "BO3", maps: [""] },
    { id: 25, team1: "WR Prodigy", team2: "BlaiZ", score: "0:2", date: "30 АПР", format: "BO3", maps: [""] },
    { id: 26, team1: "HYDRA eSports", team2: "BlaiZ", score: "2:0", date: "01 МАЙ", format: "BO3", maps: [""] },
    { id: 27, team1: "HYDRA eSports", team2: "Phantom Academy", score: "2:0", date: "02 МАЙ", format: "BO3", maps: [""] },
    { id: 28, team1: "Warm Ray Team", team2: "SunCry", score: "0:2", date: "03 МАЙ", format: "BO3", maps: [""] },
    { id: 29, team1: "BCW TEAM", team2: "Team Expoo", score: "2:0", date: "04 МАЙ", format: "BO3", maps: [""] },
    { id: 30, team1: "Lumen Novara", team2: "WR Prodigy", score: "0:1", date: "05 МАЙ", format: "BO1", maps: ["BO1"] },
	{ id: 31, team1: "Exot Team", team2: "R8G", score: "1:0", date: "05 МАЙ", format: "BO1", maps: ["BO1"] },
	{ id: 31, team1: "Exot Team", team2: "MVTeam", score: "2:1", date: "", format: "BO1", maps: ["BO3"] }
  ],

  transfers: [
    { id: 1, player: "sh3f", from: "Lunem Novara", to: "Ventus Axi", type: "join", date: "2026" },
    { id: 2, player: "neetsky", from: "Lunem Novara", to: "Ventus Axi", type: "join", date: "2026" },
    { id: 3, player: "Holse", from: "Free", to: "Ventus Axi", type: "join", date: "2026" },
    { id: 4, player: "z0rqe", from: "Free", to: "Ventus Axi", type: "join", date: "2026" }
  ]
};

// ============ UTILITY FUNCTIONS ============

function getNewsById(newsId) {
  return DATABASE.news.find(n => n.id === parseInt(newsId));
}

function getTeamById(teamId) {
  const decoded = decodeURIComponent(teamId);
  return DATABASE.teams.find(t => t.id === decoded);
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