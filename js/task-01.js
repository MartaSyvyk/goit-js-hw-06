const categoriesQuantity = document.querySelectorAll("#categories .item");
console.log('Number of categories:', categoriesQuantity.length);

const itemElems = document.querySelectorAll(".item");

itemElems.forEach(element => {
  const titleEl = element.querySelector("h2").textContent;
const elementQuantity = element.querySelectorAll("li").length;
console.log("Category:", titleEl, "Elements:", elementQuantity)  
});



