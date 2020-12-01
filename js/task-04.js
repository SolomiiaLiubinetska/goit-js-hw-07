const counter = document.getElementById('value');
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
let counterValue = 0;


increment.addEventListener('click', event => {
   counterValue += 1;
   counter.textContent = counterValue;
});

decrement.addEventListener('click', event => {
    counterValue -= 1;
    counter.textContent = counterValue;
 });