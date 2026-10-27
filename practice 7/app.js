let userGender=prompt("what is your gender? ")
let userAge=+prompt("please enter your age: ", 0)

if (userGender=="male" && userAge>18){
    alert("your are login")
}else if(userGender=="female" || userAge<18){
    alert("you cannot login!")
}