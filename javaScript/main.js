
// function change text on the Die Hard photo
let changeName = document.querySelector(".dieHardText").textContent;
let newName = document.querySelector(".dieHardText");
let burce = document.querySelector('.dieHard')
let name = "d";

let divideName = changeName.split(' ');

// change name Die Hard -> Ri hard
burce.addEventListener("click", function (){
    if (name === "d"){
        divideName[0] = "Ri";
        changeName = divideName.join(" ");
        newName.textContent = changeName;
        name = "r"       
    } else {
        divideName[0] = "Die";
        changeName = divideName.join(" ");
        newName.textContent = changeName;
        name = "d";
    }
});

// function change photos on laptop screen
let preference = document.getElementsByName("preferable");
let form = document.querySelector("#preference-list");
let laptopScreen = document.querySelector(".laptopScreen");

let desktopImageAtr = {
    "background-position": "center",
    "background-repeat": "no-repeat",
    "background-size": "cover",
}

form.addEventListener("click", function (){
    for (let i = 0; i < preference.length; i++ ){
        if (preference[i].checked){
    let desktopImage = "url(images/"+preference[i].value+".jpg) center"            
            laptopScreen.style.background = desktopImage;
            laptopScreen.style.backgroundSize = "cover";
        }
    }
    
});

// freeCodecamp and codewars links
let freeCodecamp = document.querySelector(".freeCodeCampDiv");
let codewars = document.querySelector(".codeWarsDiv");


freeCodecamp.addEventListener("click", function(){
    open( "https://www.freecodecamp.org/rihards", "_blank");
});
codewars.addEventListener("click", function(){
    open( "https://www.codewars.com/users/RihardsJ", "_blank");
});

// portfolio links
let dmrTributo = document.querySelector("#dmr-tributo");
let survey = document.querySelector("#surveyPage");
let JSalgorithms = document.querySelector("#jsAlgorithms");
let tightHugs = document.querySelector("#tightHugs");


dmrTributo.addEventListener("click", function(){
    open( "https://codepen.io/rihardsj/details/BaNMogP", "_blank");
});
survey.addEventListener("click", function(){
    open( "https://codepen.io/rihardsj/pen/MWaYRew", "_blank");
});
JSalgorithms.addEventListener("click", function(){
    open( "https://codepen.io/rihardsj/pen/ExVVPQg", "_blank");
});
tightHugs.addEventListener("click", function(){
    open( "https://codepen.io/rihardsj/pen/BaoNXJv", "_blank");
});
