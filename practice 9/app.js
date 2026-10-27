const UserNumber=+prompt("enter your number")

function isEvenOrOdd(number=0){

    if (number%2===0){
        return "is even";
    }else{
        return "is odd";
    }
}
if (isNaN(UserNumber)){
    alert("please enter a number!")
}else{
    const Output= isEvenOrOdd(UserNumber);
    alert(Output);
}