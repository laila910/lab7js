var alarmTime='';
var currentTime = setInterval(function(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
	//convert military time to standard time
if(hours <10){
    hours='0' +hours;
}else{
    hours=hours;
}
if(minutes < 10){
    minutes='0'+minutes;
}else{
    minutes=minutes;
}
if(seconds <10){
    seconds='0'+seconds;
}else{
    seconds=seconds;
}


if(hours==00){
    hours=12;
}
	document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds + " " + ampm;
	
},1000);
// Alarm
function alarmSet() {

	var hr = document.getElementById('alarmhrs');
	
	var min = document.getElementById('alarmmins');
	
	var sec = document.getElementById('alarmsecs');
	
	var ap = document.getElementById('ampm');
    

    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;
    
    

     alarmTime = selectedHour + ":" + selectedMin + ":" + selectedSec + selectedAP;
    console.log('alarmTime:' + alarmTime);

    document.getElementById('alarmhrs').disabled = true;
	document.getElementById('alarmmins').disabled = true;
	document.getElementById('alarmsecs').disabled = true;
	document.getElementById('ampm').disabled = true;

//when alarmtime is equal to currenttime then play a sound
setInterval(function(){

	var date = new Date();
	
	var hours = date.getHours();
	
	var minutes = date.getMinutes();
	
	var seconds = date.getSeconds();
	
	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


	//convert military time to standard time

	if(hours <10){
        hours='0' +hours;
    }else{
        hours=hours;
    }
    if(minutes < 10){
        minutes='0'+minutes;
    }else{
        minutes=minutes;
    }
    if(seconds <10){
        seconds='0'+seconds;
    }else{
        seconds=seconds;
    }
   
	
	var currentTime = document.getElementById('clock').textContent = hours+ ":" + minutes + ":" + seconds+ "" + ampm;
	
console.log(currentTime);
	if (alarmTime ==currentTime) {
		alert('wake up,alarm');
		}

},1000);


	 console.log('currentTime:' + currentTime);	

}


function alarmClear() {

	document.getElementById('alarmhrs').disabled = false;
	document.getElementById('alarmmins').disabled = false;
	document.getElementById('alarmsecs').disabled = false;
	document.getElementById('ampm').disabled = false;
	sound.pause();
}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
         showSlides(slideIndex += n);
}
function currentSlide(n) {
         showSlides(slideIndex = n);
}
 function showSlides(n) {
         var i;
         var slides = document.getElementsByClassName("mySlides");
         var dots = document.getElementsByClassName("dot");
         if (n > slides.length) {slideIndex = 1}
         if (n < 1) {slideIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
         for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[slideIndex-1].style.display = "block";
         dots[slideIndex-1].className += " active";
}