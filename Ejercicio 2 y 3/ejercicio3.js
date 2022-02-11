var audio = document.querySelector("audio");
var isPlaying = false;
var vol = 1;
// play function 

function play() {
    if (isPlaying == true) {
        window.alert("Audio already playing!");
    } else {
        audio.play();
        isPlaying = true;
    }
}

// pause function 

function pause() {
    if (isPlaying == true) {
        audio.pause();
        isPlaying = false;
    } else {
        window.alert("Audio already stopped or paused!");
    }
}

// stop function

function stop() {
    if (isPlaying == true) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    } else {
        window.alert("Audio already stopped or paused!");
    }
}

// volume functionss

function volUp(){
    if(isPlaying == true && vol <= 0.8) {
        vol = vol + 0.2;
        audio.volume = vol;
        console.log(vol);
    }else{
        window.alert("Audio paused or volume already at maximum!");
    }
}
function volDown(){
    if(isPlaying == true && vol >= 0.2) {
        vol = vol - 0.2;
        audio.volume = vol;
        console.log(vol);
    }else{
        window.alert("Audio paused or volume already muted!");
    }
}