function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


 const inputEl = document.querySelector("input");
 const createEl = document.querySelector("button[data-create]");
 const deleteEl = document.querySelector("button[data-destroy]");

function onInput (event) {
 let quantity = event.currentTarget.value;
 console.log(quantity);

inputEl.addEventListener('input', onInput);


// createEl.addEventListener("click", onCreateClick);

// function onCreateClick () {
//   let width = 20;
//   let height = 20;
//   for (let i = 0, i <= quantity, i += 1) {
//   let containerEl = document.createElement("div");
//   width += 10;
//   height += 10;
//   document.containerEl.style.width = "${width}px";
//   document.containerEl.style.height = "${height}px";
//   }  

//   };



  


}