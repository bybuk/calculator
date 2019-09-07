const display = document.querySelector('#display');

function getInput(input) {
    display.value += input;
}

function clearInput(input) {
    display.value = input;
}

function calculate() {
    if (display.value == '') display.value = '0'
    display.value = eval(display.value);
}