'use strict';
 const room = prompt('enter your name')
    random = document.querySelector('#random').innerHTML = Math.floor(Math.random() * 4) + 1;
    switch (random){
      case 1:

    }
    if (random ==1) {
      document.querySelector('#case').innerHTML = ` ${room} you are a Gryffindor`;
    }
    else if (random ==2) {
      document.querySelector('#case').innerHTML = ` ${room} you are a Slytherin`;
    }
    else if (random ==3) {
      document.querySelector('#case').innerHTML = ` ${room} you are a Hufflepuff`;
    }
    else if (random ==4) {
      document.querySelector('#case').innerHTML = ` ${room} you are a Ravenclaw`;
    }
    else {
        console.log('invalid')
    }

