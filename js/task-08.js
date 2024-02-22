const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements['email'];
const passwordInput = loginForm.elements['password'];

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (emailInput.value.length === 0 || passwordInput.value.length === 0) {
    alert('Всі поля повинні бути заповнені');
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  }

  console.log(formData);
  loginForm.reset();
};