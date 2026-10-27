const num1= +prompt("please inter num1: ")
const num2= +prompt("please inter num2: ")

function sumNumbers(number1 , number2){
    const sum = number1 + number2;

    alert("number1 + number2 =" + sum);
}
if (isNaN(num1) || isNaN(num2)){
    alert("please enter a number!");
}else{
    sumNumbers(num1,num2)
}