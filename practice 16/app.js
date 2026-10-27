let userNumber=+prompt("enter the number: ")
let count=0;

if (isNaN(userNumber)){
    alert("please enter a number!");
}else{
    if(userNumber===0){
        count=1
    }else{
        for(let i=0; userNumber/10 != 0 ; i++){
            count++;
            userNumber = Math.floor(userNumber/10);
        }
    }
    alert("the text length is : "+ count)
}

