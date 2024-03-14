// Problem 2
// Discount Eligibility: Create a program for a store that offers a discount on a
// purchase. To receive the discount, customers must have a valid
// membership card (hasMembershipCard) and spend more than 2000.


var spend = 3000;
var membership = 2000000;
if( membership >= 2000000){
if(spend > 2000){
    console.log("Customer is eligible for discount")
}else{
    console.log("Customer is not eligible for discount")
}
}
else{
    console.log("Customer is not eligible for discount")
}
   