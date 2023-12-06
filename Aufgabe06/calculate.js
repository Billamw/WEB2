
let text = document.getElementById("input");
let oldText = document.getElementById("oldInput")

function numberinput(e) {
    text.textContent += e.textContent;
    console.log("num " + e.textContent);
}

function operatorInput(e) {

    let txt = text.textContent;
    if (isOperator(txt.charAt(txt.length - 1))) {
        console.log("Last is operator");
        return;
    }

    text.textContent += e.textContent;
}

function isOperator(char) {
    let operators = ['+', '-', '*', '/'];
    for (const operator of operators) {
        if (char === operator) {
            return true;
        }
    }
    return false;
}

function evaluates() {
    let txt = text.textContent;
    console.log(txt);
    let num = eval(txt);

    oldText.textContent = txt;
    text.textContent = num;
}

function dump() {
    text.textContent = ''
    oldText.textContent = ''
}


