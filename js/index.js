function createPlayer (divId, width, height){
    div = document.getElementById(divId);

    text = "<video controls id='video' preload='metadata'";
    text += " width='"+ width +"' height='"+ height +"'>";
    text += "<source src='media/Bamboozle 7.mp4' type='video/mp4'>";
    text +=  "Sorry, your browser doesn't support embedded videos.</video>";
    text += "<button id = 'toggle-play'></button>";
    div.innerHTML = text;

    const video = document.getElementById('video');
    const videoControls = document.getElementById('video-controls');
    
    const videoWorks = !!document.createElement('video').canPlayType;
    if(videoWorks) {
        video.controls = false;
        videoControls.classList.remove('hidden');
    }
}

function play(){
    video.play();
}

function pause(){
    video.pause();
}

function resize(width, height){
    video.width = width;
    video.height = height;
}

function getHeight(){
    return video.height;
}

function getWidth(){
    return video.width;
}

function setAutoplay(autoplay){
    
}

createPlayer("video-player", 500, 300);
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

document.addEventListener("DOMContentLoaded", () => {
    const togglePlay = document.querySelector("#toggle-play");

    togglePlay.addEventListener("click", () => {
        console.log(getWidth());
        if (video.paused || video.ended) {
            play();
        }else {
            pause();
        }
    });
});