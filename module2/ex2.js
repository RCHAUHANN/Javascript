'use strict';
let name=[];
let ol = document.getElementById('names');
let num1= parseInt(prompt('give the number of participants'));

for (let i=0; i<num1; i++){
  name.push(prompt('enter the name of the participant'))
}
for (let i=0;i<name.length;i++) {
  var li = document.createElement('li');
  li.innerText = name[i]
  ol.appendChild(li)
}
 name.sort()
