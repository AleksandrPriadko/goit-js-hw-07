const counterValues = document.querySelector("#value");
let counterValue = Number(counterValues.textContent);
//console.log(typeof counterValue)

function increment() {
    counterValue += 1;
    counterValues.innerHTML = counterValue;
}

function decrement() {
    counterValue -= 1;
    counterValues.innerHTML = counterValue;
}

const btnmaxRef = document.querySelector('[data-action="increment"]');
const btnminRef = document.querySelector('[data-action="decrement"]');

btnmaxRef.addEventListener("click", increment);
btnminRef.addEventListener("click", decrement);