
//assign variables to carousel objects both need to be in the same order to loop throught together
let imageArray = ["archer.png", "brothers.png", "caveMan.png", "elephant.png", "iceland.png"];
let captionArray = ["robin hood", "brothers in arms", "flinstone", "elephant", "iceland"];
let picture = [];

//definition of buttons 
let leftClick = document.getElementById("buttonLeft");
let rightClick = document.getElementById("buttonRight");
let play = document.getElementById("playButton");

//definition of caption and the main image container
let mainContainer = document.querySelector("#carouselContainer");
let imageFrame = document.querySelector(".imageFrame");
let imgCaption = document.querySelector(".caption");

// track number of the image within the gallery
let n = 0;

// switch to start/stop carousel autoslow
let alt = 1;

//~~~~~~~~~~~~~~~~~~~~~~~~~start the carousel function~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//insert all images in an array and switch them all off
for (let i = 0; i < imageArray.length; i++){
    let createImg = document.createElement("IMG");
    let container = document.querySelector(".imageContainer");
        createImg.setAttribute("src", "images/"+imageArray[i]);
        createImg.className ="imgOFF";
        container.appendChild(createImg);
        picture.push(document.getElementsByClassName("imgOFF")[i]);    
}


//switch on first picture in the gallery
picture[n].classList.replace('imgOFF', 'imgON');

//flip animation of the carousel
function flipAnimation() {
  mainContainer.classList.toggle("rotate"); 
}

//slide forward
function switchForward(){ 

  imageFrame.classList.toggle("back"); //flip frame to position buttons caption from mirrored position
  if(n === picture.length-1){
  n = 0;   
  picture[picture.length-1].classList.replace("imgON", "imgOFF");       
  picture[n].classList.replace("imgOFF", "imgON");

} else {
  picture[n+1].classList.replace('imgOFF', 'imgON');
  picture[n].classList.replace('imgON', 'imgOFF');
  n++;  
}
  imgCaption.innerHTML = captionArray[n];  
  
 // reset timer for slide show 
  if (alt === 1){
    clearInterval(slideRate);
    slideRate = setInterval(slideForward, 5000);
  }
}

//slide backwards
function switchBack(){
  imageFrame.classList.toggle("back"); //flip frame to position buttons caption from mirrored position

    if(n === 0){
        n = picture.length - 1;
        picture[0].classList.replace('imgON', 'imgOFF');
        picture[n].classList.replace('imgOFF', 'imgON');
    } else {
        picture[n].classList.replace('imgON', 'imgOFF');
        picture[n-1].classList.replace('imgOFF', 'imgON');
        n--;
    }

    imgCaption.innerHTML = captionArray[n];

// reset timer for slide show
    if (alt === 1){
      clearInterval(slideRate);
      slideRate = setInterval(slideForward, 5000);
    }
}

//flip slide animations
function slideForward(){
  flipAnimation();
  setTimeout(switchForward, 1200); 
}

function slideBack(){
  flipAnimation();
  setTimeout(switchBack, 1200); 
}


//slide carousel on buttom clicks
rightClick.addEventListener("click", slideForward);
leftClick.addEventListener("click", slideBack);
//slide carousel on when arrow left or right buttons are pressed
document.addEventListener("keyup", function(e){
	let key = e.which || e.keyCode;
    switch(key){ 
       case 39 : slideForward();
       break;
       case 37 : slideBack();
       break;
	}
});

let slideRate;
// initiation of auto slide show after whole page is loaded
window.addEventListener("load", function(e){
    slideRate = setInterval(slideForward, 5000); //2000 miliseconds are 2 second delay between slides
    play.innerHTML = ">";
});

// start/stop slide show by clicking on the play button
  play.addEventListener("click", function(e){
      if (alt === 1){
        clearInterval(slideRate);  
        play.innerHTML = "II";
        alt = 0;
      } else if (alt === 0){
        slideRate = setInterval(slideForward, 5000);
        play.innerHTML = ">";
        alt = 1;
      }   
    });
// start/stop slide show using enter key
    document.addEventListener("keyup", function(e){
        let key = e.keyCode;
        if (key === 13){
        if (alt === 1){
      clearInterval(slideRate);  
          play.innerHTML = "II"; 
          alt = 0;
        } else if (alt === 0){
      slideRate = setInterval(slideForward, 5000);   
          play.innerHTML = ">";
          alt = 1;
        }  
        } 
      });   
 


//~~~~~~~~~~~~~~~~~~~~~~~~~end of the carousel function~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
