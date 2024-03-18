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
let playStarted; // Timestamp when the playing started

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
	console.log('[playTrack]');
	playStarted = Date.now()
    let playButtonId = document.querySelector('#play-button')

	let filePath = playButtonId.getAttribute('data-file-path');
	if(!curr_track.src.endsWith(filePath)) {
		curr_track.src = playButtonId.getAttribute('data-file-path');
	}
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
	console.log('[pauseTrack]');
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    console.log(curr_time)
	saveTime();
}
function nextTrack(){
	saveTime();
    let next_track = document.querySelector('#next-track-id')
    let track_index = next_track.getAttribute('data-file-path')
    console.log(track_index)

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
	saveTime();
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

async function saveTime(){
	let currentTime = Date.now();
	let millisecondsListened = currentTime - playStarted;

	// send this value to server, so it updates the db
	try {
        const userId = localStorage.getItem('userId')
		const updateResponse = await fetch('/api/users/updatelistentime' + '/' + userId, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				timeListened: Math.round(millisecondsListened / 1000)
			})
		});
	} catch (err) {
		console.log(err)
	}



}
