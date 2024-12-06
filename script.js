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

}
function heroDefend() {

}
function heroHeal() {

}

function dragonCommand() {

}

function checkWinner() {

}

function battleLog(dragonLog, heroLog, winner) {

}

// I need to add event listener to the attack button
attack.addEventListener("click", heroAttack);
defend.addEventListener("click", heroDefend);
// I need to add event listener to the defend button

heal.addEventListener("click", heroHeal);
