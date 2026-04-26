const DATABASE = {
  news: [
  {
    id: 1,
    cat: "",        // категория
    date: "",       // дата
    title: "",
    desc: "",
    featured:   true      // если хочешь выделить новость — ставь true
  }
],

  teams: [
    {
      id: "Ventus Axi",
      name: "Ventus Axi",
      meta: "FACEIT LVL",
      telegram: "https://t.me/veaxteam",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["m0nday", "Yud0qq", "v1ns", "SaQik444", "deadend"],
      achievements: [],
      otherPlayers: ["","WIzEr 0_o"]
    },

    {
      id: "Burmalda",
      name: "Burmalda",
      meta: "FACEIT LVL",
      telegram: "https://t.me/burmaldak1",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["V1zer", "Wackzzy", "Soplenok", "dexperon", "LatypOFF"],
      achievements: [],
      otherPlayers: ["haku666"]
    },

    {
      id: "Asteria Black",
      name: "Asteria Black",
      meta: "FACEIT LVL",
      telegram: "https://t.me/asteriateam1",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["MoWee", "s0lkes", "aiwqq", "FR1ZYY", "Dosia"],
      achievements: [],
      otherPlayers: ["samorezz","Kl1mat"]
    },

    {
      id: "Team61",
      name: "Team61",
      meta: "FACEIT LVL",
      telegram: "https://t.me/teamcs61",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["kyrlin", "Altreezz", "Kurok1sh1", "lov3zzy", "farrrr"],
      achievements: [],
      otherPlayers: ["VaRked666"]
    },

    {
      id: "MVTeam",
      name: "MVTeam",
      meta: "FACEIT LVL",
      telegram: "https://t.me/MVTeamcs",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["m0nst0r", "Dqzz", "Alalkai", "RAVEN", "Topy"],
      achievements: [
        "RIEM RIO - 1 place",
        "Aventus Cup - 3-4 place",
        "W Starladder - 3 place"
      ],
      otherPlayers: ["Volcane", "Koku", "S1eep","S1lent"]
    },
    {
      id: "Lumen Novara",
      name: "Lumen Novara",
      meta: "FACEIT LVL",
      telegram: "https://t.me/LUNAtcs2",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["sh3f", "X1DO", "neetsky", "north", "shiy"],
      achievements: [],
      otherPlayers: ["Dimonch4k"]
    },
    {
      id: "Team Primus",
      name: "Team Primus",
      meta: "FACEIT LVL",
      telegram: "https://t.me/teamprimuscs2",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["novaprospekt", "gsmod04", "ggg", "kuro", "swokinz"],
      achievements: [],
      otherPlayers: ["Hyp3rs","Hoopz"]
    },
    {
      id: "BCW TEAM",
      name: "BCW TEAM",
      meta: "FACEIT LVL",
      telegram: "https://t.me/BCWTEAM",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["z3pp", "el1v1o", "flew", "vut1an", "rinex"],
      achievements: [],
      otherPlayers: []
    },
    {
      id: "Team Silvers",
      name: "Team Silvers",
      meta: "FACEIT LVL",
      telegram: "https://t.me/team_silvers",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["ZyuZya","timaerror","Kasumi","Z3roX02","Bunar"],
      achievements: ["2-е место Aventus Cup","8-4 место IPE Major"],
      otherPlayers: ["VkidGames","ByShine","rix"]
    },
    {
      id: "Team Silvers Academy",
      name: "Team Silvers Academy",
      meta: "FACEIT LVL",
      telegram: "https://t.me/team_silvers",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["n1ght","fantabym","guzzy","gili3cs","Ehone1j"],
      achievements: [],
      otherPlayers: ["b1ndo"]
    },
    {
      id: "Blood Owners",
      name: "Blood Owners",
      meta: "FACEIT LVL",
      telegram: "https://t.me/BloodOwnersCS",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["Cry","komuqi","mAVR1K","Semen41K","lwftaze"],
      achievements: ["Reload Cup  - 3 place","CSLT Clash 2026 - 1 place "],
      otherPlayers: ["mesure","TheKervich","pilotf14","Toys"]
    },
    {
      id: "Exot Team",
      name: "Exot Team",
      meta: "FACEIT LVL",
      telegram: "https://t.me/EXOOTTEAM",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["VARNEX","VSnipeX","Skyooo","Pr0f1d","Yuki"],
      achievements: [],
      otherPlayers: ["magixX_2","Mramor","Twix","Mateo","After_dark"]
    },
    {
      id: "Team Expoo",
      name: "Team Expoo",
      meta: "FACEIT LVL",
      telegram: "https://t.me/ExpooTeam",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["shintrix","zelofa1n","wedding","sw1k","NEXT_TIME"],
      achievements: ["3-4 place BLASTY OPEN WINTER","2nd place BLASTY PRO LEAGUE 2","3-4 place TABURETKA CUP","3-4 place RAZE CUP SEASON 5"],
      otherPlayers: ["MDB","Lord_Elite","Xandow"]
    },
    {
      id: "SunCry",
      name: "SunCry",
      meta: "FACEIT LVL",
      telegram: "https://t.me/suncryesport",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["Romario","Shadow","Xm1ndY","Beaut1full","Vinrise"],
      achievements: [],
      otherPlayers: ["King666","Hatyykk","wemulz"]
    },
    {
      id: "Barebuh Team",
      name: "Barebuh Team",
      meta: "FACEIT LVL",
      telegram: "https://t.me/barebuhteam",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["aori","r3kn","Goidmen","blessedrecode","Leha epta"],
      achievements: [],
      otherPlayers: ["Popo4ka"]
    },
    {
      id: "Warm Ray Team",
      name: "Warm Ray Team",
      meta: "FACEIT LVL",
      telegram: "https://t.me/Team_WarmRay",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["Blex98","hayzen","Propan1","s1baa","_kiryyy666"],
      achievements: [],
      otherPlayers: [""]
    }, 
    {
      id: "HYDRA eSports",
      name: "HYDRA eSports",
      meta: "FACEIT LVL",
      telegram: "https://t.me/HYDRAeSportsCS",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["st0nks","1nference","z1pqt","Lapatasion","Rawlod"],
      achievements: [],
      otherPlayers: ["theYELLSS"]
    },
	{
      id: "R8G",
      name: "R8G",
      meta: "FACEIT LVL",
      telegram: "https://t.me/r8gem",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["Kickpo","tragedy","marcus","Elo>girl","Yasuo"],
      achievements: [],
      otherPlayers: [""]
    },
	{
      id: "BlaiZ",
      name: "BlaiZ",
      meta: "FACEIT LVL",
      telegram: "https://t.me/blaiZEsports",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["v1zer¿¿¿","twelve666","LeviT","1mmortal","s1ntroo666"],
      achievements: [],
      otherPlayers: [""]
    },
	{
      id: "Phantom eSports",
      name: "Phantom eSports",
      meta: "FACEIT LVL",
      telegram: "https://t.me/phantomespt",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["dextrometrophan","DJ","wuthename","hearteater","xleb666"],
      achievements: [],
      otherPlayers: ["swagger","Fayno","ddsnik"]
    },
	{
      id: "Shadow Team",
      name: "Shadow Team",
      meta: "FACEIT LVL",
      telegram: "https://t.me/shadowcs2",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["1dkey","lega4y","bl1tzz","auqren","alviss"],
      achievements: [],
      otherPlayers: []
    },
	{
      id: "Owles Team",
      name: "Owles Team",
      meta: "FACEIT LVL",
      telegram: "https://t.me/OwlesTeam",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["v2doO","HoRzy","fl1d","suprime","lazy"],
      achievements: [],
      otherPlayers: ["doglime"]
    },
	{
      id: "WR Prodigy",
      name: "WR Prodigy",
      meta: "FACEIT LVL",
      telegram: "https://t.me/WarmRayAcademy",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["Nitrovsky","Yakst0","ezips","Hola","Onix"],
      achievements: [],
      otherPlayers: [""]
    },
	{
      id: "SAS eSports",
      name: "SAS eSports",
      meta: "FACEIT LVL",
      telegram: "https://t.me/sasesposrtss",   // ссылка на тг: "https://t.me/yourteam" или null
      players: ["Sasuke Muchaed","22peek","Onlyyy_3","diklan22","marshmello"],
      achievements: [],
      otherPlayers: ["broski"]
    }
	
	
  ],

  matches: [
    {
      id: 1,
      team1: "BlaiZ",
      team2: "White Team",
      score: "1:0",
      date: "10 АПР",
      format: "тех",
      maps: ["-"]
    },
	{
      id: 2,
      team1: "Lumen Novara",
      team2: "SunCry",
      score: "2:0",
      date: "11 АПР",
      format: "BO3",
      maps: ["Ancient 13:8","Nuke 13:1"]
    },
	{
      id: 3,
      team1: "Blood Owners",
      team2: "Team Expoo",
      score: "2:0",
      date: "11 АПР",
      format: "BO3",
      maps: ["неизвестно"]
    },
	{
      id: 4,
      team1: "R8G",
      team2: "Burmalda",
      score: "1:0",
      date: "",
      format: "тех",
      maps: ["-"]
    },
	{
      id: 5,
      team1: "Phantom eSports",
      team2: "MVTeam",
      score: "2:0",
      date: "неизвестно",
      format: "B03",
      maps: ["неизвестно"]
    },
	{
      id: 6,
      team1: "Ventus Axi",
      team2: "HYDRA eSports",
      score: "2:0",
      date: "13 АПР",
      format: "B03",
      maps: ["неизвестно"]
    },
	{
      id: 7,
      team1: "Warm Ray Team",
      team2: "Phantom Academy",
      score: "2:0",
      date: "неизвестно",
      format: "B03",
      maps: ["неизвестно"]
    },
	{
      id: 8,
      team1: "Lumen Novara",
      team2: "Burmalda",
      score: "1:0",
      date: "неизвестно",
      format: "B03",
      maps: ["тех"]
    },
	{
      id: 9,
      team1: "Team Expoo",
      team2: "Burmalda",
      score: "1:0",
      date: "неизвестно",
      format: "B03",
      maps: ["тех"]
    },
	{
      id: 10,
      team1: "Phantom eSports",
      team2: "Burmalda",
      score: "1:0",
      date: "неизвестно",
      format: "B03",
      maps: ["тех"]
    },
	{
      id: 11,
      team1: "BCW TEAM",
      team2: "-",
      score: "1:0",
      date: "неизвестно",
      format: "B03",
      maps: ["бонус"]
    },
	{
      id: 12,
      team1: "Blood Owners",
      team2: "BlaiZ",
      score: "2:0",
      date: "14 АПР",
      format: "B03",
      maps: ["Overpass 13:8","Inferno 13:5"]
    },
	{
      id: 14,
      team1: "SunCry",
      team2: "R8G",
      score: "0:2",
      date: "15 АПР",
      format: "B03",
      maps: [""]
    },
	{
      id: 15,
      team1: "Ventus Axi",
      team2: "Phantom Academy",
      score: "1:0",
      date: "15 АПР",
      format: "B03",
      maps: ["тех"]
    },
	{
      id: 14,
      team1: "Phantom eSports",
      team2: "BCW TEAM",
      score: "2:0",
      date: "17-21 АПР",
      format: "B03",
      maps: ["-"]
    },
	{
      id: 16,
      team1: "WR Prodigy",
      team2: "Phantom eSports",
      score: "0:2",
      date: "11-14 АПР",
      format: "B03",
      maps: ["-"]
    },
	{
      id: 17,
      team1: "MVTeam",
      team2: "-",
      score: "1:0",
      date: "неизвестно",
      format: "B03",
      maps: ["бонус"]
    },
	{
      id: 18,
      team1: "MVTeam",
      team2: "Exot Team",
      score: "0:2",
      date: "16 АПР",
      format: "B03",
      maps: ["Ancient 13-11","Anubis 13-8"]
    },
	{
      id: 19,
      team1: "SunCry",
      team2: "Exot Team",
      score: "0:2",
      date: "18 АПР",
      format: "B03",
      maps: [""]
    },
	{
      id: 20,
      team1: "HYDRA eSports",
      team2: "Warm Ray Team",
      score: "1:0",
      date: "-",
      format: "B03",
      maps: ["тех"]
    },
	{
      id: 21,
      team1: "Ventus Axi",
      team2: "Warm Ray Team",
      score: "0:2",
      date: "21 АПР",
      format: "B03",
      maps: [""]
    },
	{
      id: 22,
      team1: "Ventus Axi",
      team2: "Blood Owners",
      score: "2:0",
      date: "22 АПР",
      format: "B03",
      maps: [""]
    },
	{
      id: 24,
      team1: "WR Prodigy",
      team2: "Exot Team",
      score: "0:2",
      date: "11-14 АПР",
      format: "B03",
      maps: [""]
    },
	{
      id: 26,
      team1: "Lumen Novara",
      team2: "MVTeam",
      score: "0:2",
      date: "17-21 АПР",
      format: "B03",
      maps: [""]
    },
	{
      id: 25,
      team1: "WR Prodigy",
      team2: "BlaiZ",
      score: "0:2",
      date: "17-21 АПР",
      format: "B03",
      maps: [""]
    },
	{
      id: 26,
      team1: "HYDRA eSports",
      team2: "BlaiZ",
      score: "2:0",
      date: "21-25 АПР",
      format: "B03",
      maps: [""]
    },
	{
      id: 26,
      team1: "HYDRA eSports",
      team2: "Phantom Academy",
      score: "2:0",
      date: "17-21 АПР",
      format: "B03",
      maps: [""]
    },
	{
      id: 27,
      team1: "Warm Ray Team",
      team2: "SunCry",
      score: "0:2",
      date: "21-25 АПР",
      format: "B03",
      maps: [""]
    },
	{
      id: 28,
      team1: "BCW TEAM",
      team2: "Team Expoo",
      score: "2:0",
      date: "21-25 АПР",
      format: "B03",
      maps: [""]
    },
	{
      id: 29,
      team1: "Lumen Novara",
      team2: "WR Prodigy",
      score: "0:1",
      date: "21-25 АПР",
      format: "B03",
      maps: ["тех"]
    },
	{
      id: 30,
      team1: "Exot Team",
      team2: "R8G",
      score: "1:0",
      date: "21-25 АПР",
      format: "B03",
      maps: ["тех"]
    }
  ]
};

