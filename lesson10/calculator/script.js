calculation=""

function add(num){
    calculation+=num
    document.querySelector("#display").innerHTML = calculation;
}

function calculate(){
    calculation = eval(calculation);
    document.querySelector("#display").innerHTML = calculation;
}

function clearDisplay() {
    calculation = "";
    document.querySelector("#display").innerHTML = "0";
}