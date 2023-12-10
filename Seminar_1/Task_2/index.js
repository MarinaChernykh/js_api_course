const addButton = document.querySelector('#addButton');
const removeButton = document.querySelector('#removeButton');
const cloneButton = document.querySelector('#cloneButton');
const container = document.querySelector('#container');
let counter = 3;

addButton.addEventListener('click', () => {
    const block = document.createElement('div');
    block.classList.add('box');
    counter++;
    block.innerText = counter;
    container.appendChild(block);
})

removeButton.addEventListener('click', () => {
    container.removeChild(container.lastChild);
    if (counter > 0) {
        counter--;
    }
})

cloneButton.addEventListener('click', () => {
    const lastEl = container.lastChild;
    const clone = lastEl.cloneNode(true);
    container.appendChild(clone);
    counter++;
})