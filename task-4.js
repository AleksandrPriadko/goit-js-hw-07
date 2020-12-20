let counterValue = document.querySelector('#value');
const counterValues = counterValue.textContent;
counterValue.innerHTML = counterValues;
console.log(counterValues)

const increment = () => {
    counterValue.innerHTML = 0 + 1;
};
const btnRef = document.querySelector('[data-action="increment"]');


btnRef.addEventListener('click', increment)