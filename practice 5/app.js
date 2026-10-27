let score = prompt("please inter your score: ");
switch (true) {
    case (isNaN(score)) :{
        alert("kos nanat");
        break;
    }
    case score>20 :{
        alert("kos nanat");
        break;
    }
    case score > 15 :{
        alert("your rate is A");
        break;
    }
    case score>12:{
        alert("your rate is B");
        break;
    }
    default :{
         alert("your rate is C"); 
    }
}