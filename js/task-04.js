const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.querySelector('#value');

let counterValue = 0;

function updateCounterValue() {
  counterValueSpan.textContent = counterValue;
}

const handleDecrement = () => {
  counterValue -= 1;
  updateCounterValue();
}

const handleIncrement = () => {
  counterValue += 1;
  updateCounterValue();
}

decrementBtn.addEventListener('click', handleDecrement);
incrementBtn.addEventListener('click', handleIncrement);