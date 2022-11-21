 'use strict'
 let answer = confirm('Should I calculate the square root?')
    if (answer == true){
      let number= parseInt(prompt('enter a number'))
      if (number >0){
        var square = Math.floor(Math.sqrt(number))
        document.querySelector('#square').innerHTML = `the sqrt of ${number} is ${square}`
      }
      else{
        document.querySelector('#square').innerHTML = 'The square root of a negative number is not defined'
      }


    }
    else{
      document.querySelector('#square').innerHTML= 'The square root is not calculated.'
    }
