const ul = document.querySelector('#target');
let items =["First item", "Second Item", "Third Item"];


for (let i = 0; i < items.length; i++){
 const li = document.createElement('li');
 li.innerHTML=items[i];
 ul.appendChild(li);
}

const second = document.querySelectorAll('li')[1];
second.classList.add("my-item");