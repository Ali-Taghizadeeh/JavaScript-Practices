let userAge=+prompt("please inter your age: ", 0)
let gender=prompt("please inter your gender: ")

if (isNaN (userAge)){
    alert("please inter a number!")
}else {
    if (gender=="male" || gender=="female"){
        if (gender=="female" || userAge<18){      
            alert("you can not login!")
        }else{
            alert("wellcome")
        }
}else {
    alert("please inter 'male' or 'female'")
}
}
