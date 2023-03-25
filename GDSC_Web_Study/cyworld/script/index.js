const menuHome = () => {
    document.getElementById("contentFrame").setAttribute('src', 'home.html')
    document.getElementById('menuHome').style = "color: black; background-color: white"
    document.getElementById('menuGame').style = "color: white; background-color: #2982b5"
    document.getElementById('menuJuke').style = "color: white; background-color: #2982b5"
}

const menuGame = () => {
    document.getElementById("contentFrame").setAttribute('src', 'game.html')
    document.getElementById('menuGame').style = "color: black; background-color: white"
    document.getElementById('menuHome').style = "color: white; background-color: #2982b5"
    document.getElementById('menuJuke').style = "color: white; background-color: #2982b5"
}

const menuJuke = () => {
    document.getElementById("contentFrame").setAttribute('src', 'jukebox.html')
    document.getElementById('menuJuke').style = "color: black; background-color: white"
    document.getElementById('menuGame').style = "color: white; background-color: #2982b5"
    document.getElementById('menuHome').style = "color: white; background-color: #2982b5"
}
