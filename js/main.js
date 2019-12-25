
var workDuration = 1500;
var shortBreak = 300;
var longBreak = 900;
var counter = 0
var alarm = document.createElement('audio');
alarm.setAttribute('src','./audio/message_3mp3.mp3');

//var workTime = document.getElementById('bt-start');
//workTime.addEventListener("click",startWorking());
//document.getElementById('bt-shortBreak').addEventListener("click",startShortBreak());
//document.getElementById('bt-longBreak').addEventListener("click",startLongBreak());

function startWorking(){
    this.clearInterval(counter);
    this.timer(workDuration);
};

function startShortBreak(){
    clearInterval(counter);
    this.timer(shortBreak);   
};

function startLongBreak(){
    clearInterval(counter);
    this.timer(longBreak);   
};

function timer(seconds){
    counter = setInterval(function(){
        document.getElementById('timeDisplay').innerHTML = displayTime(seconds)
        seconds --;
        if (seconds<0){
            clearInterval(counter);
            alarm.currentTime=0;
            alarm.play();
        };
    },1000); 
    return counter; 
};

function displayTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var seconds = seconds % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var output = minutes +':'+ seconds ;
    return output;
};
