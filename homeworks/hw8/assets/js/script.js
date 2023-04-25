let songSecondHalf = document.getElementById("songs-second-half")

function toggleSongs() {
    songSecondHalf.classList.toggle("hidden")
}

document.getElementById("toggleButton").onclick = toggleSongs;