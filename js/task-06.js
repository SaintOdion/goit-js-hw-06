const inputText = document.getElementById('validation-input');
const requiredLength = Number(inputText.getAttribute('data-length'));

inputText.addEventListener('blur', focusEvent);

function focusEvent() {
  if (inputText.value.length === requiredLength) {
    inputText.classList.add('valid');
    inputText.classList.remove('invalid');
  }
  else {
    inputText.classList.add('invalid');
    inputText.classList.remove('valid');
  }
};