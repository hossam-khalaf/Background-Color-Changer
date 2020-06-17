const change = document.getElementById('change');
const color = document.getElementById('color');
const body = document.body;

change.addEventListener('click', changeBg);

function changeBg() {
  const colorRed = getRandomRGB();
  const colorBlue = getRandomRGB();
  const colorGreen = getRandomRGB();

  const colorString = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;

  body.style.background = colorString;
  color.innerText = colorString;
}

function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}
