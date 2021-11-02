function load(url){
    console.log(url);
    video.innerHTML += "<source src='"+ url + "'>";
}

function createPlayer (divId, width, height){
    div = document.getElementById(divId);

    text = "<video controls id='video' preload='metadata'";
    text += " width='"+ width +"' height='"+ height +"'>";
    text +=  "Sorry, your browser doesn't support embedded videos.</video>";
    // text += "<button id = 'toggle-play'></button>";
    div.innerHTML = text;

    // const video = document.getElementById('video');
    // const videoControls = document.getElementById('video-controls');
    
    // const videoWorks = !!document.createElement('video').canPlayType;
    // if(videoWorks) {
    //     video.controls = false;
    //     videoControls.classList.remove('hidden');
    // }
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
    if (autoplay){
        video.autoplay = true;
    }
    else{
        video.autoplay = false;
    }
}

function setVolume(volume){
    video.volume = volume/100;

}

function getVolume(){
    return video.volume;
}

function setMute(mute){
    if (mute){
        video.muted = true;
    }
    else{
        video.muted = false;
    }
}

function getDuration(){
    return parseInt(video.duration);
}

function setFullscreen(fullscreen){
    if (fullscreen){
        video.webkitRequestFullScreen();
    }
    else{
        video.fullscreen = false;
    }
}


function getPlaybackState(){
    var duration = video.duration;
    if (video.paused && video.currentTime != duration){
        return "Paused"
    }
    else if (!video.paused && video.currentTime < duration){
        return "Playing"
    }
    else if (video.paused && video.currentTime == duration){
        return "Ended"
    }

}

function getViewability(){

}

createPlayer("video-player", 500, 300);
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');
load("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");
// setFullscreen(true);
// console.log(video.duration);
// setInterval(function(){console.log(getPlaybackState());}, 2000);
// setInterval(function(){console.log(video.currentTime);}, 2000);


// document.addEventListener("DOMContentLoaded", () => {
//     const togglePlay = document.querySelector("#toggle-play");

//     togglePlay.addEventListener("click", () => {
//         console.log(getWidth());
//         if (video.paused || video.ended) {
//             play();
//         }else {
//             pause();
//         }
//     });
// });