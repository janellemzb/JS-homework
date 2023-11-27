// Задание 1

let inputEl = document.getElementById('my-input')
let inputEl2 = document.getElementById('my-input-2')
let button1 = document.getElementById('button')
let resultEl = document.getElementById('result')

button1.onclick = function () {
    let num = Number(inputEl.value) + Number(inputEl2.value)
    resultEl.textContent = 'Result:' + num;
}



// Задание 2

let values = document.getElementById('numberr')
let button2 = document.getElementById('check')
let result1 = document.getElementById('result1')
let result2 = document.getElementById('result2')
let result3 = document.getElementById('result3')

button2.onclick = function () { 
    let inputValue = parseFloat(values.value);
    if (inputValue > 0) {
    result1.textContent = 'positive';
    result2.textContent = '';
    result3.textContent = '';
} else if (inputValue == 0) {
    result2.textContent = 'zero';
    result1.textContent = '';
    result3.textContent = '';
} else {
    result3.textContent = 'negative';
    result1.textContent = '';
    result2.textContent = '';
}
}


// Задание 3

let number = document.getElementById('numberrr')
let button3 = document.getElementById('see')
let result4 = document.getElementById('result4')
let result5 = document.getElementById('result5')

button3.onclick = function () {
    let inputValue = parseFloat(number.value);
        if (inputValue % 2 === 0) {
            result4.textContent = 'Yes';
            result5.textContent = '';
        }
        else {
            result4.textContent = '';
            result5.textContent = 'No';
        }
    }


// Задание 4

let numb = document.getElementById('numberrrr')
let numbb = document.getElementById('numberrrrr')
let button4 = document.getElementById('calc')
let result6 = document.getElementById('plus')
let result7 = document.getElementById('minus')
let result8 = document.getElementById('multiply')
let result9 = document.getElementById('divide')

button4.onclick = function () {
    let num1 = parseFloat(numb.value);
    let num2 = parseFloat(numbb.value);
    result6.textContent = 'Сложение ' + (num1 + num2);
    result7.textContent = 'Вычитание ' + num1 - num2;
    result8.textContent = 'Умножение ' + num1 * num2;
    result9.textContent = 'Деление ' + num1 / num2;
}



// Задание 5

let sm = document.getElementById('height')
let sm1 = document.getElementById('waist')
let sex = document.getElementById('sex')
let male = document.getElementById('male')
let female = document.getElementById('female')
let button5 = document.getElementById('find')

button5.onclick = function () {
    let gender = sex.value;
    let numh = parseFloat(sm.value);
    let numw = parseFloat(sm1.value);
    if (gender === 'F') {
    male.textContent = 64 - (20*numh/numw)
    female.textContent = ""
    }
    else if (gender === 'M') {
    female.textContent = 76 - (20*numh/numw)
    male.textContent = ""
}
}