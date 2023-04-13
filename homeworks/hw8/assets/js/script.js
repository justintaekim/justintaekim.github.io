let songSecondHalf = document.getElementById("songs-second-half")

function toggleSongs() {
    songSecondHalf.classList.toggle("hidden")
}

document.getElementById("toggle-button").onclick = toggleSongs;