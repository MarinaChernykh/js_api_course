const btnOpen = document.querySelector('.open-modal-btn');
const btnClose = document.querySelector('.close-modal-btn');
const win = document.querySelector('.modal');


btnOpen.addEventListener('click', (e) => {
    btnOpen.style.display = 'none';
    win.style.display = 'block';
})

btnClose.addEventListener('click', (e) => {
    win.style.display = 'none';
    btnOpen.style.display = 'block';
})