function start() {
    console.log("start() function started!");
    document.getElementById("data").rows["seconds"].innerHTML = "reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("startButton").enabled = false;
}

function stop() {
    console.log("stop() function started!");
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("stopButton").enabled = false;
}
function getData() {
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}


//a function is initiated as a count down timer.
function countdownTimer() {
    //prints a message in the console of the website
    console.log("counterdownTimer Working");
    //a variable is initiated and is assigned a fixed numeric value
    var currTime = 50;
    document.getElementById("countdownStatus").innerHTML = currTime;
    //the variable is subtracting 5 from itself
    currTime = currTime - 5;

    //timer for 45
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        //5000 = 5 seconds because the computer reads this code in miliseconds
    }, 5000);

    //timer for 40
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 10000);

    //timer for 35
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 15000);

    //timer for 30
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 20000);

    //timer for 25
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 25000);

    //timer for 20
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 30000);

    //timer for 15
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 35000);

    //timer for 10
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 40000);

    //timer for 5
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 45000);

    //timer for 0
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
        currTime = currTime - 5;
    }, 50000);
}
// the function tag initiates a special piece of code that can be referenced to in the html code that performs whatever was coded within the functions brackets.
function playCraps(){
    //the console.log tag prints a message in the console of the website.
    console.log("craps game initiated!");
    //the var tag initiates a variable that is used throughout the code, also has a mathamatic equation that comes up with a random number within the 1-6 range.
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    //the document.getElementById assignes a ID and send it to the .innerHTML that is updated to the variable.
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    // initiates a new variable that adds together the other two variables.
    var dieSum = die1 + die2;
    document.getElementById("diceSum").innerHTML = dieSum;
    // an if else and else if funtion that checks the program if a condition is met and then executes the else or else if.
    if(dieSum == 7 || dieSum == 11){
        document.getElementById("crapsStatus").innerHTML = "Craps! you lose!";
    }else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsStatus").innerHTML = "Doubles! you win!";
    }else{
        document.getElementById("crapsStatus").innerHTML = "you did not lose or win, please try again!";
    }
}

function btrCountdownTimer(){
    console.log("btrCountdownTimer() started");
    var currTime = 50;
    for(var i = 0; i < 10; i++){
        setTimeout(function(){
    document.getElementById("countdownStatus").innerHTML = currTime;
    currTime = currTime - 5;
    },5000 * i);
}
}

setTimeout(function(){
    document.getElementById("countdownStatus").innerHTML = "blastoff!";
}, 50000);

function btrCountdownTimer(){
    console.log("btrCountdownTimer() started");
    var currTime = 50;
    for(var i = 0; i < 11; i++){
    if(i == 10){
      setTimeout(function(){
    document.getElementById("countdownStatus").innerHTML = "blastoff";
    currTime = currTime - 5;
    },5000 * i);
}else if(i > 4){
    setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML = "Warning less than halfway to launch, time left =" + currTime;
        currTime = currTime - 5;
        },5000 * i);
}else{
    setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        },5000 * i);
}
}
}


function sandBoxRun(){
    console.log("sandboxRun started")
    var a = 7;
    if(a == 5){
document.getElementById("sandboxArea").innerHTML = "a does in fact equal five!";
    }else{
        document.getElementById("sandboxArea").innerHTML = "a does not equal five!";
    }



}

function launchFall(){
    console.log("launchFall is running");
    fallLaunch.launch();
}

function playStation(){
    console.log("play space station sounds.");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload" , "audio");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

class InputData {
constructor(
time_seconds,
latitude,
longitude,
gps_altitude,
bmpSensor_altitude,
bmpSensor_pressure,
bmpSensor_temp,
digSensor_temp,
cssSensor_temp,
cssSensor_eCO2,
cssSensor_TVOC,
UV,
accelX,
accelY,
accelZ,
magnetX,
magnetY,
magnetZ,
gyroX,
gyroY,
gyroZ,



){
this.time_seconds = time_seconds;
this.latitude = latitude;
this.longitude = longitude;
this.gps_altitude = gps_altitude;
this.bmpSensor_altitude = bmpSensor_altitude;
this.bmpSensor_pressure = bmpSensor_pressure;
this.bmpSensor_tem = bmpSensor_temp;
this.bmpSensor_temp = bmpSensor_temp;
this.digSensor_temp = digSensor_temp;
this.cssSensor_temp = cssSensor_temp;
this.cssSensor_eCO2 = cssSensor_eCO2;
this.cssSensor_TVOC = cssSensor_TVOC;
this.UV = UV;
this.accelX = accelX;
this.accelY = accelY;
this.accelZ = accelZ;
this.magnetX = magnetX;
this.magnetY = magnetY;
this.magnetZ = magnetZ;
this.gyroX = gyroX;
this.gyroY = gyroY;
this.gyroZ = gyroZ;
}


}

function goUATSpace(){
    console.log("goUATSpace() started");
    location.replace("UATSpacePage.html");
}

function goLandingPage(){
    console.log("goLandingPage() started");
    location.replace("index.html");
}

function goBoards(){
    console.log("goBoards() started");
    location.replace("boards.html");
}
