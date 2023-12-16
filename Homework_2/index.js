let slideIndex = 0;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
showImage();

prevBtn.addEventListener('click', (e) => {
    slideIndex--;
    showImage();
})

nextBtn.addEventListener('click', (e) => {
    slideIndex++;
    showImage();
})

function showImage() {
    console.log(slideIndex);
    const images = document.querySelectorAll('.image');
    if (slideIndex > images.length - 1) {
        slideIndex = 0
    }
    if (slideIndex < 0) {
        slideIndex = images.length - 1
    }
    images.forEach(element => {
        element.style.display = 'none';
    });
    images[slideIndex].style.display = 'block';
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        for (let index = 0; index < dots.length; index++) {
            if (dots[index] === e.target) {
                slideIndex = index;
                showImage();
            }
        }
    })
});