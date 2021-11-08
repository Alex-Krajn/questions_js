// 1. Задачи с простыми типами данных
let lorem = 'I\' m love JavaSript';

// 1.1 Взять последний символ строки
console.log(lorem[lorem.length - 1]);

// 1.2 Что внутри console.log()
console.log('1.2.1', 1 === true );
console.log('1.2.2', 1 == true );
console.log('1.2.3', '' == false );
console.log('1.2.4', '' == 0 );

console.log('1.2.5', '' || 1);
console.log('1.2.6', '' && 0);
console.log('1.2.7', 1 && 0 || true);

// ___________________________________________


// 2. Задачи с массивами
let quest2 = ['Привет', ',', 'как дела?'];

// 2.1 Вывести из массива строку 
// Привет, как дела?
console.log(quest2.join(''));


// 2.2 Присоединить к массиву quest2 массив additions
let additions = ['Я', 'сегодня', 'на работу', 'не иду!']

    // Cпособ 1
    for(let i = 0; i < additions.length; i++) {
        // quest2.push(additions[i])
    }

    // Способ 2
    quest2 = quest2.concat(additions)

console.log(quest2);
// ___________________________________________


// 3. Задачи с функциями

// Function Declaration
function sum(a, b) {
    return a + b
}

// Function Expression
let summ2 = function(a, b) {
    return a + b
}

// 3.1 Вывести все переданные в фунцию аргументы
function getAllElements(a, b, ...arg) {
    console.log(arguments);

    console.log(...arg);

    console.log(this);
}

getAllElements(1, 2, 4, 5, 6)

// ___________________________________________

// 4. Задачи с событиями

// 4.1 Тремя способами навесить и обработать события клика на кнопку #CLiCK
let CLICK = document.getElementById('CLICK');

CLICK.addEventListener('click', function(e) {
    console.log('CLICK.addEventListener');
    // console.log(e);
    console.log(this.onclick);
})

CLICK.onclick = function() {
    console.log('CLICK.onclick');
}

// 4.2 Вывести в консоль номер нажатого блока
let parent = document.getElementsByClassName('parent')[0];

parent.addEventListener('click', function(e) {
    let target = e.target;
    if(e.target.className === 'parent') {
        return
    }

    console.log(e.target.textContent);
    // or
    console.log(e.target.innerText);
})


//  5 Асинхронность
// JS - язык, который иммет 1-н поток
// Браузерное API
console.log('START');

setTimeout(() => {
    console.log('Timeout');
}, 0)

console.log('END');


async function rickAndMorty() {
    console.log('rickAndMorty', 'START REQUEST');

    await fetch('https://rickandmortyapi.com/api/character')
    .then(data => {
        return data.json();
    })
    .then(data => {
        return data.info.pages;
    })
    .then(pages => {
        console.log(pages);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log('rickAndMorty', 'END REQUEST');
    })

    await setTimeout(() => {
        console.log('rickAndMorty', 'Timeout');
    }, 0)
}


rickAndMorty()


// 6 Замыкание

// sum(1)(2) нужно вернуть = 3
// Замыкание - это функция и её лексическое окружение

function sum(a) {
    return function (b) {
        return a + b
    }
}

let ab = sum(2)
let cd = sum(6)

console.log('ab1: ', ab(4));
console.log('ab2: ', ab(6));

console.log('cd1: ', cd(5));

console.log('Замыкание: ', sum(1)(6));