const articlesData = [
    {
    title: 'Заголовок статьи 1',
    content: 'Содержание статьи 1'
    },
    {
    title: 'Заголовок статьи 2',
    content: 'Содержание статьи 2'
    }
];

const container = document.querySelector('.container');
const addBtn = document.querySelector('.add-button');

window.addEventListener("load", loadArticleJSON);

function loadArticleJSON () {
    articlesData.forEach((article) => {
        container.innerHTML += `
        <div class="article">
        <h2 class="title">${article.title}</h2>
        <p class="text">${article.content}</p>
        <button onClick="editBtn" class="edit-btn">Редактировать</button>
        <button onClick="removeBtn" class="remove-btn">Удалить</button>
        </div>
        `
    })
}

addBtn.addEventListener('click', () => {
    const newArticle = {
        title: 'Новая статья',
        content: 'Введите содержание статьи...'
    };
    container.innerHTML += `
    <div class="article">
    <h2 class="title">${newArticle.title}</h2>
    <p class="text">${newArticle.content}</p>
    <button class="edit-btn">Редактировать</button>
    <button class="remove-btn">Удалить</button>
    </div>
    `
});
