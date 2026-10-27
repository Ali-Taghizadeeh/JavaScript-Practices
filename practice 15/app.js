let price;
let sum=0;
for (i = 0 ; i < 5; i++){
 price= +prompt("please enter the product " +( i+1 )+ " price: ")
 
 sum=sum+price;
}
console.log(sum);