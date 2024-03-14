// Problem 7
// Login Authentication: program for a website login system. Users should be
// authenticated if they enter the correct username and password. If the user
// enters the wrong password (enteredPassword !== correctPassword),
// display an error message. Use the logical NOT operator to perform this
// check.

var username = "raushan"
var password = "kumar"
if(username == "raushan"){
    if(password != "kumar"){
        console.log("Error massage")
    }
    else{
        console.log("Login succesfull")
    }
}
else{
  console.log("Enter correct username")
}
