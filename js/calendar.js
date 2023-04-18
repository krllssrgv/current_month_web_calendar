'use strict'

function createCalendar(container) {
    let date = new Date(),
        year = date.getFullYear(),
        month = (date.getMonth()) + 1,
        day = (new Date(year, month - 1, 1)).getDay(),
        daysCount = 0;

    if (day == 0) {
        day = 7;
    };

    if ([1,3,5,7,8,10,12].includes(month)) {
        daysCount = 31;
    } else if ([4,6,9,11].includes(month)) {
        daysCount = 30;
    } else if (month == 2) {
        if (year % 4 == 0) {
            daysCount = 29;
        } else {
            daysCount = 28;
        }
    };

    for (let j = 0; j < (day - 1); j++) {
        let emptyDay = document.createElement('div');
        container.append(emptyDay);
    };

    for (let i = 1; i < daysCount + 1; i++) {
        let currentDay = document.createElement('div');
        currentDay.classList.add('calendar__day');
        currentDay.setAttribute('data-date', String((new Date(year, month - 1, i)).getTime()));
        if (i == date.getDate()) {
            currentDay.classList.add('calendar__day-today');
        };
        currentDay.innerHTML = String(i);
        container.append(currentDay);
    };
};


function actCalendar(container) {
    container.addEventListener('click', (event) => {
        document.querySelectorAll('.calendar__day').forEach((element) => {
            element.classList.remove('calendar__day-active');
            countMilliseconds = '';
        });

        if (event.target.classList.contains('calendar__day')) {
            countMilliseconds = event.target.getAttribute('data-date');
            event.target.classList.add('calendar__day-active');
            console.log(countMilliseconds);
        };
    });
};

let countMilliseconds = '',
    parent = document.querySelector('.calendar');

createCalendar(parent);
actCalendar(parent);