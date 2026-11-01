const users = [
    { id : 1, name : "Ali", family : "Taghizadeh", age: 23 , email : "Ali@gmail.com" },
    { id : 2, name : "َArshia", family : "Rahmati", age: 22 , email : "Arshia@gmail.com" },
    { id : 3, name : "sobhan", family : "Rasoolzadeh", age: 21 , email : "sobhan@gmail.com" }
];
const fname = prompt("please enter your first name: ");
const lname = prompt("please enter your last name: ");
const age = +prompt("please enter your age: ");
const email = prompt("please enter your email: ");

if ( fname.length < 3 || fname.length > 10){
    alert(" your name length most between 3 and 10 !")
}else if(lname.length < 3 || lname.length > 15){
    alert("your family length most between 3 and 15 !")
}else if (email.search("@gmail.com")=== -1 ){
    alert(" email is not correct !")
}else {
    let user = {
        id : users.length +1 ,
        name: fname ,
        family: lname ,
        age: age ,
        email: email 
    };

 
users.push(user);  
console.log(user);    
}



