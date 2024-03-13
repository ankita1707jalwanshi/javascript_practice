

var torder = 52
var distance = 6
var loyalityMember = "yes"
if(torder >= 50){
    console.log("The customer is elligible for free delivery")
}else{
        if(loyalityMember == "yes") {
            console.log("Cumtomer is eligible  for free delivery")
        }else{
            if(distance < 5){
                console.log("customer is eligible  for free delivery")
            }else{
                console.log("The customer is not eligible for free delivery")
            }
        }
}