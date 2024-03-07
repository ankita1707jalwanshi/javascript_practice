// Problem 1:
// Write a JavaScript program that compares two variables and prints the larger
// one.
var A = 43;
var B = 76;
if(A<B){
    console.log("bigger one is: A")
}
else{
    console.log("bigger is B")
}

// Problem 2:
// Write a JavaScript program that assigns a value to a variable representing age.
// If the age is less than 18, print "You are minor"; otherwise, print "You are an
// adult".

var age = 13;
if(age<12){
    console.log("You are minor")
}
else{
    console.log("you are adult")
}


// Problem 3:
// Develop a program in JavaScript that assigns a value to a variable and checks
// whether it is divisible by 5, printing "Divisible by 5" or "Not divisible by 5"
// accordingly.

var number = 5;
if(number%5==0){
    console.log("Numberis divisible by 5")
}
// else if(number%5!=0){
    else{
    console.log("Number is not divisible by 5")
}

// Problem 4:
// Develop a program in JavaScript that assigns a value to a variable representing
// a number and checks whether it is even or odd

  var Number = 1;        //you can take any num like- 1,2,3,4,5,6,7,8,9 so on...
  if(Number%2==0){
    console.log("Number is even")
  }
  else{
    console.log("Number if odd")
  }


// Problem 5:
// Write a JavaScript program that assigns a value to a variable representing a
// number and checks whether it is positive. If it is positive, print "Positive";
// otherwise, print "Not positive".

var Number = 10;        //you can take any num like- 1,2,3... 0 ... -1, -2, -3 ,-4 so on...
  if(Number >0){
    console.log("Number is Positive")
  }
  else{
 if(Number == 0){
    console.log("Number is zero")
 }
 else if(Number < 0){
    console.log("Number is Negative")
 }
  }
