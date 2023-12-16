//  МЕНЮ С ССЫЛКАМИ, КОТОРЫЕ ПОДСВЕЧИВАЮТСЯ ПРИ НАЖАТИИ

const links = document.querySelectorAll('.menu__link')

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        // preventDefault - только если не надо переходить по ссылке
        e.preventDefault();
        e.target.classList.add('active');
        links.forEach((item) => {
            if (item !== e.target) {
                item.classList.remove('active');
            }
        })
    })
})
