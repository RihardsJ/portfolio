let backMusic = document.querySelector("#backgroundMusic");
let musicButton = document.querySelector("#musicButton");
let pplay = 0;


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
