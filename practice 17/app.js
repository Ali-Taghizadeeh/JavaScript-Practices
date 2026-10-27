let userNumber=+prompt("enter your number: ")
let sum =0;
let count=0;

while(userNumber / 10 !== 0){
    sum = sum + (userNumber % 10);
    count++;
    userNumber= Math.floor(userNumber / 10);

}
alert("sum of digits: "+sum + "\n"+ "count of digits: "+ count);