'use strict';
  var numDice = parseInt(prompt('how many dice you want to roll?'))
    var sumDice =0;

    for (let i =0;i<=numDice;i++){
      var dice =Math.floor(Math.random() * 6)+ 1
      sumDice= sumDice + dice;
    }

    document.querySelector('#dice').innerHTML =`the sum of the dices are ${sumDice}`