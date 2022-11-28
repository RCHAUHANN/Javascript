'use strict';
function dice_side(sides) {
  let dice_rolls = [];
  let list = document.getElementById('side');
  while (true) {
    let dice_roll = Math.floor(Math.random() * sides) + 1;

    if (dice_roll === sides) {

      for (let i = 0; i < dice_rolls.length; i++) {
        var li = document.createElement(('li'));
        li.innerText = dice_rolls[i];
        list.appendChild(li);
      }
      break;
    }
    else {
      dice_rolls.push(dice_roll);
    }

  }
  return;
}
let side = parseInt(prompt('enter the number of sides'));
dice_side(side);