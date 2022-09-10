(function Clock() {
    var date = new Date();
    var hour = date.getHours();
    // console.log(hour);
    var minute = date.getMinutes();
    // console.log(minute);
    var second = date.getSeconds();
    // console.log(second);
    var Day=date.getDay();//Sunday = 0, Monday = 1, Tuesday = 2, wednesday = 3 , thursday = 4 , friday = 5, saturday = 6
    switch(Day){
        case 0:
            console.log('Sunday');
            Day='Sun';
            break;
        case 1:
            console.log('Monday');
            Day='Mon';
            break;
        case 2:
            console.log('tuesday');
            Day='Tue';
            break;
        case 3:
            console.log('wednesday');
            Day='Wed';
            break;
        case 4:
            console.log('thursday');
            Day='Thu';
            break;
        case 5:
            console.log('friday');
            Day='Fri';
            break;
        case 6:
            console.log('saturday');
            Day='Sat';
            break;

    }
    // console.log(Day);
    var period = "";
    if (hour >= 12) {
    period = "PM";
    }else{
    period = "AM";
    }
    // Converting the hour in 12-hour format
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    } 
    //Updating hour, minute, and second if they are less than 10
    if (hour < 10) {
        hour="0" + hour;
    }
    if (minute < 10) {
        minute= "0" + minute;
    }
       
    if (second < 10) {
        second="0" + second;
    }
    // Adding time elements to the div
    document.getElementById("Clock").innerText = Day+'->' + hour + " : " + minute + " : " + second + " " + period;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Clock, 1000);
   }());
//----------------------------------------------------------------------------------------------------------
// Alarm
var alarm = null;
(function setAlarm(event){
    event.preventDefault();
   // console.log(event.target[0].value);
    var hr=event.target[0].value;
    var min=event.target[1].value;
    var sec=event.target[2].value;
    var zone=event.target[3].value;
 
    // console.log(hour , min , sec,zone);
 //Updating hour, minute, and second if they are less than 10
 if (hr < 10) {
    hr="0" + hr;
}
if (min < 10) {
    min= "0" + min;
}
   
if (sec < 10) {
    sec="0" + sec;
}
// document.getElementById("alarm").innerText =  hr + " : " + min + " : " + sec + " " + zone;

//   alarm = getTimeString({
//     hours: hour.value,
//     seconds: sec.value,
//     minutes: min.value,
//     zone: zone.value
//   });
//   Reset form after submit
  document.forms[0].reset();
}())

// Attach submit event to the form
document.forms[0].addEventListener("submit", setAlarm);

