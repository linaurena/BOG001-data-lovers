import { allData, filterData, organize, nameChamp } from '../src/data.js';
import data from './data/lol/lol.js';
const datosLol = data.data;


describe('allData', () => {
  it.only('is a function', () => {
    expect(typeof allData).toBe('function');
  });

  it.only('debería retornar `allData`', () => {
    expect(allData(datosLol)).toBe('data');
  });
});

describe('filterData', () => {
  it.only('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it.only('returns `Fighter`', () => {
    expect(filterData(dataPrueba, "Fighter")).toStrictEqual(dataFilter);
  });
});

describe('organize', () => {
  it.only('is a function', () => {
    expect(typeof organize).toBe('function');
  });

  it('returns `Akhali, Ahri, Aatrox`', () => {
    expect(organize(dataPrueba, "Akhali, Ahri, Aatrox")).toStrictEqual(dataFall);
  });
});

describe('nameChamp', () => {
  it.only('is a function', () => {
    expect(typeof nameChamp).toBe('function');
  });

  it.only('returns `Akhali`', () => {
    expect(nameChamp(dataPrueba, "Akhali")).toBe("name");
  });
});

const dataPrueba = {Aatrox: {
  version: "6.24.1",
  id: "Aatrox",
  key: "266",
  name: "Aatrox",
  title: "the Darkin Blade",
  img:
    "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
  splash:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
  blurb:
    "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
  info: {
    attack: 8,
    defense: 4,
    magic: 3,
    difficulty: 4
  },
  image: {
    full: "Aatrox.png",
    sprite: "champion0.png",
    group: "champion",
    x: 0,
    y: 0,
    w: 48,
    h: 48
  },
  tags: ["Fighter", "Tank"],
  partype: "BloodWell",
  stats: {
    hp: 537.8,
    hpperlevel: 85,
    mp: 105.6,
    mpperlevel: 45,
    movespeed: 345,
    armor: 24.384,
    armorperlevel: 3.8,
    spellblock: 32.1,
    spellblockperlevel: 1.25,
    attackrange: 150,
    hpregen: 6.59,
    hpregenperlevel: 0.5,
    mpregen: 0,
    mpregenperlevel: 0,
    crit: 0,
    critperlevel: 0,
    attackdamage: 60.376,
    attackdamageperlevel: 3.2,
    attackspeedoffset: -0.04,
    attackspeedperlevel: 3
  }
},
Ahri: {
  version: "6.24.1",
  id: "Ahri",
  key: "103",
  name: "Ahri",
  title: "the Nine-Tailed Fox",
  img:
    "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
  splash:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
  blurb:
    "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
  info: {
    attack: 3,
    defense: 4,
    magic: 8,
    difficulty: 5
  },
  image: {
    full: "Ahri.png",
    sprite: "champion0.png",
    group: "champion",
    x: 48,
    y: 0,
    w: 48,
    h: 48
  },
  tags: ["Mage", "Assassin"],
  partype: "MP",
  stats: {
    hp: 514.4,
    hpperlevel: 80,
    mp: 334,
    mpperlevel: 50,
    movespeed: 330,
    armor: 20.88,
    armorperlevel: 3.5,
    spellblock: 30,
    spellblockperlevel: 0,
    attackrange: 550,
    hpregen: 6.505,
    hpregenperlevel: 0.6,
    mpregen: 6,
    mpregenperlevel: 0.8,
    crit: 0,
    critperlevel: 0,
    attackdamage: 53.04,
    attackdamageperlevel: 3,
    attackspeedoffset: -0.065,
    attackspeedperlevel: 2
  }
},
Akali: {
  version: "6.24.1",
  id: "Akali",
  key: "84",
  name: "Akali",
  title: "the Fist of Shadow",
  img:
    "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png",
  splash:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
  blurb:
    "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...",
  info: {
    attack: 5,
    defense: 3,
    magic: 8,
    difficulty: 7
  },
  image: {
    full: "Akali.png",
    sprite: "champion0.png",
    group: "champion",
    x: 96,
    y: 0,
    w: 48,
    h: 48
  },
  tags: ["Assassin"],
  partype: "Energy",
  stats: {
    hp: 587.8,
    hpperlevel: 85,
    mp: 200,
    mpperlevel: 0,
    movespeed: 350,
    armor: 26.38,
    armorperlevel: 3.5,
    spellblock: 32.1,
    spellblockperlevel: 1.25,
    attackrange: 125,
    hpregen: 8.34,
    hpregenperlevel: 0.65,
    mpregen: 50,
    mpregenperlevel: 0,
    crit: 0,
    critperlevel: 0,
    attackdamage: 58.376,
    attackdamageperlevel: 3.2,
    attackspeedoffset: -0.1,
    attackspeedperlevel: 3.1
  }
},
Alistar: {
  version: "6.24.1",
  id: "Alistar",
  key: "12",
  name: "Alistar",
  title: "the Minotaur",
  img:
    "https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png",
  splash:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
  blurb:
    "As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran's many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of ...",
  info: {
    attack: 6,
    defense: 9,
    magic: 5,
    difficulty: 7
  },
  image: {
    full: "Alistar.png",
    sprite: "champion0.png",
    group: "champion",
    x: 144,
    y: 0,
    w: 48,
    h: 48
  },
  tags: ["Tank", "Support"],
  partype: "MP",
  stats: {
    hp: 613.36,
    hpperlevel: 106,
    mp: 278.84,
    mpperlevel: 38,
    movespeed: 330,
    armor: 24.38,
    armorperlevel: 3.5,
    spellblock: 32.1,
    spellblockperlevel: 1.25,
    attackrange: 125,
    hpregen: 8.675,
    hpregenperlevel: 0.85,
    mpregen: 8.5,
    mpregenperlevel: 0.8,
    crit: 0,
    critperlevel: 0,
    attackdamage: 61.1116,
    attackdamageperlevel: 3.62,
    attackspeedoffset: 0,
    attackspeedperlevel: 2.125
  }
},}

