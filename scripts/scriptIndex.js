function redirect(numberWebsite) {
    websites = ['Skate-in-peace/home.html', 
                'Skate%20Escape/skateEscape.html', 
                'Just%20Listen/justListen.html', 
                'Skate-in-peace/cache/2021.html']
    window.location.replace(websites[numberWebsite]);
}


var games = ['website2']

function setView(nameInput) {
    var checkbox = document.getElementById(nameInput).checked

    if (checkbox) {
        removeGames();
    }
    else if (checkbox != true){
        viewAll();
    }
}

function removeGames() {
    games.forEach(game => document.getElementById(game).style.display="none")
}
function viewAll() {
    games.forEach(game => document.getElementById(game).style.display="block")
}