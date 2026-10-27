let url =prompt("please enter your link address: ")

const ssl = url.substring(0 , 5)

console.log(ssl);

if (ssl==="https"){
    alert("your address is correct")
}else{
    alert("your address is notcorrecr")
}