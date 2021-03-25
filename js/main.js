let input = document.querySelector('.input');


function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;    
    } else {
        input.textContent += num;
    }
}

function clean() {
    input.textContent = "0";
}

function back() {
    input.textContent = input.textContent.substring(0, input.textContent.length - 1);
    if (input.textContent.length == 0) {
        input.textContent = "0";
    }
}

function equal() {
    if (input.textContent.includes('^')) {
        let operands = input.textContent.split('^');
        input.textContent = Math.pow(operands[0], operands[1]);
    } else {
        input.textContent = eval(input.textContent);
    }

    deleteTail();
}

function percent() {
    input.textContent = eval(input.textContent)/100;

    deleteTail();
}

function pi() {
    insert(Math.PI);

    deleteTail();
}

function e() {
    insert(Math.E);

    deleteTail();
}

function operation(name) {
    if (name == "sqrt") {
        input.textContent = Math.sqrt(eval(input.textContent)); 
        deleteTail();
    }
    if (name == "sqr") {
        input.textContent = Math.pow(eval(input.textContent), 2);
    }
    if (name == "^-1") {
        input.textContent = Math.pow(eval(input.textContent), -1);
        deleteTail();
    }
    if (name == "^") {
        input.textContent += "^";
    }

}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function factorialInsert() {
    input.textContent = factorial(input.textContent);
}

function log(name) {
    if (name == "lg") {
        input.textContent = Math.log10(eval(input.textContent));
    }
    if (name == "ln") {
        input.textContent = Math.log(eval(input.textContent));
    }
    
    deleteTail();
}

//Переключение градусов и радианов
document.querySelector('.type').addEventListener('click', function() {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
    }
});

function funcs(name) {
    if (name == "sin") {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = Math.sin(eval(input.textContent));
        } else {
            input.textContent = Math.sin(eval(input.textContent) / 100 * Math.PI);
        }
    }
    if (name == "cos") {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = Math.cos(eval(input.textContent));
        } else {
            input.textContent = Math.cos(eval(input.textContent) / 100 * Math.PI);
        }
    }
    if (name == "tan") {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = Math.tan(eval(input.textContent));
        } else {
            input.textContent = Math.tan(eval(input.textContent) / 100 * Math.PI);
        }
    }
    if (name == "ctg") {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = 1/Math.tan(eval(input.textContent));
        } else {
            input.textContent = 1/Math.tan(eval(input.textContent) / 100 * Math.PI);
        }
    }

    deleteTail();
}

function deleteTail() {
    input.textContent = parseFloat(Number(input.textContent).toFixed(8).toString());
}