
//assign variables to carousel objects both need to be in the same order to loop throught together
let imageArray = ["elephant.jpg", "brothers.jpg", "kikiNme.jpg", "iceland.jpg"];
let captionArray = ["elephant", "brothers in arms", "Kikee and Me"];
let picture = [];

//definition of buttons 
let leftClick = document.getElementById("buttonLeft");
let rightClick = document.getElementById("buttonRight");
let play = document.getElementById("playButton");

// variable tracks number of the image within the gallery
let n = 0;



//loop inserts all images in an array and switch them all off
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

//function slides forward
function slideForward(){
    if(n === picture.length-1){
        n = 0;   
        picture[picture.length-1].classList.replace("imgON", "imgOFF");        
        picture[n].classList.replace("imgOFF", "imgON"); 
    } else {
        picture[n+1].classList.replace('imgOFF', 'imgON');
        picture[n].classList.replace('imgON', 'imgOFF');
        n++;  
    }         
}

//function slides backwards
function slideBack(){
    if(n === 0){
        n = picture.length - 1;
        picture[n].classList.replace('imgOFF', 'imgON');
        picture[0].classList.replace('imgON', 'imgOFF');
    } else {
        picture[n-1].classList.replace('imgOFF', 'imgON');
        picture[n].classList.replace('imgON', 'imgOFF');
        n--;
    } 
} 

//slide carousel on buttom clicks
rightClick.addEventListener("click", slideForward);
leftClick.addEventListener("click", slideBack);
//slide carousel on when arrow left or right buttons are pressed
document.addEventListener("keyup", function(e){
	var key = e.which || e.keyCode;
    switch(key){ 
       case 68 : slideForward();
       break;
       case 65 : slideBack();
       break;
	}
});


