'use strict';
 var number= parseInt(prompt('enter a number'))
  var answer =false;
  if (number>1){
    for (let i =2; i< number; i++ ){
      if(number%i==0){
        answer= true;
        break;
      }
    }
  }
  if(number){
    document.querySelector('#prime').innerHTML= `${number} is not a prime number`

  }
  else {
document.querySelector('#prime').innerHTML=`${number} is a prime number`

  }