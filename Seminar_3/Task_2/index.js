const photoContainer = document.getElementById('photo-container');
let page = 1;
const photosPerPage = 9;
const key = 'LuqhJuoKGdB9GdolDHMBmzBRJVINAnPInPnMtgm9-6E';

async function fetchPhotos() {
    url = `https://api.unsplash.com/photos?page=${page}&per_page=${photosPerPage}&client_id=${key}`
    try {
        const response = await fetch(url);
        const photos = await response.json();
        return photos;
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        return [];
    }
}

async function loadMorePhotos() {
    const data = await fetchPhotos(page);
    data.forEach(element => {
        const img = document.createElement('img');
        img.classList.add('photo');
        img.setAttribute('src', element.urls.small);
        photoContainer.appendChild(img);
    });

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            page++;
            loadMorePhotos();
        }})
}

loadMorePhotos()