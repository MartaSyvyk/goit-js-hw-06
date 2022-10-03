const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = images.map(image => {
  let newItem = document.createElement("li");
   let newImageEl = document.createElement("img");

  newImageEl.setAttribute("src", image.url);
  newImageEl.setAttribute("alt", image.alt);
  newImageEl.style.width = "960px";
  newItem.append(newImageEl);
  return newItem;
  
})

const galleryListEl = document.querySelector(".gallery");
galleryListEl.append(...galleryEl);
galleryListEl.style.display = "flex"
galleryListEl.style.flexDirection = "column"
galleryListEl.style.gap = "10px"
galleryListEl.style.listStyle = "none"
