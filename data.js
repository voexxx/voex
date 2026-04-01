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
      rank: "1",
      name: "Ventus Axi",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["m0nday", "squan", "v1ns", "SAQik444", "Yud0qq"],
      achievements: [],
      otherPlayers: [""]
    },

    {
      id: "Burmalda",
      rank: "2",
      name: "Burmalda",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["V1zer", "Wackzzy", "hyse1n", "kashap", "LatypOFF"],
      achievements: [],
      otherPlayers: ["Kv1zzy"]
    },

    {
      id: "WhiteTeam",
      rank: "3",
      name: "White team",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["ecstasy", "Tod0999", "MartyHie", "nikis", "Everest_Rus"],
      achievements: [],
      otherPlayers: ["bigkidswag", "depre??ed", "Luck1", "k", "Virtual_child1"]
    },

    {
      id: "Asteria Black",
      rank: "4",
      name: "Asteria Team",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["MoWee", "1nvizy", "aiwqq", "FR1ZYY", "Dosia"],
      achievements: [],
      otherPlayers: ["samorezz","Kl1mat"]
    },

    {
      id: "Team61",
      rank: "5",
      name: "Team 61",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["kyrlin", "Altreezz", "Kurok1sh1", "lov3zzy", "farrrr"],
      achievements: [],
      otherPlayers: ["VaRked666"]
    },

    {
      id: "MVTeam",
      rank: "6",
      name: "MVTeam",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["m0nst0r", "Bat1r", "Alalkai", "RAVEN", "Topy"],
      achievements: [
        "RIEM RIO - 1 place",
        "Aventus Cup - 3-4 place",
        "W Starladder - 3 place"
      ],
      otherPlayers: ["Dqzz", "Volcane", "Koku", "Whitegodofd"]
    },
    {
      id: "Lumen Novara",
      rank: "7",
      name: "Lumen Novara",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["sh3f", "wiggzes", "neetsky", "Dimonch4k", "shiy"],
      achievements: [],
      otherPlayers: []
    },
    {
      id: "Team Primus",
      rank: "8",
      name: "Team Primus",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["novaprospekt", "gsmod04", "ggg", "kuro", "swokinz"],
      achievements: [],
      otherPlayers: ["Hyp3rs","Hoopz"]
    },
    {
      id: "BCW TEAM",
      rank: "9",
      name: "BCW TEAM",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["z3pp", "el1v1o", "flew", "vut1an", "rinex"],
      achievements: [],
      otherPlayers: []
    },
    {
      id: "Team Silvers",
      rank: "10",
      name: "Team Silvers",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["ZyuZya","timaerror","Kasumi","Z3roX02","Bunar"],
      achievements: ["2-е место Aventus Cup","8-4 место IPE Major"],
      otherPlayers: ["VkidGames","ByShine","rix"]
    },
    {
      id: "Team Silvers Academy",
      rank: "11",
      name: "Team Silvers Academy",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["n1ght","fantabym","guzzy","gili3cs","Ehone1j"],
      achievements: [],
      otherPlayers: ["b1ndo"]
    },
    {
      id: "Blood Owners",
      rank: "12",
      name: "Blood Owners",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["Cry","komuqi","mAVR1K","Semen41K","kaiori"],
      achievements: [],
      otherPlayers: ["mesure","Lwftaze","TheKervich","pilotf14","Toys"]
    },
    {
      id: "Exot Team",
      rank: "13",
      name: "Exot Team",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["Varnexx","VSnipeX","Skyooo","Pr0f1d","Yuki"],
      achievements: [],
      otherPlayers: ["magixX_2"]
    },
    {
      id: "Team Expoo",
      rank: "14",
      name: "Team Expoo",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["shintrix","zelofa1n","dortiz","sw1k","NEXT_TIME"],
      achievements: ["3-4 place BLASTY OPEN WINTER","2nd place BLASTY PRO LEAGUE 2","3-4 place TABURETKA CUP","3-4 place RAZE CUP SEASON 5"],
      otherPlayers: ["MDB","Lord_Elite","Xandow"]
    },
    {
      id: "Lumen Novara Academy",
      rank: "15",
      name: "Lumen Novara Academy",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["Romario","Shadow","X1do","Immortal","Vinrise"],
      achievements: [],
      otherPlayers: ["Sday","King666","Hatyykk"]
    },
    {
      id: "Barebuh Team",
      rank: "16",
      name: "Barebuh Team",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["aori","r3kn","Maloy","blessedrecode","Leha epta"],
      achievements: [],
      otherPlayers: ["Popo4ka"]
    }, 
    {
      id: "HYDRA eSports",
      rank: "17",
      name: "HYDRA eSports",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["Rawlod","Lapatasion","z1pqt","1nference","st0nks"],
      achievements: [],
      otherPlayers: ["theYELLSS"]
    },
    {
      id: "Warm Ray Team",
      rank: "18",
      name: "Warm Ray Team",
      meta: "FACEIT LVL",
      badge: "0",
      points: 0,

      players: ["Blex","k1ll0byte","4shist","s1baa","methody"],
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


