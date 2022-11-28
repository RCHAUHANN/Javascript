'use strict';
let dogs=[];
let ul = document.getElementById('dogs');

for (let i=0; i<6; i++){
  dogs.push(prompt('give the name of a dog'+ i))

}
for (let i=0;i<dogs.length;i++){
  var li = document.createElement('li');
  li.innerText = dogs[i]
  ul.appendChild(li)
}
 dogs.reverse().sort()