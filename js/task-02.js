const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newItems = ingredients.map(ingredient => {
  let newElement = document.createElement("li");
  newElement.classList.add("item");
  newElement.textContent = ingredient;
  return newElement;

});

const listEl = document.querySelector("#ingredients");
listEl.append(...newItems);

console.log(listEl);