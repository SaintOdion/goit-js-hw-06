const refs = {
fontSizeControlSlider: document.getElementById('font-size-control'),
text: document.getElementById('text'),
};

refs.fontSizeControlSlider.addEventListener('input', updateFontSize);

function updateFontSize() {
  refs.text.style.fontSize = `${refs.fontSizeControlSlider.value}px`;
}