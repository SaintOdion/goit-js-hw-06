function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxContainer: document.getElementById("boxes"),
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    box.style.backgroundColor = getRandomHexColor();

    refs.boxContainer.append(box);

    size += 10;
  }
}

function creatorBoxes() {
  createBoxes(refs.input.value);
}

function destroyerBoxes() {
  refs.boxContainer.innerHTML = "";
}

refs.createBtn.addEventListener("click", creatorBoxes);

refs.destroyBtn.addEventListener("click", destroyerBoxes);
