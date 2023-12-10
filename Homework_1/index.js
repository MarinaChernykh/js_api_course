const trainingsData =
    [
        {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 16
        },
        {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
        },
        {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
        },
        {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
        },
        {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 7
        }
    ];

const container = document.querySelector('.container');

const table = document.createElement('table');
container.appendChild(table);
table.classList.add('table');

window.addEventListener("load", loadTrainingsData);


function loadTrainingsData () {
    const tableHeader = `
        <thead>
        <tr>
            <th>Название</th>
            <th>Время</th>
            <th>Максимальное кол-во участников</th>
            <th>Записано участников</th>
            <th>Записаться</th>
        </tr>
        </thead>
    `
    table.innerHTML = tableHeader;
    const tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    trainingsData.forEach((training) => {
        const tableRow = document.createElement('tr')
        tableRow.innerHTML += `
            <td>${training.name}</td>
            <td>${training.time}</td>
            <td class="max-participants">${training.maxParticipants}</td>
            <td class="curr-participants">${training.currentParticipants}</td>
        `
        const btnTD = document.createElement('td');
        const btn = document.createElement('button');
        btn.textContent = 'Записаться';
        btn.classList.add = "training-btn";
        if (training.maxParticipants <= training.currentParticipants) {
            btn.setAttribute('disabled', 'true');
        }
        btn.addEventListener('click', signup)
        btnTD.appendChild(btn);
        tableRow.appendChild(btnTD);
        tableBody.appendChild(tableRow);
    })

    localStorage.setItem('table', table.innerHTML);



}

function signup (event) {
    const targetButton = event.target;
    const training = targetButton.closest('tr');
    const maxParticipants = training.querySelector('.max-participants');
    const currParticipants = training.querySelector('.curr-participants');

    if (targetButton.textContent == 'Записаться' && Number(maxParticipants.textContent) > Number(currParticipants.textContent)) {
        currParticipants.textContent++;
        targetButton.textContent = 'Отменить запись';
    }

    else if (targetButton.textContent == 'Отменить запись') {
        currParticipants.textContent--;
        targetButton.textContent = 'Записаться';
    }

    localStorage.setItem('table', table.innerHTML);

}
