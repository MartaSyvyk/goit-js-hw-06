let counterValue = 0;


const handleClickUp = () => {
    counterValue += 1;
    let result = document.querySelector("#value");
result.textContent = counterValue;
};

const handleClickDown = () => {
    counterValue -= 1;
    let result = document.querySelector("#value");
    result.textContent = counterValue;
};
const increaseBtn = document.querySelector('button[data-action="increment"]');
increaseBtn.addEventListener('click', handleClickUp);

const decreaseBtn = document.querySelector('button[data-action="decrement"]');
decreaseBtn.addEventListener("click", handleClickDown);