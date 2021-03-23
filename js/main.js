function insert(num) {
    document.form.textview.value = 
    document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    document.form.textview.value = document.form.textview.value.substring(0, document.form.textview.valuelength - 1);
}

function equal() {
    document.form.textview.value = eval(document.form.textview.value);
}