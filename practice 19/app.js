let userNumber = 0;
let sum = 0;
let count =0;

while (userNumber !== -1){
    userNumber = +prompt("enter your numbers: \n" + "when you want see Average enter '-1' ")
    sum = sum + userNumber;
    
    if(userNumber !== -1){
        count++;
    }
}
alert("sum: " + sum  + "\n count: " + count  + "Average: " + sum/count);