//declare the audio file
var creek = new Audio('audio/creek_mono.wav');
$(document).bind("scroll.myScroll", function(){    
    if ($(document).scrollTop() >= 500) { //when 500px is scrolled
        creek.play(); //play audio
        $(document).unbind('.myScroll'); //disable the command
    }
});

// start by setting current background image flag
var currentBackground = 1

function lswitch()
{
    var bgc1 = document.getElementById('s1cC');
    if (currentBackground == 1) {
		bgc1.style.backgroundImage = 'url("images/off.png")'; //set image to off.png
		currentBackground = 2; //change variable value
	}
    else {
		bgc1.style.backgroundImage = 'url("images/on.png")'; //set image to on.png
		currentBackground = 1 //change variable value	
	}
}

 // start by setting current background image flag
var currentImage = 1;
 
function init() {
    // start calling function 'changeImage' every 1.25 seconds
    setInterval(changeID,1250);    
}
 
function changeID() {
    if (currentImage == 1) {
      // set id to title2    
	  document.getElementById('title1').setAttribute("id", "title2");
      currentImage = 2; //change variable value
    }
    else {
		//set id to title1
      document.getElementById('title2').setAttribute("id", "title1"); 
      currentImage = 1; //change variable value
    }
}
window.onload = init;