
// Problem 6
// Dinner Options: decide where to have dinner with your family. If your
// favorite restaurant has a discount (isSpecialOffer) or you're craving pizza
// (cravingPizza), choose one of those options; otherwise, cook dinner at
// home. Use the OR operator.

 var isSpecialOffer = true;     //your favorite restaurant has a discount
var cravingPizza = false;       //you're not craving pizza


if (isSpecialOffer || cravingPizza) {               // Decide dinner options
    
    console.log("Let's go to our favorite restaurant or order pizza!");
} else {
                                                       // Cook dinner at home
    console.log("Let's cook dinner at home.");
}