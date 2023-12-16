
const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', (e) => {
    const res1 = document.querySelector('input[name="q1"]:checked');
    const res2 = document.querySelector('input[name="q2"]:checked');
    if (res1 !== null && res2 !== null) {
        const result1 = document.querySelector('#result-q1');
        const result2 = document.querySelector('#result-q2');
        result1.textContent += res1.value;
        result2.textContent += res2.value;
        const result = document.querySelector('.result');
        result.style.display = 'block';
    } else {
        alert('Заполните поля');
    }
})

