'use strict';
let name=[];
let num1= parseInt(prompt('give the number of participants'));

for (let i=0; i<num1; i++){
  name.push(prompt('enter the name of the participant'))
}
document.querySelector('#names').innerHTML= name.sort()
