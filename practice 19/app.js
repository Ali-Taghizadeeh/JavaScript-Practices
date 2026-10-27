let sum =0;
let count=0;
while (true) {
    let userNumber = prompt("enter your number:  \n" + "when your numbers is complete just write 'exit'");

    if (userNumber === 'exit')
        break;

    else if (typeof +userNumber !== "number") {
        alert("please write numbers!")
        continue
    }

    userNumber=+userNumber
    sum += userNumber;
    count++;
}

alert(sum/count)
