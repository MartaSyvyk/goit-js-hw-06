function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


 const inputEl = document.querySelector("input");
 const createEl = document.querySelector("button[data-create]");
 const deleteEl = document.querySelector("button[data-destroy]");
 const destinationEl = document.querySelector("#boxes");
 




inputEl.addEventListener('input', onInput);

function onInput (event) {
const quantity = Number(event.currentTarget.value);
 console.log (quantity);
 

createEl.addEventListener("click", onCreateButton);

function onCreateButton () {

  let width = 20;
  let height = 20;
  const array = [];
for (let index = 1; index <= quantity; index += 1) {

  console.log(index);
  let containerEl = document.createElement("div");
  let randomColor = getRandomHexColor();

  width += 10;
  height += 10;
  
  containerEl.style.width = `${width}px`;
  containerEl.style.height = `${height}px`;

  containerEl.style.backgroundColor = randomColor;

  console.log(randomColor);
  containerEl.classList.add("custom-container")
    array.push(containerEl)
console.log (array);
  };

destinationEl.prepend(...array);
  

  

const customContainers = document.querySelectorAll(".custom-container");

deleteEl.addEventListener("click", onDeletebutton);
function onDeletebutton () {
  customContainers.forEach(container => container.remove())
  ;
}
}

}









; 

