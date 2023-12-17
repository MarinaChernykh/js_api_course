const key = 'R7TlhZ05B5ESkDS0SXrApmyVb_QcQPISC9etoKHvtrE';

const image = document.querySelector('.photo');
const author = document.querySelector('.author');
const likeBtn = document.querySelector('.like');
const likeText = document.querySelector('.like-text');

async function fetchRandomPhoto() {
    url = `https://api.unsplash.com/photos/random?client_id=${key}`
    console.log(url);
    try {
        const response = await fetch(url);
        const photo = await response.json();
        console.log(photo);
        return photo;
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        return [];
    }
}

async function displayRandomPhoto() {
    let likes = 0;
    let text = likeText.textContent;
    const photo = await fetchRandomPhoto();
    image.setAttribute('src', photo.urls.small);
    image.setAttribute('alt', photo.description);
    author.textContent += photo.user.name;
    likeText.textContent = text + likes;
    likeBtn.addEventListener('click', () => {
        likes++;
        likeText.textContent = text + likes;
    })
}

displayRandomPhoto();