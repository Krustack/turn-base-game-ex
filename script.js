const DRAGON_DAMAGE = 15; // ใส่พลังตั้งต้นของมังกร
const HERO_DAMAGE = 15; // ใส่พลังตั้งต้นของฮีโร่
const HEAL = 20; // ใส่พลังการฟื้นฟู
const dragon = document.querySelector("#dragon meter");
const hero = document.querySelector("#hero meter");
const attack = document.querySelector("#comand button:nth-child(1)");
const defend = document.querySelector("#comand button:nth-child(2)");
const heal = document.querySelector("#comand button:nth-child(3)");
const log = document.querySelector("#battle-log ul");

function heroAttack() {
  const heroDamage = (Math.random() * (HERO_DAMAGE - 3) + 3);
  if(heroDamage === 15){
    heroDamage = heroDamage * 3;
  }
  dragon.value -= heroDamage;
  if (dragonCommand() !== "Heal") {
    hero.value -= dragonCommand().dragonDamage;
  }
  battleLog(
    dragonCommand(),
    { heroDamage: heroDamage, heroCommand: "Attack" },
    checkWinner()
  );
}
function heroDefend() {
  if (dragonCommand().dragonCommand !== "Heal") {
    hero.value -= dragonCommand().dragonDamage / 2;
  }
  battleLog(
    dragonCommand(),
    {
      heroDamage: dragonCommand().dragonDamage / 2,
      heroCommand: "Defend",
    },
    checkWinner()
  );
}
function heroHeal() {
  if (hero.value + HEAL >= 100) {
    hero.value = 100;
  } else {
    hero.value += HEAL;
  }
  if (dragonCommand().dragonCommand !== "Heal") {
    hero.value -= dragonCommand().dragonDamage;
  }
  battleLog(
    dragonCommand(),
    { heroDamage: 0, heroCommand: "Heal" },
    checkWinner()
  );
}

function dragonCommand() {
  const command = Math.floor(Math.random() * 2);
  if (command === 0) {
    return {
      dragonDamage: (Math.random() * (DRAGON_DAMAGE - 5) + 5),
      dragonCommand: "Attack",
    };
  } else if (command === 1) {
    return {
      dragonDamage: 2 * (Math.random() * (DRAGON_DAMAGE - 5) + 5),
      dragonCommand: "Fireball",
    };
  } else {
    if ((dragon.value += HEAL > 100)) {
      dragon.value = 100;
      return { dragonDamage: 0, dragonCommand: "Heal" };
    } else {
      dragon.value += HEAL;
      return { dragonDamage: 0, dragonCommand: "Heal" };
    }
  }
}

function checkWinner() {
  if (hero.value <= 0) {
    return "Dragon";
  } else if (dragon.value <= 0) {
    return "Hero";
  } else {
    return;
  }
}

function battleLog(dragonLog, heroLog, winner) {
  const Heroli = document.createElement("li");
  const Dragonli = document.createElement("li");
  if (!winner) {
    if (heroLog.heroCommand === "Attack") {
      Heroli.textContent = `Hero ${heroLog.heroCommand} Dragon recived dmg: ${heroLog.heroDamage} dmg
  Dragon HP ${dragon.value}`;
    } else if (heroLog.heroCommand === "Defend") {
      Heroli.textContent = `Hero ${heroLog.heroCommand}
    Dragon HP ${dragon.value}`;
    } else if (heroLog.heroCommand === "Heal") {
      Heroli.textContent = `Hero ${heroLog.heroCommand} hero heal: ${HEAL} 
    Hero HP ${hero.value}`;
    }
    Heroli.style.color = "green";

    if (dragonLog.dragonCommand === "Attack") {
      Dragonli.textContent = `Dragon ${dragonLog.dragonCommand} Hero recived dmg: ${dragonLog.dragonDamage} dmg
    Hero HP ${hero.value}`;
    } else if (dragonLog.dragonCommand === "Fireball") {
      Dragonli.textContent = `Dragon ${dragonLog.dragonCommand} Hero recived dmg: ${dragonLog.dragonDamage} dmg
    Hero HP ${hero.value}`;
    } else if (dragonLog.dragonCommand === "Heal") {
      Dragonli.textContent = `Dragon ${dragonLog.dragonCommand} Dragon heal: ${HEAL} 
    Dragon HP ${dragon.value}`;
    }
    Dragonli.style.color = "red";
    log.appendChild(Heroli);
    log.appendChild(Dragonli);
  }else{
    const winnerli = document.createElement("li");
    winnerli.textContent = `${winner} Wins`;
    winnerli.style.color = "blue";
    log.appendChild(winnerli);
    attack.disabled = true;
    defend.disabled = true;
    heal.disabled = true;
  }
}

// I need to add event listener to the attack button
attack.addEventListener("click", heroAttack);
defend.addEventListener("click", heroDefend);
// I need to add event listener to the defend button

heal.addEventListener("click", heroHeal);
