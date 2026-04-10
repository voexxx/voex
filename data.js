const DATABASE = {
  news: [
  {
    id: 1,
    cat: "NEWS",        // категория
    date: "31 МАР",       // дата
    title: "Скоро начало",
    desc: "Хочу сказать что система уже через пару дней будет работать",
    featured: true        // если хочешь выделить новость — ставь true
  }
],

  teams: [
    {
      id: "Ventus Axi",
      name: "Ventus Axi",
      meta: "FACEIT LVL",
      players: ["m0nday", "JaTz", "v1ns", "argyle", ""],
      achievements: [],
      otherPlayers: ["Yud0qq"]
    },

    {
      id: "Burmalda",
      name: "Burmalda",
      meta: "FACEIT LVL",
      players: ["V1zer", "Wackzzy", "Soplenok", "dexperon", "LatypOFF"],
      achievements: [],
      otherPlayers: ["haku666"]
    },

    {
      id: "WhiteTeam",
      name: "White team",
      meta: "FACEIT LVL",
      players: ["ecstasy", "Tod0999", "MartyHie", "nikis", "Everest_Rus"],
      achievements: [],
      otherPlayers: ["bigkidswag", "depre??ed", "Luck1", "k", "Virtual_child1"]
    },

    {
      id: "Asteria Black",
      name: "Asteria Black",
      meta: "FACEIT LVL",
      players: ["MoWee", "s0lkes", "aiwqq", "FR1ZYY", "Dosia"],
      achievements: [],
      otherPlayers: ["samorezz","Kl1mat"]
    },

    {
      id: "Team61",
      name: "Team 61",
      meta: "FACEIT LVL",
      players: ["kyrlin", "Altreezz", "Kurok1sh1", "lov3zzy", "farrrr"],
      achievements: [],
      otherPlayers: ["VaRked666"]
    },

    {
      id: "MVTeam",
      name: "MVTeam",
      meta: "FACEIT LVL",
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
      players: ["sh3f", "wiggzes", "neetsky", "north", "shiy"],
      achievements: [],
      otherPlayers: ["Dimonch4k"]
    },
    {
      id: "Team Primus",
      name: "Team Primus",
      meta: "FACEIT LVL",
      players: ["novaprospekt", "gsmod04", "ggg", "kuro", "swokinz"],
      achievements: [],
      otherPlayers: ["Hyp3rs","Hoopz"]
    },
    {
      id: "BCW TEAM",
      name: "BCW TEAM",
      meta: "FACEIT LVL",
      players: ["z3pp", "el1v1o", "flew", "vut1an", "rinex"],
      achievements: [],
      otherPlayers: []
    },
    {
      id: "Team Silvers",
      name: "Team Silvers",
      meta: "FACEIT LVL",
      players: ["ZyuZya","timaerror","Kasumi","Z3roX02","Bunar"],
      achievements: ["2-е место Aventus Cup","8-4 место IPE Major"],
      otherPlayers: ["VkidGames","ByShine","rix"]
    },
    {
      id: "Team Silvers Academy",
      name: "Team Silvers Academy",
      meta: "FACEIT LVL",
      players: ["n1ght","fantabym","guzzy","gili3cs","Ehone1j"],
      achievements: [],
      otherPlayers: ["b1ndo"]
    },
    {
      id: "Blood Owners",
      name: "Blood Owners",
      meta: "FACEIT LVL",
      players: ["Cry","komuqi","mAVR1K","Semen41K","kaiori"],
      achievements: ["Reload Cup 3 - place"],
      otherPlayers: ["mesure","Lwftaze","TheKervich","pilotf14","Toys"]
    },
    {
      id: "Exot Team",
      name: "Exot Team",
      meta: "FACEIT LVL",
      players: ["VARNEX","VSnipeX","Skyooo","Pr0f1d","Yuki"],
      achievements: [],
      otherPlayers: ["magixX_2","Mramor"]
    },
    {
      id: "Team Expoo",
      name: "Team Expoo",
      meta: "FACEIT LVL",
      players: ["shintrix","zelofa1n","wedding","sw1k","NEXT_TIME"],
      achievements: ["3-4 place BLASTY OPEN WINTER","2nd place BLASTY PRO LEAGUE 2","3-4 place TABURETKA CUP","3-4 place RAZE CUP SEASON 5"],
      otherPlayers: ["MDB","Lord_Elite","Xandow"]
    },
    {
      id: "Lumen Novara Academy",
      name: "Lumen Novara Academy",
      meta: "FACEIT LVL",
      players: ["Romario","Shadow","X1do","Beaut1full","Vinrise"],
      achievements: [],
      otherPlayers: ["King666","Hatyykk"]
    },
    {
      id: "Barebuh Team",
      name: "Barebuh Team",
      meta: "FACEIT LVL",
      players: ["aori","r3kn","Goidmen","blessedrecode","Leha epta"],
      achievements: [],
      otherPlayers: ["Popo4ka"]
    },
    {
      id: "Warm Ray Team",
      name: "Warm Ray Team",
      meta: "FACEIT LVL",
      players: ["Blex","k1llobyte","4shist","s1baa","methody"],
      achievements: [],
      otherPlayers: [""]
    }, 
    {
      id: "HYDRA eSports",
      name: "HYDRA eSports",
      meta: "FACEIT LVL",
      players: ["st0nks","1nference","z1pqt","Lapatasion","Rawlod"],
      achievements: [],
      otherPlayers: ["theYELLSS"]
    },
	{
      id: "R8G",
      name: "R8G",
      meta: "FACEIT LVL",
      players: ["Kickpo","tragedy","marcus","Elo>girl","Yasuo"],
      achievements: [],
      otherPlayers: [""]
    },
	{
      id: "BlaiZ",
      name: "BlaiZ",
      meta: "FACEIT LVL",
      players: ["弗拉德","HaKu666","LeviT","1mmortal","s1ntroo666"],
      achievements: [],
      otherPlayers: [""]
    }
  ],

  matches: [
    {
      id: 1,
      team1: "Burmalda",
      team2: "Lumen Novara",
      score: "2:0",
      date: "25 МАР",
      format: "BO3",
      maps: ["Mirage 13:6", "Nuke 13:7"]
    }
  ]
};

