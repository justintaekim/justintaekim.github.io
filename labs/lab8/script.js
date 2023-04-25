let bodyElement = document.querySelector("body")

function toggleTheme() {
    bodyElement.classList.toggle("dark-mode")
}

let buttonVariable = document.getElementById("toggleButton")

buttonVariable.onclick = toggleTheme;