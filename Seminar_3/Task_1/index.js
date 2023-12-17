const productsData = [
    {
        id: 1,
        name: "Ноутбук",
        category: "Электроника",
    },
    {
        id: 2,
        name: "Смартфон",
        category: "Электроника",
    },
    {
        id: 3,
        name: "Кофемашина",
        category: "Бытовая техника",
    },
    {
        id: 4,
        name: "Фотокамера",
        category: "Электроника",
    },
    {
        id: 5,
        name: "Микроволновая печь",
        category: "Бытовая техника",
    },
    {
        id: 6,
        name: "Книга",
        category: "Книги",
    },
    {
        id: 7,
        name: "Футболка",
        category: "Одежда",
    },
    {
        id: 8,
        name: "Шапка",
        category: "Одежда",
    },
    {
        id: 9,
        name: "Стул",
        category: "Мебель",
    },
    {
        id: 10,
        name: "Стол",
        category: "Мебель",
    },
];

const selectElement = document.querySelector('#category-select');
const list = document.querySelector('#products-list');
displayProducts(productsData);

function displayProducts(productsData) {
    productsData.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element.name;
        list.appendChild(li);
    });
}


selectElement.addEventListener('change', () => {
    list.innerHTML = '';
    const selected = selectElement.value;
    if (selected !== '') {
        const result = productsData.filter((elem) => elem.category === selected);
        displayProducts(result)
    }
    else {
        displayProducts(productsData);
    }
})