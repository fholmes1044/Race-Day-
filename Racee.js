var raceNumber = Math.floor(Math.random() * 1000);
var earlyRegister = false;
var age = 17;
if (age > 18 && earlyRegister === true) {console.log (raceNumber+ 1000);}
if (age > 18 && earlyRegister === true) {console.log ("Race", raceNumber ," will race at 9:30 am;")}
else if (age > 18 && earlyRegister !== true) {console.log ("Race", raceNumber, "will race at 11:00 am")}
else if (age <18 ) {console.log ("Race", raceNumber, "will race at 12:30 pm");}
 