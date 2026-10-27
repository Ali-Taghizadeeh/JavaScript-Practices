let number1 = +prompt("enter the number1: ")
let number2 = +prompt("enter the number2: ")

let minNumber = Math.min(number1, number2);
let maxNumber = Math.max(number1, number2);

if (minNumber % 2 === 0) {
    while (minNumber <= maxNumber) {
        console.log(minNumber);
        minNumber +=2;

    }
} else {
    minNumber++;
    while (minNumber <= maxNumber) {
        console.log(minNumber);
        minNumber +=2;

    }
}
alert("check console to read the even numbers between your numbers!")