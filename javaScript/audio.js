let backMusic = document.querySelector("#backgroundMusic");
let musicButton = document.querySelector("#musicButton");
let pplay = 0;

//starts stops background music when music button is pressed
musicButton.addEventListener("click", function(){
    if (pplay === 0){ 
        backMusic.play();
        backMusic.loop = true;
        musicButton.innerHTML = "&#119189;";
        pplay = 1;
    } else {
        backMusic.pause();
        musicButton.innerHTML = "&#119188;";
        pplay = 0;
    }
})

// starts/stops background music after pressing "s" button on a keyboard 
document.addEventListener("keyup", (e) => {    
    if (e.keyCode === 83 && pplay === 0){
            backMusic.play();
            backMusic.loop = true;
            musicButton.innerHTML = "&#119189;";
            pplay = 1;
        } else if (e.keyCode === 83 && pplay === 1) {
            backMusic.pause();
            musicButton.innerHTML = "&#119188;";
            pplay = 0;
        }       
});