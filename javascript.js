var choice1 = choice2 = choice3 = choice4 = choice5 = choice6 = 0;

function togglecheck(id) {
	var elem = document.getElementById(id);
	if (elem.style.opacity != 1.0) {
		elem.style.opacity = 1.0;
		switch (id) {
		case 'choice_img1':
			document.getElementById("choice1").style.opacity = 1.0;
			document.getElementById("choice1").style.visibility = "visible";
			choice1 = 1;
			break;
		case 'choice_img2':
			document.getElementById("choice2").style.opacity = 1.0;
			document.getElementById("choice2").style.visibility = "visible";
			choice2 = 1;
			break;
			case 'choice_img3':
			document.getElementById("choice3").style.opacity = 1.0;
			document.getElementById("choice3").style.visibility = "visible";
			choice3 = 1;
			break;
			case 'choice_img4':
			document.getElementById("choice4").style.opacity = 1.0;
			document.getElementById("choice4").style.visibility = "visible";
			choice4 = 1;
			break;
			case 'choice_img5':
			document.getElementById("choice5").style.opacity = 1.0;
			document.getElementById("choice5").style.visibility = "visible";
			choice5 = 1;
			break;
			case 'choice_img6':
			document.getElementById("choice6").style.opacity = 1.0;
			document.getElementById("choice6").style.visibility = "visible";
			choice6 = 1;
			break;
		
		}
		
		
	}
	else {
	elem.style.opacity = 0.5;
	switch (id) {
		case 'choice_img1':
			document.getElementById("choice1").style.opacity = 0;
			document.getElementById("choice1").style.visibility = "hidden";
			choice1 = 0;
			break;
		case 'choice_img2':
			document.getElementById("choice2").style.opacity = 0;
			document.getElementById("choice2").style.visibility = "hidden";
			choice2 = 0;
			break;
			case 'choice_img3':
			document.getElementById("choice3").style.opacity = 0;
			document.getElementById("choice3").style.visibility = "hidden";
			choice3 = 0;
			break;
			case 'choice_img4':
			document.getElementById("choice4").style.opacity = 0;
			document.getElementById("choice4").style.visibility = "hidden";
			choice4 = 0;
			break;
			case 'choice_img5':
			document.getElementById("choice5").style.opacity = 0;
			document.getElementById("choice5").style.visibility = "hidden";
			choice5 = 0;
			break;
			case 'choice_img6':
			document.getElementById("choice6").style.opacity = 0;
			document.getElementById("choice6").style.visibility = "hidden";
			choice6 = 0;
			break;
		
		}
	
	}

}

function pretend() {
	window.alert("Let's pretend you are feeling the first one for now :)");
}


function checkselection() {
	if (choice1 == 0 && choice2 == 0 && choice3 == 0 && choice4 == 0 && choice5 == 0 && choice6 == 0) {
	window.alert("Please make a selection.");
	} else window.location.href = "emo1.html";
}


// insert the URL of your two toggle-images

/*var toggleimage=new Array("images/cursor.png","images/hand.png")

//do not edit the variables below
var preload_image_1=new Image()
var preload_image_2=new Image()
preload_image_1.src=toggleimage[0]
preload_image_2.src=toggleimage[1]
var i_image=0

function testloading() {
	isloaded=true
}

function toggle() {
	if (isloaded) {
		document.togglepicture.src=toggleimage[i_image]
	}
	i_image++
	if (i_image>1) {i_image=0}
}
onload=testloading*/


var color = "on";

function ColorToggle() {
	var MyElement = document.getElementById("happy_color");
	if (color == "on") {
		MyElement.style.display = "none";
		document.getElementById("animation_icon").style.opacity = 0.5;
		color = "off";
		}
	else if (color == "off") {
	 MyElement.style.display = "inline";
	 document.getElementById("animation_icon").style.opacity = 1.0;
	 color = "on";
	 } 
	 
}

var img = "on";

function ImageToggle() {
	var MyElement = document.getElementById("happy_pic");
	if (img == "on") {
		MyElement.style.display = "none";
		document.getElementById("image_icon").style.opacity = 0.5;
		img = "off";
		}
	else if (img == "off") {
	 MyElement.style.display = "inline";
	 document.getElementById("image_icon").style.opacity = 1.0;
	 img = "on";
	 } 
	 
}


 /*  var tggle='on';
   var obj;

window.onload=function() {
   obj=document.getElementById('hand')
document.getElementById('hand').onclick=function() {
   toggle();
   return false;
  }
 }
function toggle(){
if(tggle=='on'){
   obj.src="images/cursor.png";
   tggle='off';
 }
else {
   obj.src="images/hand.png";
   tggle='on';
  }
 }*/

var music = 'on';

function MusicToggle() {
	var MyElement = document.getElementById("happy_music");
	if (music == 'on') {
		MyElement.pause();
		document.getElementById("music_icon").style.opacity = 0.5;
		music = 'off';
	} else if (music == 'off') {
	 MyElement.play();
	 document.getElementById("music_icon").style.opacity = 1.0;
	 music = 'on';
	 
	 }
}


var amb = 'on';

function AmbienceToggle() {
	var MyElement = document.getElementById("happy_amb");
	if (amb == 'on') {
		MyElement.pause();
		document.getElementById("ambience_icon").style.opacity = 0.5;
		amb = 'off';
	} else if (amb == 'off') {
	 MyElement.play();
	 document.getElementById("ambience_icon").style.opacity = 1.0;
	 amb = 'on';
	 
	 
	 }
}



var imagesArray = ["slideshow/happy.happy1.jpg", "slideshow/happy.happy2.jpg", "mouse.jpg", "alligator.jpg", "fish.jpg", "parrot.jpg", "cat.jpg"];


//create a function named displayImage
//it should not have any values passed into it

function displayImage(){

    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num = Math.floor(Math.random() * 7); // 0...6
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.canvas.src = imagesArray[num];

}

function popitup(url) {
	newwindow=window.open(url,'name','height=200,width=150');
	if (window.focus) {newwindow.focus()}
	return false;
}

T$('share_icon').onclick = function(){TINY.box.show('advanced.html',1,300,150,1)}
	var content2 = "<img src='images/rhino.jpg' width='298' height='373' alt='' />";






