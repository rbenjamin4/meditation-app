const playBtn = document.querySelector('#play-button');

const getRecentlyPlayed = async () => {
    let 
    try {
        const recentMeditation = await fetch('meditations');
    } catch (err) {
        console.log(err)
    }
}


// playBtn.addEventListener('click', getRecentlyPlayed)