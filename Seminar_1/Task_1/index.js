
window.addEventListener('resize', () => {
    const width = document.querySelector('#width');
    const height = document.querySelector('#height');
    width.textContent = window.innerWidth;
    height.textContent = window.innerHeight;
  });


window.addEventListener("beforeunload", e => {
    e.preventDefault();
    e.returnValue = 'Точно????';
})

const backBtn = document.querySelector('.backButton');
const frwBtn = document.querySelector('.forwardButton');

backBtn.addEventListener('click', () => {
    window.history.back();
})

frwBtn.addEventListener('click', () => {
    window.history.forward();
})