const dataFilter = [{
  version: "6.24.1",
  id: "Aatrox",
  key: "266",
  name: "Aatrox",
  title: "the Darkin Blade",
  img:
    "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
  splash:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
  blurb:
    "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
  info: {
    attack: 8,
    defense: 4,
    magic: 3,
    difficulty: 4
  },
  image: {
    full: "Aatrox.png",
    sprite: "champion0.png",
    group: "champion",
    x: 0,
    y: 0,
    w: 48,
    h: 48
  },
  tags: ["Fighter", "Tank"],
  partype: "BloodWell",
  stats: {
    hp: 537.8,
    hpperlevel: 85,
    mp: 105.6,
    mpperlevel: 45,
    movespeed: 345,
    armor: 24.384,
    armorperlevel: 3.8,
    spellblock: 32.1,
    spellblockperlevel: 1.25,
    attackrange: 150,
    hpregen: 6.59,
    hpregenperlevel: 0.5,
    mpregen: 0,
    mpregenperlevel: 0,
    crit: 0,
    critperlevel: 0,
    attackdamage: 60.376,
    attackdamageperlevel: 3.2,
    attackspeedoffset: -0.04,
    attackspeedperlevel: 3
  }
},]

const dataFall = {Akali: {
  version: "6.24.1",
  id: "Akali",
  key: "84",
  name: "Akali",
  title: "the Fist of Shadow",
  img:
    "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png",
  splash:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
  blurb:
    "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...",
  info: {
    attack: 5,
    defense: 3,
    magic: 8,
    difficulty: 7
  },
  image: {
    full: "Akali.png",
    sprite: "champion0.png",
    group: "champion",
    x: 96,
    y: 0,
    w: 48,
    h: 48
  },
  tags: ["Assassin"],
  partype: "Energy",
  stats: {
    hp: 587.8,
    hpperlevel: 85,
    mp: 200,
    mpperlevel: 0,
    movespeed: 350,
    armor: 26.38,
    armorperlevel: 3.5,
    spellblock: 32.1,
    spellblockperlevel: 1.25,
    attackrange: 125,
    hpregen: 8.34,
    hpregenperlevel: 0.65,
    mpregen: 50,
    mpregenperlevel: 0,
    crit: 0,
    critperlevel: 0,
    attackdamage: 58.376,
    attackdamageperlevel: 3.2,
    attackspeedoffset: -0.1,
    attackspeedperlevel: 3.1
  }
},
Ahri: {
  version: "6.24.1",
  id: "Ahri",
  key: "103",
  name: "Ahri",
  title: "the Nine-Tailed Fox",
  img:
    "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
  splash:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
  blurb:
    "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
  info: {
    attack: 3,
    defense: 4,
    magic: 8,
    difficulty: 5
  },
  image: {
    full: "Ahri.png",
    sprite: "champion0.png",
    group: "champion",
    x: 48,
    y: 0,
    w: 48,
    h: 48
  },
  tags: ["Mage", "Assassin"],
  partype: "MP",
  stats: {
    hp: 514.4,
    hpperlevel: 80,
    mp: 334,
    mpperlevel: 50,
    movespeed: 330,
    armor: 20.88,
    armorperlevel: 3.5,
    spellblock: 30,
    spellblockperlevel: 0,
    attackrange: 550,
    hpregen: 6.505,
    hpregenperlevel: 0.6,
    mpregen: 6,
    mpregenperlevel: 0.8,
    crit: 0,
    critperlevel: 0,
    attackdamage: 53.04,
    attackdamageperlevel: 3,
    attackspeedoffset: -0.065,
    attackspeedperlevel: 2
  }
},
Aatrox: {
  version: "6.24.1",
  id: "Aatrox",
  key: "266",
  name: "Aatrox",
  title: "the Darkin Blade",
  img:
    "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
  splash:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
  blurb:
    "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
  info: {
    attack: 8,
    defense: 4,
    magic: 3,
    difficulty: 4
  },
  image: {
    full: "Aatrox.png",
    sprite: "champion0.png",
    group: "champion",
    x: 0,
    y: 0,
    w: 48,
    h: 48
  },
  tags: ["Fighter", "Tank"],
  partype: "BloodWell",
  stats: {
    hp: 537.8,
    hpperlevel: 85,
    mp: 105.6,
    mpperlevel: 45,
    movespeed: 345,
    armor: 24.384,
    armorperlevel: 3.8,
    spellblock: 32.1,
    spellblockperlevel: 1.25,
    attackrange: 150,
    hpregen: 6.59,
    hpregenperlevel: 0.5,
    mpregen: 0,
    mpregenperlevel: 0,
    crit: 0,
    critperlevel: 0,
    attackdamage: 60.376,
    attackdamageperlevel: 3.2,
    attackspeedoffset: -0.04,
    attackspeedperlevel: 3
  }
},}
