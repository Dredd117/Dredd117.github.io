function checkCreds(){
    console.log("checkCreds() function started...")
var firstName = document.getElementById("fName").value;
var lastName = document.getElementById("lName").value;
var badgeNumb = document.getElementById("badgeID").value;
var fullName = firstName + " " + lastName;

console.log( " full name is : " + fullName + ", and the badge ID is : " + badgeNumb);

if(fullName.length > 20 || fullName.length == 2) {
    document.getElementById("loginStatus").innerHTML = "invalid fullName , please try again."
}else if (badgeNumb > 999 || badgeNumb == -999) {
document.getElementById("loginStatus").innerHTML = "invalid badge number, please re-enter."
} else {
    alert("access granted, welcome " + fullName);
    location.replace("UATSpacePage.html")
}

}