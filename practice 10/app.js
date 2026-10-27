
const UserName=prompt("enter your username: ")
const Password=prompt("enter your password: ")

function isLogin(Username , Password){
    const LUserName="Ali";
    const LPassword="ali212732"
    if(LUserName===UserName && LPassword===Password){
      return true;
    }else{
      return false;
    }
}

if (UserName.length<3){
    alert("Eror!")
}
if (Password.length<9){
    alert("Eror!")
}
if (isLogin(UserName,Password)){
   alert("you are login!")
}else{
    alert("you cannot login!")
}