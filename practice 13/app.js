let RandomNumber=(Math.floor(Math.random() * 100000))

const UserCapcha=+prompt("please enter the capcha: " + RandomNumber)

if(UserCapcha===RandomNumber){
    alert("you are login")
}else{
    alert("you cannot login")
}
