let input = document.querySelector('.input');


function insert(num) {
    input.textContent = 
    input.textContent + num;
}

function clean() {
    input.textContent = "";
}

function back() {
    input.textContent = input.textContent.substring(0, input.textContent.length - 1);
}

function equal() {
    input.textContent = eval(input.textContent);
}