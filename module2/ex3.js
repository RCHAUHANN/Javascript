'use strict';
let dogs=[]

for (let i=0; i<6; i++){
  dogs.push(prompt('give the name of a dog'))

}
document.querySelector('#dogs').innerHTML= dogs.reverse().sort()