//variable definition for the script
let menu = document.querySelector("#navigation");
let mainDocument = document.querySelector("#main");
let menuButton = document.querySelector("#menuButton");
let menuItem = document.querySelectorAll(".menuItem");

//iteration through menu list items and assign animation
function menuLinkAnimation(){
    menuItem.forEach(menuItem => { 
        menuItem.classList.toggle("menuAnimation");
    });
}
// button clik animatiom
menuButton.addEventListener("click", () => {
    menu.classList.toggle("openMenu");  
    mainDocument.classList.toggle("openMenu");  
    menuButton.classList.toggle("buttonSlideIn");
    menuLinkAnimation();
});

// animation after key m has been pressed 
document.addEventListener("keyup", (e) => {    
    if (e.keyCode === 77){
        menu.classList.toggle("openMenu");  
        mainDocument.classList.toggle("openMenu");
        menuButton.classList.toggle("buttonSlideIn"); 
        menuLinkAnimation();
    }        
});