class Mission {
//states first
constructor(
fuelLevel,
oxygenLevel,
foodLevel,
spaceCraft,
launchDateDay,
launchDateMonth,
launchDayYear,
numOfAstronauts
) {   // sustantiate status
this.fuelLevel = fuelLevel;
this.oxygenLevel = oxygenLevel;
this.foodLevel = foodLevel;
this.spaceCraft = spaceCraft;
this.launchDateDay = launchDateDay;
this.launchDateMonth = launchDateMonth;
this.launchDayYear = launchDayYear;
this.numOfAstronauts = numOfAstronauts;
}
// list methods
launch(){
    //code for launch goes here
    alert("we are taking off!");
}

disMissionLauchDate(){
    alert("this mission lauches on " + this.launchDateMonth + ", " + this.launchDateDay + ", " + this.launchDayYear);
}

}


function displayFall(){
    console.log("displayFall() is running");
}

