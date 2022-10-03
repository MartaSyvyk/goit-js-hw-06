const inputEl = document.querySelector("#font-size-control")
const spanEl = document.querySelector("#text");

inputEl.addEventListener("change", onChange);

function onChange (event) {
    let fontSize = event.currentTarget.value;
    console.log (fontSize);
        spanEl.style.fontSize = `${fontSize}px`;
    }