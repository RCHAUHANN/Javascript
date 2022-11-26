'use strict';
let numbers_list =[]



 for (let i =0;i<5;i++){
   numbers_list.push(prompt("Enter a number"));

}

 document.querySelector('#number').innerHTML= numbers_list.sort(function(a, b){return b - a})

