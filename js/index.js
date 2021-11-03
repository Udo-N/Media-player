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

function getMute(){
    if (video.muted){
        return true;
    }
    else{
        return false;
    }
}

function getDuration(){
    return Math.round(video.duration);
}

function setFullscreen(fullscreen){
    if (fullscreen){
        video.requestFullscreen();
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

function getViewability() {
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

    return Math.round(visiblePercent);    
}

function createPlayer (divId, width, height){
    div = document.getElementById(divId);

    text = "<video controls id='video' preload='metadata'";
    text += " width='"+ width +"' height='"+ height +"'>";
    text +=  "Sorry, your browser doesn't support embedded videos.</video>";
    div.innerHTML = text;
}



createPlayer("video-player", 1000, 800);
const video = document.getElementById('video');
load("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");




// Test Cases for each API feature(Uncomment line to test)

//play(): Should play every 1.5 seconds
// setInterval(function(){play();}, 1500);

//pause(): Should pause every 1.5 seconds
// setInterval(function(){pause();}, 1500);

// resize(width, height):
// resize(300, 200)

// getHeight():
// console.log(getHeight())

// getWidth():
// console.log(getWidth())

// setAutoplay(autoplay):
// setAutoplay(true)

// setVolume(volume)
// setVolume(10)

// setMute(mute)
// setMute(true)

// getMute()
/* setMute(true)
 console.log(getMute()) */

// getDuration(): If executed before video loads in, NaN is returned
// var delay = setInterval(function(){console.log(getDuration()); clearInterval(delay)}, 100);

// setFullscreen()
// setFullscreen(true)

// getPlaybackState(): Logs playback state every 2 seconds
// setInterval(function(){console.log(getPlaybackState())}, 2000);

// getViewability()
// console.log(getViewability())
