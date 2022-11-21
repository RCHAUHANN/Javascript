'use strict';
const dicenum = prompt ( "How nany dices would you like to throw?")
const desiresun = +prompt (  "How many eyes in total would you like to get?")
const target = document. querySelector ( "#target")
let hit = 0;
const simulations = 10000;

for (let i = 0; i < simulations; i++){
 let eyeSum = 0;
 for (let j= 0; j<dicenum; j++) {
   const dice = Math.floor(Math.random() * 6) + 1;
   eyeSum += dice
   }
   if (eyeSum === desiresun) hit++;
   console.log(eyeSum, desiresun, hit);

}
const probability = (hit/simulations) * 100
target.innerHTML = `Probability to get ${desiresun} with ${dicenum} dice is ${probability. toFixed (2)}%`