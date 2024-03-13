
// Create a JavaScript program to determine if a person is eligible for marriage
// based on their gender and age. If the person is male, check if he is 21 years or
// older; if yes, he is eligible. If the person is female, check if she is 18 years or
// older; if yes, she is eligible. Print a message indicating whether the person is
// eligible for marriage or not.

// var gender = "male";
var gender = "female";
var age = 19;
if(gender == "male"){
    if(age >=21){
        console.log("Person is elligible for marriage");
    }
    else{
        console.log("Person is not elligible for marriage");
    }
}
else{
    if(age >=18){
        console.log("Person is elligible for marriage");
    }
    else{
        console.log("Person is not elligible for marriage");
    }
}