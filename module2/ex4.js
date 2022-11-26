'use strict';
let number= []
let num1= parseInt(prompt('enter a number. press 0 to quit'))

while (num1 !=0){
  num1= parseInt(prompt('enter a number. press 0 to quit'))
  number.push(num1)
}
document.querySelector('#num1').innerHTML= number.sort().reverse()