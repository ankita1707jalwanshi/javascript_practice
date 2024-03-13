// Create a program to determine if a person is eligible to obtain a driver's license.
// If the person is 16 or older, check if they have passed the written test. If they
// have passed the written test, they are eligible for a driver's license; otherwise,
// they are not eligible.

var Age = 20;
var WrittenExam = false;
if(Age >=16){
    if(WrittenExam){
        console.log("Eligible for Driving licence")
    }else{
        console.log("Not Eligible for Driving licence")
    }   
}else{
    console.log("Not Eligible for Driving licence")
}
 