var originList = {
  "assassin": {
    "key": "assassin",
    "name": "Assassin",
    "description": "Assassins leap to the farthest enemy at the start of combat and deal additional Critical Strike Damage.",
    "accentChampionImage": "https://cdn.blitz.gg/blitz/centered/Katarina_Splash_Centered_0.jpg",
    "bonuses": [
      {
        "needed": 3,
        "effect": "+125% critical strike damage."
      },
      {
        "needed": 6,
        "effect": "+350% critical strike damage."
      }
    ]
  },
  "blademaster": {
    "key": "blademaster",
    "name": "Blademaster",
    "description": "Blademasters have a 35% chance to strike additional times each attack.",
    "accentChampionImage": "https://cdn.blitz.gg/blitz/centered/Fiora_Splash_Centered_0.jpg",
    "bonuses": [
      {
        "needed": 3,
        "effect": "One additional strike"
      },
      {
        "needed": 6,
        "effect": "Two additional strikes"
      }
    ]
  },
  "brawler": {
    "key": "brawler",
    "name": "Brawler",
    "description": "Brawlers receive bonus maximum health.",
    "accentChampionImage": "https://cdn.blitz.gg/blitz/centered/Warwick_Splash_Centered_0.jpg",
    "bonuses": [
      {
        "needed": 2,
        "effect": "+300 Bonus health."
      },
      {
        "needed": 4,
        "effect": "+700 Bonus health."
      }
    ]
  },
  "elementalist": {
    "key": "elementalist",
    "name": "Elementalist",
    "description": "Elementalists gain double mana from attacks.",
    "accentChampionImage": "https://cdn.blitz.gg/blitz/centered/Brand_Splash_Centered_0.jpg",
    "bonuses": [
      {
        "needed": 3,
        "effect": "At the start of combat, summon an Elemental. Elemental has 2200 health and 100 Attack Damage."
      }
    ]
  },
  "guardian": {
    "key": "guardian",
    "name": "Guardian",
    "description": null,
    "accentChampionImage": "https://cdn.blitz.gg/blitz/centered/Braum_Splash_Centered_0.jpg",
    "bonuses": [
      {
        "needed": 2,
        "effect": "At the start of combat, all adjacent allies receive +50 armor. Stacks any number of times."
      }
    ]
  },
  "gunslinger": {
    "key": "gunslinger",
    "name": "Gunslinger",
    "description": "After attacking, Gunslingers have a 50% chance to fire additional attacks.",
    "accentChampionImage": "https://cdn.blitz.gg/blitz/centered/MissFortune_Splash_Centered_0.jpg",
    "bonuses": [
      {
        "needed": 2,
        "effect": "Attack another random enemy."
      },
      {
        "needed": 4,
        "effect": "Attack 2 additional random enemies in range."
      }
    ]
  },
  "knight": {
    "key": "knight",
    "name": "Knight",
    "description": "Your team ignores damage from all sources.",
    "accentChampionImage": "https://cdn.blitz.gg/blitz/centered/Kayle_Splash_Centered_0.jpg",
    "bonuses": [
      {
        "needed": 2,
        "effect": "15 damage."
      },
      {
        "needed": 4,
        "effect": "30 damage."
      },
      {
        "needed": 6,
        "effect": "55 damage."
      }
    ]
  },
  "ranger": {
    "key": "ranger",
    "name": "Ranger",
    "description": "Rangers have a chance to double their attack speed for the next 3s.",
    "accentChampionImage": "https://cdn.blitz.gg/blitz/centered/Kindred_Splash_Centered_0.jpg",
    "bonuses": [
      {
        "needed": 2,
        "effect": "25% chance."
      },
      {
        "needed": 4,
        "effect": "65% chance."
      }
    ]
  },
  "shapeshifter": {
    "key": "shapeshifter",
    "name": "Shapeshifter",
    "description": "Shapeshifters gain bonus maximum Health when they transform.",
    "accentChampionImage": "https://cdn.blitz.gg/blitz/centered/Elise_Splash_Centered_0.jpg",
    "bonuses": [
      {
        "needed": 3,
        "effect": "+60% bonus max health"
      }
    ]
  },
  "sorcerer": {
    "key": "sorcerer",
    "name": "Sorcerer",
    "description": "Sorcerers gain double mana from attacking and allies have increased spell damage.",
    "accentChampionImage": "https://cdn.blitz.gg/blitz/centered/Karthus_Splash_Centered_0.jpg",
    "bonuses": [
      {
        "needed": 3,
        "effect": "+45% Spell Damage"
      },
      {
        "needed": 6,
        "effect": "+100% Spell Damage"
      }
    ]
  }
}

function originStat(hero, list, properti, x, klass, s) {
  var list = originList;
  var genre = list[hero];
  var target = genre[properti];
  var origin = klass;
  var i =  s;

  for(let obs in list) { 
    var x = x;
    if (x === undefined){
            x = 0;  } 
    final = target;
}
          var statsheet = document.createElement('div');
          var dad = document.getElementsByClassName('heroes')[i];
           
            statsheet.setAttribute('class', origin);
            statsheet.style.opacity = 1;
            // lasttoken is the string form of the object returned.
            var lasttoken = JSON.stringify(final);
               //   var unwant; //unwanted strings
                  lasttoken = lasttoken.replace(/[\[\]\{\}\"]/g, "");

                statsheet.innerHTML = lasttoken;
                dad.appendChild(statsheet);
                return (statsheet.innerHTML);
  } 