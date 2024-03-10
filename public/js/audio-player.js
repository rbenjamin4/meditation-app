const {Howl, Howler} = require('howler')

// // required for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext

let audioContext = new AudioContext()
const audio = new Audio('../audio/NoOneMind-002.mp3', '../audio/NOM_HR.mp3', '../audio/NOM_OMDB.mp3')
const source = audioContext.createMediaElementSource(audio)
const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
let seekSlider = document.querySelector('.seek-slider')
let currentTime = document.querySelector('.current-time');
let trackDuration = document.querySelector('.track-duration')

source.connect(audioContext.destination)

playButton.addEventListener('click', () => {
	if (audioContext.state === 'suspended'){
		audioContext.resume()
	}
	audio.play()
})

pauseButton.addEventListener('click', () => {
	audio.pause()
})

const getFile = async () => {
	const response = await fetch(filePath)
	const arrayBuffer = await response.arrayBuffer()
	const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
	return audioBuffer
}

const setTracks = async () => {
	console.log('setting up tracks')
	const audioTracks = []

	for (const path of paths){
		const track = await getFile(path)
		audioTracks.push(track)
	}
	console.log('setting up tracks complete')
	return audioTracks
}

const playTrack = () => {
	const trackSource = audioContext.createBufferSource()
	trackSource.buffer = audioBuffer
	trackSource.connect(audioContext.destination)
	trackSource.start(time)
}

const seekTo = () => {
    let seekto = source * (seekSlider.value / 100);

}

// // get audio element and pass into audio context
// const audioElement = document.querySelector('audio')
// const track = audioCtx.createMediaElementSource(audioElement)

// const playButton = document.querySelector('.play-button')

// // play pause audio
// playButton.addEventListener('click', function() {
	
// 	// check if context is in suspended state 
// 	if (audioCtx.state === 'suspended') {
// 		audioCtx.resume();
// 	}
	
// 	if (this.dataset.playing === 'false') {
// 		audioElement.play();
// 		this.dataset.playing = 'true'
// 	// if track is playing pause it
// 	} else if (this.dataset.playing === 'true') {
// 		audioElement.pause();
// 		this.dataset.playing = 'false'
// 	}
	
// }, false)



