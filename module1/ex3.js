'use strict';
  var a = parseInt(prompt('enter the first number:'))
  var b = parseInt(prompt('enter the second number:'))
  var c = parseInt(prompt('enter the third number:'))
  var sum = (a+b+c)
  var avg = (a+b+c)/3
  var product= (a*b*c)
  document.querySelector('#sum').innerHTML=`the sum is: ${sum}`
  document.querySelector('#avg').innerHTML=`the avg is: ${avg}`
  document.querySelector('#product').innerHTML=`the avg is: ${product}`