function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

document.body.style.transition = "background-color 0.4s ease-in-out";

btn.addEventListener("click", updateColor);

function updateColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  currentColor.textContent = newColor;
}
