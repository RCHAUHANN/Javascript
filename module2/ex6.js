'use strict';
function dice_num() {
  let dice_rolls = [];
  let list = document.getElementById('dices')
  while (true) {
    var dice_roll = Math.floor(Math.random() * 6) + 1;

    if (dice_roll === 6) {

      for (let i = 0; i < dice_rolls.length; i++) {
        var li = document.createElement(('li'));
        li.innerText = dice_rolls[i];
        list.appendChild(li);
      }
      break;
    }
    else {
      dice_rolls.push(dice_roll)
    }

  }
}
dice_num();
