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
    mainDocument.classList.toggle("changeMainWidth");
    menuButton.classList.toggle("buttonSlideIn");
    menuLinkAnimation();
});

// animation after key m has been pressed 
document.addEventListener("keyup", (e) => {    
    if (e.keyCode === 77){
        menu.classList.toggle("openMenu");  
        mainDocument.classList.toggle("openMenu");
        mainDocument.classList.toggle("changeMainWidth");
        menuButton.classList.toggle("buttonSlideIn"); 
        menuLinkAnimation();
    }        
});


// animation adjustment for small screen laptops and large tablets
let mCount = 0;

let media1322 = matchMedia("(min-width : 1322px)")
menuButton.addEventListener("click", () => {
    if (!media1322.matches && mCount === 0){
        mainDocument.style.margin = "40px"; 
        mCount = 1
    } else {
        mainDocument.style.margin = "auto";
        mCount = 0;
    }    
});

// animation after key m has been pressed 
document.addEventListener("keyup", (e) => {    
    if (e.keyCode === 77){
         if (!media1322.matches && mCount === 0){
        mainDocument.style.margin = "40px"; 
        mCount = 1
    } else {
        mainDocument.style.margin = "auto";
        mCount = 0;
    } 
    }        
});
 
// mediaquery for small screens when menu is obstracting main container
let media800 = matchMedia("(min-width : 800px)")

    menuButton.addEventListener("click", () => {
        if (!media800.matches){
            mainDocument.style.margin = "auto";
            menu.classList.toggle("openMenu800");                       
        }                  
});

document.addEventListener("keyup", (e) => {    
    if (e.keyCode === 77){
        if (!media800.matches){
            mainDocument.style.margin = "auto";
            menu.classList.toggle("openMenu800");                       
        }  
    }        
});

