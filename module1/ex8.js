'use strict';
 var ul= document.createElement('ul')
    let start = parseInt(prompt('enter the start year'))
    let end = parseInt(prompt('enter the end year'))
    for (let i = start; i <= end; i++) {

      if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
       var li= document.createElement('li');
       li.innerHTML= start;
       ul.appendChild(li);
      }
      start++
    }
document.querySelector('#year').appendChild(ul)