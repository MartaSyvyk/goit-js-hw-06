function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick () {
  const randomColor = getRandomHexColor();
  spanEl.textContent = randomColor ;
  bodyEl.style.backgroundColor = randomColor;
  
}