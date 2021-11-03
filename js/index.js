function load(url){
    video.innerHTML += "<source src='"+ url + "'>";
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
    return Math.round(video.duration);
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


function getPercentOfView() {
    videoWidth = getWidth();
    videoHeight = getHeight();
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    var rect = video.getBoundingClientRect();

    if (rect.top >= windowHeight || rect.top < -videoHeight){
        return 0;
    }
    if (rect.top >= 0){
        if ((videoHeight + rect.top) <= windowHeight){
            visibleHeight = videoHeight;
        }
        else{
            visibleHeight = windowHeight - rect.top;
        } 
    }
    else{
        if((videoHeight + rect.top) <= windowHeight){
            visibleHeight = videoHeight + rect.top;
        }
        else{
            visibleHeight = windowHeight;
        }
    }

    if (rect.left >= windowWidth || rect.left < -videoWidth){
        return 0;
    }
    if (rect.left >= 0){
        if ((videoWidth + rect.left) <= windowWidth){
            visibleWidth = videoWidth;
        }
        else{
            visibleWidth = windowWidth - rect.left;
        } 
    }
    else{
        if((videoWidth + rect.left) <= windowWidth){
            visibleWidth = videoWidth + rect.left;
        }
        else{
            visibleWidth = windowWidth;
        }
    }

    videoArea = videoWidth * videoHeight;
    visibleArea = visibleWidth * visibleHeight;
    visiblePercent = (visibleArea/videoArea) * 100;

    // console.log(visibleHeight);
    // console.log(visibleWidth);

    return Math.round(visiblePercent)
    
}


// function getViewability(){
//     videoWidth = getWidth();
//     videoHeight = getHeight();
//     windowHeight = window.innerHeight;
//     windowWidth = window.innerWidth;
//     scrollY = window.scrollY;
//     scrollX = window.scrollX;
//     marginTop = parseInt(getComputedStyle(document.getElementById("video-player")).marginTop);
//     videoArea = videoWidth * videoHeight;

//     if (scrollY <= marginTop){
//         visibleHeight = windowHeight - marginTop + scrollY;
//     }
//     else if (scrollY > marginTop){
//         visibleHeight = videoHeight + marginTop - scrollY;
//     }

//     if (visibleHeight > windowHeight){
//         visibleHeight = windowHeight;
//     }
//     else if (visibleHeight > videoHeight){
//         visibleHeight = videoHeight;
//     }
//     else if (visibleHeight < 0){
//         return 0;
//     }

//     if (windowWidth < videoWidth){
//         visibleWidth = windowWidth;
//     }
//     else{
//         visibleWidth = videoWidth;
//     }

//     visibleArea = visibleHeight * visibleWidth;
    
//     console.log(visibleArea);
//     console.log(videoArea);

//     return Math.round((visibleArea / videoArea) * 100);
// }

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

createPlayer("video-player", 1000, 800);
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');
load("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");

// console.log(video.getBoundingClientRect());
// console.log(parseInt(getComputedStyle(document.getElementById("video-player")).marginTop));
// setFullscreen(true);
setInterval(function(){console.log(getPercentOfView()) + "%"}, 1500);
// getPercentOfView()



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