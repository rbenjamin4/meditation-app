let Meditation = []

let track_name = document.querySelector('.track-name');
let track_instructor = document.querySelector('.track-instructor');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let curr_track = document.createElement('audio');

let track_index = 0
let isPlaying = false;
let isRandom = false;
let updateTimer;

// const Meditation = [
//     {
//         name : 'Meditation for Deep Sleep',
//         instructor : 'Todd',
//         fileName : '../audio/Track1.mp3'
//     },
//     {
//         name : 'Morning Meditation for Clarity',
//         instructor : 'Schmuckers',
//         fileName : '../audio/Track2.mp3'
//     },
//     {
//         name : 'Grounding Meditation',
//         instructor : 'Lucy',
//         fileName : '../audio/Track3.mp3'
//     },
// 	{
//         name : 'Midday Meditation',
//         instructor : 'Lucy',
//         fileName : '../audio/Track4.mp3'
//     },
// 	{
//         name : 'Meditation for Self-Trust',
//         instructor : 'Leonardo',
//         fileName : '../audio/Track5.mp3'
//     }
// ];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.load();

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
	let playButtonId = document.querySelector('#play-button')

    curr_track.src = playButtonId.getAttribute('data-file-path');
	console.log(playButtonId)
	console.log(playButtonId.getAttribute('data-file-path'))
	console.log('something')
	console.log(curr_track.src)
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < Meditation.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < Meditation.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * Meditation.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = Meditation.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
