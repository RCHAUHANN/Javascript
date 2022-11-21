'use strict';
const year= prompt('Give a year')
if (year % 4 ==0){
  document.querySelector('#year').innerHTML= `${year} is a leap year`
  if (year %100 ==0){
    document.querySelector('#year').innerHTML=`${year} is a leap year`
  }
  if (year % 400== 0){
    document.querySelector('#year').innerHTML=`${year} is a leap year`
  }
}
else {
  document.querySelector('#year').innerHTML=`${year} is not a leap year`
}